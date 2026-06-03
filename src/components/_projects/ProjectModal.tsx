"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import { ProjectType, getProjectSlug } from "@/constants/projects";
import {
  Credenza,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaBody,
} from "@/components/ui/credenza";

type Props = {
  project: ProjectType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ProjectModal = ({ project, open, onOpenChange }: Props) => {
  return (
    <Credenza open={open} onOpenChange={onOpenChange}>
      <CredenzaContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        {/* Hero image */}
        {project.image ? (
          <div className="relative w-full overflow-hidden" style={{ height: "240px" }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="672px"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="w-full h-28 bg-muted flex items-center justify-center">
            <span className="text-5xl font-bold text-muted-foreground/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        <CredenzaHeader className="px-6 pt-5 pb-0">
          <CredenzaTitle className="text-2xl font-bold">{project.title}</CredenzaTitle>
          {project.dates && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
              <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
              <time>{project.dates}</time>
            </div>
          )}
        </CredenzaHeader>

        <CredenzaBody className="px-6 md:px-6 pb-8 pt-4 space-y-5">
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary text-secondary-foreground px-2.5 py-1 text-xs font-medium"
                  >
                    {tag.icon && <span>{tag.icon}</span>}
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project page link */}
          <div>
            <Link
              href={`/projects/${getProjectSlug(project)}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
              onClick={() => onOpenChange(false)}
            >
              <ArrowUpRight className="h-4 w-4" />
              Open project page
            </Link>
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Links
              </p>
              <div className="flex flex-wrap gap-2">
                {project.links.map(({ href, label, icon }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {icon ? (
                      <span className="h-4 w-4 flex items-center">{icon}</span>
                    ) : (
                      <ExternalLinkIcon className="h-4 w-4" />
                    )}
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
};

export default ProjectModal;
