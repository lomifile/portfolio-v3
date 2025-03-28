import { ReactNode } from "react";
import { Typography } from "../typograhpy/typography";

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
    <div className="flex flex-row w-full p-2 lg:p-5 md:p-10 h-40 items-center border-2 border-primary rounded-xl gap-5">
      <figure className="hidden w-28 h-28 lg:flex">{icon}</figure>
      <article className="flex flex-col gap-2 w-full h-full">
        <Typography as="h1" className="text-xl font-extrabold">
          {title}
        </Typography>
        <Typography as="p" className="text-sm xl:text-lg font-medium">
          {description}
        </Typography>
        {badge}
      </article>
    </div>
  );
};
