import { TLayout } from "@/types/TLayout";
import React from "react";
import Header from "./Header";

export default function Layout({ children }: TLayout) {
  return (
    <div className="relative flex flex-col flex-grow min-h-screen w-full overflow-hidden text-[#A46141]">
      <div className="absolute top-0 z-[-2] w-full h-full bg-[#F3C5B1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,223,211,1),rgba(255,255,255,0))]"></div>
      <Header />
      <div className="h-full flex flex-col flex-grow">{children}</div>
    </div>
  );
}
