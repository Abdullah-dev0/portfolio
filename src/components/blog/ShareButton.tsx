"use client";

import { type ComponentType, useState } from "react";

import { Share2 } from "lucide-react";
import { toast } from "sonner";

import Copied from "@/components/svgs/Copied";
import Copy from "@/components/svgs/Copy";
import LinkedIn from "@/components/svgs/LinkedIn";
import X from "@/components/svgs/X";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { type ShareChannelId, shareConfig } from "@/config/Share";
import { useIsMobile } from "@/hooks/use-mobile";

const channelIcons: Record<
  ShareChannelId,
  ComponentType<{ className?: string }>
> = {
  x: X,
  linkedin: LinkedIn,
};

interface ShareProps {
  url: string;
  title: string;
}

// Module scope: keeps this a stable component reference across renders.
function SharePanel({ url, title }: ShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success(shareConfig.copiedMessage);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(shareConfig.copyErrorMessage);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          readOnly
          value={url}
          aria-label="Post link"
          className="bg-muted"
          onFocus={(e) => e.currentTarget.select()}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : shareConfig.copyLabel}
        >
          {copied ? <Copied className="size-4" /> : <Copy className="size-4" />}
        </Button>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-2">
        {shareConfig.channels.map((channel) => {
          const Icon = channelIcons[channel.id];
          return (
            <Button
              key={channel.id}
              asChild
              variant="outline"
              className="flex-1 gap-2"
            >
              <a
                href={channel.buildHref(url, title)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${channel.label}`}
              >
                <Icon className="size-4" />
                <span>{channel.label}</span>
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default function ShareButton({ url, title }: ShareProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const trigger = (
    <Button variant="ghost" size="sm" className="gap-2">
      <Share2 className="size-4" />
      <span>Share</span>
    </Button>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{shareConfig.title}</DrawerTitle>
            <DrawerDescription>{shareConfig.description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-8">
            <SharePanel url={url} title={title} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{shareConfig.title}</DialogTitle>
          <DialogDescription>{shareConfig.description}</DialogDescription>
        </DialogHeader>
        <SharePanel url={url} title={title} />
      </DialogContent>
    </Dialog>
  );
}
