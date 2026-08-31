import React from "react";

import { getTechnologyIcon as getIcon } from "@/config/technologies";

/** Re-export from central registry. Use canonical technology names (e.g. "TypeScript", "Next.js"). */
export function getTechnologyIcon(name: string): React.ReactNode {
  return getIcon(name);
}
