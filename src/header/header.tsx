import clsx from "clsx";
import { useState } from "react";
import { HandEmoji } from "../components/icons/hand-emoji";
import { Typography } from "../components/typograhpy/typography";
import { MobileMenu } from "../components/side-bar/mobile-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-row gap-20 justify-between w-full lg:px-8">
      <div className="flex flex-col gap-12 w-full">
        <div className="hidden lg:flex-row gap-7 items-center lg:flex">
          <Typography
            as="h1"
            className="text-2xl lg:text-4xl xl:text-5xl font-extrabold text-white lg:text-dark-bg"
          >
            Filip Ivanušec
          </Typography>
          <HandEmoji style={{ scale: "1.5" }} />
        </div>
        <div
          className={clsx(
            "fixed h-screen w-full -left-[400px] md:-left-[800px] top-20 z-30 bg-primary transition-all duration-500 lg:hidden",
            isOpen && "left-0",
          )}
        >
          <MobileMenu isOpen={isOpen} setOpen={setIsOpen} />
        </div>
        <div className="flex flex-row gap-5 justify-between items-center lg:hidden sticky top-0 bg-primary">
          <Typography
            as="h1"
            className="text-2xl lg:5xl font-extrabold text-white lg:text-dark-bg"
          >
            Filip Ivanušec
          </Typography>
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={clsx(
                "h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300",
                isOpen
                  ? "rotate-45 translate-y-3 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100",
              )}
            />
            <div
              className={clsx(
                "h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300",
                isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100",
              )}
            />
            <div
              className={clsx(
                "h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300",
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100",
              )}
            />
          </button>
        </div>
        <Typography
          as="h1"
          className="text-2xl lg:text-2xl xl:text-4xl font-medium text-white lg:text-dark-bg"
        >
          Software developer
        </Typography>
        <Typography
          as="span"
          className="text-lg lg:text-2xl font-medium max-w-3xl text-white lg:text-dark-bg"
        >
          I am software developer, focusing on building scalable web apps. Want
          to talk how I can help you take your project to the moon? Check out my
          portfolio and resume.
        </Typography>
      </div>
      <div className="hidden lg:flex w-full justify-center">
        <img
          className="rounded-[100px] w-xl h-xl"
          src="/images/my-image.jpeg"
          alt="filip-ivanusec"
        />
      </div>
    </header>
  );
}
