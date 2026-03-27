"use client";

import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Workaround for framer-motion typing mismatch that can occur
// with certain TypeScript versions. Alias motion.div to `MotionDiv`
// with `any` so we can pass regular HTML props like `className`.
const MotionDiv: any = motion.div;

type ExperienceProps = {
  experience: ExperienceType;
};

export const ResumeCard = ({
  experience: { logoUrl, badges, altText, period, description, subtitle, title, href },
}: ExperienceProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link href={href || "#"} className="block cursor-pointer group" onClick={handleClick}>
      <div className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all duration-200">
        {/* Logo */}
        <div className="shrink-0 mt-0.5">
          <Avatar className="size-10 border bg-background">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain p-0.5" />
            <AvatarFallback className="text-xs font-semibold">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <h3 className="font-semibold text-sm truncate">{title}</h3>
              {badges && badges.length > 0 && (
                <div className="flex items-center gap-1 shrink-0">
                  {badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="text-[10px] px-1.5 py-0">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
              {description && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              )}
            </div>
            <span className="text-xs text-muted-foreground tabular-nums shrink-0">{period}</span>
          </div>

          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}

          {description && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="pt-2 text-xs text-muted-foreground leading-relaxed border-t border-border mt-2">
                {description}
              </p>
            </MotionDiv>
          )}
        </div>
      </div>
    </Link>
  );
};
