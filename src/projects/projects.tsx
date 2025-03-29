import {
  DangerBadge,
  InfoBadge,
  SuccessBadge,
} from "../components/badge/badge.tsx";
import { Button } from "../components/button/button.tsx";
import { ProjectCard } from "../components/card/project-card";
import { GoIcon } from "../components/icons/go-icon";
import { HireMeIcon } from "../components/icons/hire-me-icon.tsx";
import { PythonIcon } from "../components/icons/python-icon.tsx";
import { TsIcon } from "../components/icons/ts-icon.tsx";
import { Typography } from "../components/typograhpy/typography";

export function Projects() {
  return (
    <section className="w-full h-screen">
      <div className="w-full p-10">
        <Typography as="h1" className="text-5xl font-extrabold">
          Projects
        </Typography>
      </div>
      <div className="lg:p-10 w-full flex flex-col p-5 lg:grid lg:grid-cols-2 gap-10">
        <ProjectCard
          title="Sync me"
          badge={<SuccessBadge />}
          icon={<GoIcon className="w-full h-full" />}
          description="Small utility I developed to transfer my notes onto my NAS server using SFTP."
        />
        <ProjectCard
          title="Kindie"
          badge={<DangerBadge />}
          icon={<TsIcon className="w-full h-full" />}
          description="Simple to use web app to improve handling professional documentation."
        />
        <ProjectCard
          title="Face recognition api"
          badge={<SuccessBadge />}
          icon={<PythonIcon className="w-full h-full" />}
          description="My bacc. final assignment."
        />
        <ProjectCard
          title="Dandileon"
          badge={<InfoBadge />}
          icon={<TsIcon className="w-full h-full" />}
          description="Simple to use web app to help you manage workhours."
        />
      </div>
      <div className="flex w-full p-5 lg:p-10 justify-center items-center flex-col gap-4">
        <Typography as="h1" className="lg:text-4xl text-center text-extrabold">
          Want to see your project here?
        </Typography>
        <Button className="w-xs" fill="primary">
          <HireMeIcon />
          Hire me
        </Button>
      </div>
    </section>
  );
}
