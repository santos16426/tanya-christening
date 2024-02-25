import React from "react";
import { Alex_Brush } from "@next/font/google";
import { cn } from "@/lib/utils";
import { template } from "@/constants/template";
import Link from "next/link";
import {
  ChurchIcon,
  LocateFixed,
  LocateFixedIcon,
  MapPinned,
  Navigation,
  PiIcon,
  PinIcon,
  Utensils,
} from "lucide-react";

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
  const generateMapLink = (loc: { lat: string; long: string }) => {
    const baseGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.long}`;
    const baseWaze = `https://waze.com/ul?ll=${loc.lat},${loc.long}&navigate=yes`;

    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent;
      if (/Android/.test(userAgent) || /iPhone|iPad|iPod/.test(userAgent)) {
        return baseWaze;
      }
    }
    return baseGoogleMaps;
  };

  return (
    <div className="w-full h-full justify-center items-center flex flex-col text-center py-10 b">
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
          <div key={idx} className="col-span-3 hover:underline">
            <Link href={generateMapLink(loc)} target="_blank">
              <p className="flex gap-2 items-center justify-center">
                {loc.time} @ {loc.place}
                <span>
                  <MapPinned size="18px" />
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-2 mt-2">
        <button className="border-2 px-4 py-1 border-[#A46141] text-[#A46141]">
          <Link href="https://forms.gle/bWS65uZxxxCiKqhb6" target="_blank">
            RSVP
          </Link>
        </button>
        <button className="border-2 px-4 py-1 border-[#A46141] text-[#A46141]">
          <Link
            href="https://www.myregistry.com/wishlist/ralph-santos-and-bernadette-santos-san-pedro-laguna/4168136/giftlist"
            target="_blank"
          >
            Gift Registry
          </Link>
        </button>
      </div>
    </div>
  );
}
