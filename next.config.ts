import type { NextConfig } from "next";

import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  // @google/genai (via @posthog/ai) does a dynamic require('ws') for the Live API.
  // Next.js can't trace the dynamic require, so mark it external to keep it in the
  // serverless bundle. Removing this causes "Cannot find module 'ws'" on Vercel.
  serverExternalPackages: ["ws"],
  // serverExternalPackages alone keeps ws external but Next.js still fails to add
  // it to the route's output file trace (route.js.nft.json), so Vercel never uploads
  // node_modules/ws into the function. Force-include it for the chat route.
  outputFileTracingIncludes: {
    "/api/chat": ["./node_modules/ws/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.discordapp.net",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/ph/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ph/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default withContentCollections(nextConfig);
