import { ReactNode } from "react";
import { Typography } from "../typograhpy/typography";

export interface CardProps {
  icons: ReactNode[];
  text: string;
}

export function Card({ icons, text }: CardProps) {
  return (
    <div className="flex flex-col max-w-3xs justify-center gap-5 items-center py-3 text-dark-bg">
      <div className="flex flex-row w-full gap-3">{icons.map((el) => el)}</div>
      <div className="flex-1 w-full">
        <Typography className="text-lg font-extrabold text-dark-bg">
          {text}
        </Typography>
      </div>
    </div>
  );
}
