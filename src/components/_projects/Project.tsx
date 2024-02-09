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
  className: string;
};

const Project = ({ project, className }: Props) => {
  const { id, title, description, image, tags, visit, source } = project;
  return (
    <Card className={cn("max-w-sm dark:bg-slate-600", className)}>
      <div className="w-full">
          {image && (
            <Image
              src={image}
              width={500}
              height={Math.floor((500 * 9) / 16)}
              alt={title}
            />
          )}
        </div>
      <CardHeader>
        
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <h1 className="text-base font-bold">Stack</h1>
          <div className="flex items-center space-x-2 flex-wrap">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                className="text-sm flex items-center space-x-2"
                variant="outline"
              >
                {tag.icon}
                {tag.label}
              </Badge>
            ))}
          </div>
        </div>
        
      </CardContent>
      <div className={"flex items-center space-x-2 mt-2 mb-1 gap-1"}>
          <Button asChild className="rounded-2xl">
            <Link href={source!}>
              <GitHubLogoIcon />
              Github
            </Link>
          </Button>
        </div>
    </Card>
  );
};

export default Project;
