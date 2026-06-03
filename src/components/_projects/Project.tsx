"use client";

import { ProjectType, getProjectSlug } from "@/constants/projects";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";

type Props = {
  project: ProjectType;
  className?: string;
};

const Project = ({ project, className }: Props) => {
  const { title, description, image, tags, dates, links } = project;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`View details for ${title}`}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
        className={cn(
          "group flex flex-col rounded-xl border border-border bg-card overflow-hidden",
          "hover:border-border/80 hover:shadow-lg cursor-pointer transition-all duration-300 h-full",
          className
        )}
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-muted" style={{ height: "180px" }}>
          {image ? (
            <>
              <Image
                src={image}
                width={600}
                height={360}
                alt={title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Link
                href={`/projects/${getProjectSlug(project)}`}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="flex items-center gap-2 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                  <ExternalLink className="h-3 w-3" />
                  View Details
                </span>
              </Link>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-4xl font-bold text-muted-foreground/20">
                {title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 space-y-3">
          <div className="space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-sm leading-tight">
                <Link href={`/projects/${getProjectSlug(project)}`} className="hover:underline">
                  {title}
                </Link>
              </h3>
              {dates && (
                <time className="text-[10px] text-muted-foreground shrink-0 tabular-nums">
                  {dates}
                </time>
              )}
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center rounded-md bg-secondary text-secondary-foreground px-2 py-0.5 text-[10px] font-medium"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}

          {/* Links preview */}
          {links && links.length > 0 && (
            <div
              className="flex flex-wrap items-center gap-2 pt-2 border-t border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map(({ href, label, icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center border p-1 rounded-sm items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {icon && <span className="h-4 w-4">{icon}</span>}
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <ProjectModal project={project} open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default Project;
