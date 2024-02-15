import React from "react";
import { Alex_Brush } from "@next/font/google";
import { cn } from "@/lib/utils";

const alex = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
});
type Props = {
  name: string;
  title: string;
  fullDate: {
    day: string;
    date: string;
    year: string;
    month: string;
  };
  locations: {
    place: string;
    time: string;
    lat: string;
    long: string;
    shortLocation: string;
    type: string;
  }[];
};

export default function RightPane({ name, title, fullDate, locations }: Props) {
  const { day, date, year, month } = fullDate;
  return (
    <div className="w-full h-full justify-center items-center flex flex-col">
      <p className={cn("text-xl lg:text-3xl font-bold")}>Join us for the</p>
      <p className={cn(alex.className, "text-6xl lg:text-9xl")}>{title}</p>
      <p className="text-xl lg:text-3xl font-bold">of</p>
      <p className={cn(alex.className, "text-6xl lg:text-9xl")}>{name}</p>
      <div className="grid grid-cols-3 text-center items-center gap-x-5">
        <div className="text-4xl">{month}</div>
        <div className="text-5xl">{date}</div>
        <div className="text-4xl">{year}</div>
        <div className="col-span-3 text-3xl">{day}</div>
        {locations.map((loc, idx) => (
          <div key={idx} className="col-span-3">
            {loc.time} @ {loc.place}
          </div>
        ))}
      </div>
    </div>
  );
}
