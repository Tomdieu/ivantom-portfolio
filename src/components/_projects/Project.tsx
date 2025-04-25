import { ProjectType } from "@/constants/projects";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  project: ProjectType;
  className?: string;
};

const Project = ({ project, className }: Props) => {
  const { id, title, description, image, tags, visit, source, dates, links } =
    project;
  return (
    <Card
      className={cn(
        "flex flex-col border hover:shadow-lg transition-all duration-300 ease-out h-full w-full",
        className
      )}
    >
      <Link
        href={visit || source || "#"}
        className={cn("block cursor-pointer w-full")}
      >
        {image && (
          <Image
            src={image}
            width={500}
            height={300}
            alt={title}
            className="h-40 w-full overflow-hidden object-contain object-top rounded-t-md"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          {dates && <time className="font-sans text-xs">{dates}</time>}
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag.label}
              >
                {tag.label}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        <div className="flex flex-row flex-wrap items-start gap-1">
          {/* {source && (
            <Link href={source} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <GitHubLogoIcon />
                Github
              </Badge>
            </Link>
          )} */}
          {links && links.length > 0 && (
            <>
              {links.map(({ href, label, icon }, index) => (
                <Link href={href} key={index} target="_blank">
                  <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                    {icon && icon}
                    {label}
                  </Badge>
                </Link>
              ))}
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Project;
