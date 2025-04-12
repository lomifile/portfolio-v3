import clsx from "clsx";
import { Button } from "../button/button";
import { EmailIcon } from "../icons/email-icon";
import { GithubIcon } from "../icons/github-icon";
import { HireMeIcon } from "../icons/hire-me-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { useScroll } from "../providers/scroll-provider";
import { Dispatch, SetStateAction } from "react";
import { sections } from "./side-menu-items.tsx";

export interface MobileMenuProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu = ({ setOpen }: MobileMenuProps) => {
  const { activeSection, scrollToSection } = useScroll();

  return (
    <div className="block lg:hidden">
      <div className="flex lg:hidden w-full flex-col p-6 items-center gap-3 text-white">
        <img
          className="w-36 h-36"
          src="/images/face-image.png"
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
        <div className="flex lg:hidden flex-col max-w-52 justify-center w-full relative">
          {sections.map(({ id, title }) => (
            <div key={id} className="relative lg:hidden">
              {/* Section Links */}
              <div
                className={clsx(
                  "flex flex-row text-white px-5 w-full hover:cursor-pointer py-2 shrink-0 lg:hidden",
                  activeSection === id && "text-white font-extrabold",
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
    </div>
  );
};
