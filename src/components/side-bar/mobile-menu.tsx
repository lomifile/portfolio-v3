import clsx from "clsx";
import { motion } from "framer-motion";
import { Button } from "../button/button";
import { EmailIcon } from "../icons/email-icon";
import { GithubIcon } from "../icons/github-icon";
import { HireMeIcon } from "../icons/hire-me-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { useScroll } from "../providers/scroll-provider";
import { Dispatch, SetStateAction } from "react";

export interface MobileMenuProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu = ({ setOpen }: MobileMenuProps) => {
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About me" },
    { id: "projects", title: "Projects" },
    { id: "resume", title: "Resume" },
  ];

  const { activeSection, scrollToSection } = useScroll();

  return (
    <>
      <div className="flex w-full flex-col p-6 items-center gap-3 text-white">
        <img
          className="w-36 h-36"
          src="/images/face.png"
          alt="filip-ivanusec"
        />
        <span className="lg:text-2xl text-md font-extrabold">
          Filip Ivanušec
        </span>
      </div>
      <div className="flex px-2 flex-col gap-3 justify-center items-center">
        <span className="text-md text-center text-white">
          I am software developer based in croatia
        </span>
        <div className="flex flex-row p-2 gap-5 w-full justify-center items-center">
          <button className="flex text-pretty text-primary justify-center items-center bg-white rounded-full w-9 h-9 hover:cursor-pointer">
            <LinkedinIcon className="w-4 h-4" />
          </button>
          <button className="flex text-pretty text-primary justify-center items-center bg-white rounded-full w-9 h-9 hover:cursor-pointer">
            <GithubIcon className="w-4 h-4" />
          </button>
          <button className="flex text-pretty text-primary justify-center items-center bg-white rounded-full w-9 h-9 hover:cursor-pointer">
            <EmailIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="flex flex-col max-w-52 justify-center w-full relative">
          {sections.map(({ id, title }) => (
            <div key={id} className="relative">
              {activeSection === id && (
                <motion.div
                  layoutId="active-border"
                  className="absolute left-0 top-0 h-full w-1 bg-white"
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}

              {/* Section Links */}
              <div
                className={clsx(
                  "flex flex-row text-white px-5 w-full hover:cursor-pointer py-2 shrink-0",
                  activeSection === id && "text-white font-bold",
                )}
                onClick={() => {
                  setOpen(false);
                  scrollToSection(id);
                }}
              >
                {title}
              </div>
            </div>
          ))}
        </div>
        <Button>
          <HireMeIcon />
          Hire me
        </Button>
      </div>
    </>
  );
};
