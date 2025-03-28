import { div } from "framer-motion/client";
import { ReactNode } from "react";
import { Typography } from "../typograhpy/typography";
import { SuccessBadge } from "../badge/badge";

export interface ProjectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  badge: ReactNode;
}

export const ProjectCard = ({
  title,
  badge,
  icon,
  description,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-row w-full px-10 py-9 h-40 items-center border-2 border-primary rounded-xl gap-5">
      <figure className="w-28 h-28">{icon}</figure>
      <article className="flex flex-col gap-2 w-full h-full">
        <Typography as="h1" className="text-xl font-extrabold">
          {title}
        </Typography>
        <Typography as="p" className="text-lg font-medium">
          {description}
        </Typography>
        {badge}
      </article>
    </div>
  );
};
