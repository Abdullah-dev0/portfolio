"use client";

import { useState } from "react";

import Copied from "@/components/svgs/Copied";
import Copy from "@/components/svgs/Copy";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CodeCopyButtonProps {
  code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <form
      action={copyToClipboard}
      className="absolute top-3 right-3 rounded-md opacity-0 transition-all duration-200 group-hover:opacity-100 hover:cursor-pointer"
      title={isCopied ? "Copied!" : "Copy code"}
    >
      {isCopied ? (
        <Tooltip>
          <TooltipTrigger className="cursor-pointer">
            <Copied className="h-4 w-4 text-green-500" />
          </TooltipTrigger>
          <TooltipContent>Copied to clipboard!</TooltipContent>
        </Tooltip>
      ) : (
        <Tooltip>
          <TooltipTrigger className="cursor-pointer">
            <Copy className="text-secondary h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>Copy to clipboard</TooltipContent>
        </Tooltip>
      )}
    </form>
  );
}
