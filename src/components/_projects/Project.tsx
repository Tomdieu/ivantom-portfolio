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
  const { id, title, description, image, tags, visit, source } = project;
  return (
    <Card className={cn("max-w-lg dark:bg-slate-600 hover:scale-105 hover:shadow-lg hover:rotate-1 ease-linear transition-all", className)}>
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
          <div className="flex items-center space-x-2 flex-nowrap line-clamp-1">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                className="text-sm flex items-center space-x-2 space-y-2 gap-2 line-clamp-1"
                variant="outline"
              >
                {/* {tag.icon} */}
                {tag.label}
              </Badge>
            ))}
          </div>
        </div>
        
      </CardContent>
      <CardFooter>
      <div className={"flex items-center space-x-2 gap-1 px-2"}>
          <Button asChild className="rounded-2xl">
            <Link href={source!}>
              <GitHubLogoIcon />
              Github
            </Link>
          </Button>
        </div>
      </CardFooter>
      
    </Card>
  );
};

export default Project;
