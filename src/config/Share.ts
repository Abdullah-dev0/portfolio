import { profileConfig } from "./Profile";

export type ShareChannelId = "x" | "linkedin";

export interface ShareChannel {
  id: ShareChannelId;
  label: string;
  /** Receives the raw, unencoded canonical URL and post title. */
  buildHref: (url: string, title: string) => string;
}

export interface ShareConfig {
  title: string;
  description: string;
  copyLabel: string;
  copiedMessage: string;
  copyErrorMessage: string;
  xHandle: string;
  channels: ShareChannel[];
}

export const shareConfig: ShareConfig = {
  title: "Share this post",
  description: "Share this post with your network or copy the link below.",
  copyLabel: "Copy link",
  copiedMessage: "Link copied to clipboard",
  copyErrorMessage: "Failed to copy link",
  xHandle: profileConfig.xHandle,
  channels: [
    {
      id: "x",
      label: "X",
      buildHref: (url, title) =>
        `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=${shareConfig.xHandle}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      buildHref: (url) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ],
};
