import { SuccessBadge } from "../components/badge/badge.tsx";
import { Button } from "../components/button/button.tsx";
import { ProjectCard } from "../components/card/project-card";
import { CIcon } from "../components/icons/c-icon.tsx";
import { CppIcon } from "../components/icons/cpp-icon.tsx";
import { HireMeIcon } from "../components/icons/hire-me-icon.tsx";
import { PythonIcon } from "../components/icons/python-icon.tsx";
import { TsIcon } from "../components/icons/ts-icon.tsx";
import { Typography } from "../components/typograhpy/typography";

export function Projects() {
  return (
    <section className="w-full h-screen">
      <div className="w-full p-5 lg:p-10">
        <Typography as="h1" className="text-5xl font-extrabold">
          Projects
        </Typography>
      </div>
      <div className="lg:p-10 w-full flex flex-col p-5 lg:grid lg:grid-cols-2 gap-10 overflow-auto">
        <ProjectCard
          title="Task CLI"
          badge={<SuccessBadge />}
          icon={<CppIcon className="w-full h-full" />}
          description="Simple small tasks utility built using CPP and custom JSON parser"
        />
        <ProjectCard
          title="Game engine"
          badge={<SuccessBadge />}
          icon={<CppIcon className="w-full h-full" />}
          description="A simple game engine written in C++ using DX11"
        />
        <ProjectCard
          title="Editor"
          badge={<SuccessBadge />}
          icon={<CppIcon className="w-full h-full" />}
          description="A simple CLI editor written in C++"
        />
        <ProjectCard
          title="JSON parser"
          badge={<SuccessBadge />}
          icon={<CppIcon className="w-full h-full" />}
          description="Simple CLI JSON parser"
        />
        <ProjectCard
          title="Kindie"
          badge={<SuccessBadge />}
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
          title="Password manager"
          badge={<SuccessBadge />}
          icon={<CIcon className="w-full h-full" />}
          description="Small and simple CLI password manager built using libsodium and small sqlite3 clone"
        />
      </div>
      <div className="hidden lg:flex w-full p-5 lg:p-10 justify-center items-center flex-col gap-4">
        <Typography as="h1" className="lg:text-4xl text-center text-extrabold">
          Want to see your project here?
        </Typography>
        <Button
          onClick={() => {
            window.location.href = "mailto:fivanusec@gmail.com";
          }}
          className="w-xs"
          fill="primary"
        >
          <HireMeIcon />
          Hire me
        </Button>
      </div>
    </section>
  );
}
