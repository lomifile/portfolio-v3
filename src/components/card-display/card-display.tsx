import { Card } from "../card/card";
import { CssIcon } from "../icons/css-icon";
import { ExpressIcon } from "../icons/express-icon";
import { FastifyIcon } from "../icons/fastify-icon";
import { GoIcon } from "../icons/go-icon";
import { HtmlIcon } from "../icons/html-icon";
import { JsIcon } from "../icons/js-icon";
import { NestIcon } from "../icons/nest-icon";
import { NextIcon } from "../icons/next-icon";
import { PythonIcon } from "../icons/python-icon";
import { ReactIcon } from "../icons/react-icon";
import { TsIcon } from "../icons/ts-icon";

export function CardDisplay() {
  return (
    <div className="grid grid-flow-col w-full p-8">
      <Card
        icons={[<HtmlIcon />, <CssIcon />, <JsIcon />]}
        text="As any web developer I use HTML, CSS and Javascript as backbone to any project."
      />
      <Card
        icons={[<ReactIcon />, <NextIcon />, <TsIcon />]}
        text="For any frontend needs I always opt for trusted and battle tested technologies."
      />
      <Card
        icons={[<NestIcon />, <ExpressIcon />, <FastifyIcon />]}
        text="For any backend needs I love to use Nestjs with both Fastify and Express. "
      />
      <Card
        icons={[<GoIcon />, <PythonIcon />]}
        text="For any more special needs I can write code in python and golang."
      />
    </div>
  );
}
