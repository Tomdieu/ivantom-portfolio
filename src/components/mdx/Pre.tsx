"use client";

import { useState, useRef } from "react";
import { Check, Copy } from "lucide-react";

export const Pre = ({ children, ...props }: any) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const onCopy = () => {
    if (preRef.current) {
      navigator.clipboard.writeText(preRef.current.textContent || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group my-6">
      <button
        onClick={onCopy}
        className="absolute right-3 top-3 z-10 p-2 rounded-md bg-zinc-800 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-700 hover:text-white border border-zinc-700 shadow-sm"
        aria-label="Copy code"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </button>
      <pre 
        ref={preRef} 
        {...props} 
        className={`p-4 rounded-xl bg-[#0d1117] overflow-x-auto text-[14px] leading-relaxed border border-border shadow-sm ${props.className || ""}`}
      >
        {children}
      </pre>
    </div>
  );
};
