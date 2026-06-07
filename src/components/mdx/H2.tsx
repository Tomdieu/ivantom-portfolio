"use client";

import React from "react";

export const H2 = ({ children, ...props }: any) => {
  // Extract text content from children
  const text = React.Children.toArray(children).join("");
  
  // Check if it matches the "Step X: Title" pattern
  const stepMatch = text.match(/^Step (\d+):\s*(.*)/i);

  if (stepMatch) {
    const stepNum = stepMatch[1];
    const title = stepMatch[2];
    
    return (
      <h2 {...props} className="flex items-center gap-4 mt-16 mb-8 text-2xl md:text-3xl font-bold text-foreground">
        <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-md text-xl font-black">
          {stepNum}
        </span>
        <span className="leading-tight">{title}</span>
      </h2>
    );
  }

  // Fallback for regular H2 tags
  return (
    <h2 {...props} className="mt-12 mb-6 text-3xl font-bold tracking-tight text-foreground border-b border-border pb-2">
      {children}
    </h2>
  );
};
