import { PropsWithChildren } from "react";
import { SideBar } from "../side-bar/side-bar";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-white flex flex-row w-full h-screen">
      <SideBar />
      <main className="flex flex-col overflow-auto w-full h-screen">
        {children}
      </main>
    </div>
  );
}
