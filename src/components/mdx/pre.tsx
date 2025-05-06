"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import React from "react";

interface CodeProps {
  children: string;
  className?: string;
}

interface PreProps {
  children: React.ReactElement<CodeProps>;
  [key: string]: any;
}

export function Pre({ children, ...props }: PreProps) {
  const [isCopied, setIsCopied] = useState(false);
  const code = children.props.children;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <pre {...props} className="!mt-0">
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 cursor-pointer rounded-md bg-zinc-800/50 p-2 text-zinc-300 opacity-0 transition-colors group-hover:opacity-100 hover:bg-zinc-800 hover:text-white"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
