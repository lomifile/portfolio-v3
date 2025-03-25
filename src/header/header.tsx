import { HandEmoji } from "../components/icons/hand-emoji";
import { Typography } from "../components/typograhpy/typography";

export function Header() {
  return (
    <header className="flex flex-row gap-20 justify-between w-full px-8">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-row gap-5 items-center">
          <Typography as="h1" className="text-5xl font-extrabold">
            Filip Ivanušec
          </Typography>
          <HandEmoji />
        </div>
        <Typography as="h1" className="text-4xl font-medium">
          Software developer
        </Typography>
        <Typography as="span" className="text-2xl font-medium max-w-3xl">
          I am software developer, focusing on building scalable web apps. Want
          to talk how I can help you take your project to the moon? Check out my
          portfolio and resume.
        </Typography>
      </div>
      <div className="flex w-full justify-center">
        <img
          className="rounded-[100px] w-xl h-xl"
          src="/images/my-image.jpeg"
          alt="filip-ivanusec"
        />
      </div>
    </header>
  );
}
