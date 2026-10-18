"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import * as z from "zod";

const LANYARD_USER_ID = process.env.NEXT_PUBLIC_LANYARD_USER_ID;
const LANYARD_SOCKET_URL = "wss://api.lanyard.rest/socket";
const RECONNECT_DELAY_MS = 5000;

const activitySchema = z.object({
  name: z.string(),
  details: z.string().nullish(),
  state: z.string().nullish(),
  timestamps: z.object({ start: z.number().nullish() }).nullish(),
  assets: z
    .object({
      large_image: z.string().nullish(),
      large_text: z.string().nullish(),
      small_image: z.string().nullish(),
      small_text: z.string().nullish(),
    })
    .nullish(),
});

const presenceSchema = z.object({
  discord_status: z.enum(["online", "idle", "dnd", "offline"]),
  activities: z.array(activitySchema),
});

const messageSchema = z.discriminatedUnion("op", [
  z.object({
    op: z.literal(0),
    t: z.enum(["INIT_STATE", "PRESENCE_UPDATE"]),
    d: presenceSchema,
  }),
  z.object({
    op: z.literal(1),
    d: z.object({ heartbeat_interval: z.number() }),
  }),
]);

type LanyardPresence = z.infer<typeof presenceSchema>;

const DISCORD_STATUS_LABELS: Record<LanyardPresence["discord_status"], string> =
  {
    online: "Online on Discord",
    idle: "Idle on Discord",
    dnd: "Do not disturb",
    offline: "Offline",
  };

// Discord serves external assets as "mp:external/..." paths
function getAssetUrl(asset?: string | null) {
  return asset?.startsWith("mp:external/")
    ? asset.replace("mp:external/", "https://media.discordapp.net/external/")
    : undefined;
}

export default function Presence() {
  const [presence, setPresence] = useState<LanyardPresence | null>(null);
  const [error, setError] = useState(false);
  const [nowTime, setNowTime] = useState(() => Date.now());

  useEffect(() => {
    if (!LANYARD_USER_ID) return;

    let socket: WebSocket;
    let heartbeatId: number | undefined;
    let reconnectId: number | undefined;
    let disposed = false;

    const connect = () => {
      socket = new WebSocket(LANYARD_SOCKET_URL);

      socket.onmessage = (event) => {
        const message = messageSchema.safeParse(JSON.parse(event.data));
        if (!message.success) return;

        if (message.data.op === 1) {
          socket.send(
            JSON.stringify({ op: 2, d: { subscribe_to_id: LANYARD_USER_ID } })
          );
          heartbeatId = window.setInterval(
            () => socket.send(JSON.stringify({ op: 3 })),
            message.data.d.heartbeat_interval
          );
          return;
        }

        setPresence(message.data.d);
        setError(false);
      };

      socket.onclose = () => {
        window.clearInterval(heartbeatId);
        if (disposed) return;
        setError(true);
        reconnectId = window.setTimeout(connect, RECONNECT_DELAY_MS);
      };
    };

    connect();
    return () => {
      disposed = true;
      window.clearInterval(heartbeatId);
      window.clearTimeout(reconnectId);
      socket.close();
    };
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setNowTime(Date.now());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  if (!LANYARD_USER_ID) return null;

  if (!presence) {
    if (!error) {
      return (
        <div className="flex items-center gap-3">
          <p className="text-muted-foreground">Loading presence...</p>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-3">
        <div className="bg-destructive/10 flex h-16 w-16 items-center justify-center rounded-lg">
          <span className="text-sm">⚠️</span>
        </div>
        <div>
          <p className="text-destructive font-medium">Connection Error</p>
          <p className="text-muted-foreground text-sm">
            Failed to fetch presence data
          </p>
        </div>
      </div>
    );
  }

  const activity = presence.activities.find((a) => a.name === "Code");

  if (!activity) {
    return (
      <div className="flex items-center gap-3">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            fillRule="evenodd"
            height="1em"
            style={{ flex: "none", lineHeight: 1 }}
            viewBox="0 0 24 24"
            width="1em"
          >
            <title>Cursor</title>
            <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium">Not coding right now</p>
          <p className="text-muted-foreground text-sm">
            {DISCORD_STATUS_LABELS[presence.discord_status]}
          </p>
        </div>
      </div>
    );
  }

  const start = activity.timestamps?.start;
  const elapsed = start ? nowTime - start : 0;
  const h = Math.floor(elapsed / 3600000);
  const m = Math.floor((elapsed % 3600000) / 60000);
  const s = Math.floor((elapsed % 60000) / 1000);

  const activityLabel =
    activity.assets?.small_text || activity.name || "Editor";

  const largeImage = getAssetUrl(activity.assets?.large_image);
  const smallImage = getAssetUrl(activity.assets?.small_image);

  return (
    <div className="flex items-center gap-3">
      {largeImage ? (
        <div className="relative self-start">
          <Image
            src={largeImage}
            alt={activity.assets?.large_text || "Activity"}
            className="rounded-lg object-cover"
            width={30}
            height={30}
          />
          {smallImage && (
            <Image
              src={smallImage}
              alt={activity.assets?.small_text || "Editor"}
              width={20}
              height={20}
              className="border-background absolute -right-1 -bottom-1 rounded-full border-2"
            />
          )}
        </div>
      ) : (
        <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg">
          <span className="text-2xl">💻</span>
        </div>
      )}
      <div>
        <p className="text-sm font-medium">
          {activity.details || `Coding in ${activityLabel}`}
        </p>
        <p className="text-muted-foreground text-sm">
          {h > 0 && `${h}h `}
          {m}m {s}s
        </p>
        {activity.state && (
          <p className="text-muted-foreground text-xs">{activity.state}</p>
        )}
      </div>
    </div>
  );
}
