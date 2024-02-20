"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export default function LayoutGrid({ cards }: { cards: Card[] }) {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative">
      <div className="w-full min-h-screen lg:px-40 px-2 lg:py-12 py-2 grid grid-cols-1 lg:grid-cols-3  mx-auto gap-4 ">
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className)}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative overflow-hidden col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
                selected?.id === card.id
                  ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                  : lastSelected?.id === card.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
              )}
              layout
            >
              {selected?.id === card.id && <SelectedCard />}
              <BlurImage card={card} />
            </motion.div>
          </div>
        ))}
        <motion.div
          onClick={handleOutsideClick}
          className={cn(
            "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
            selected?.id ? "pointer-events-auto" : "pointer-events-none"
          )}
          animate={{ opacity: selected?.id ? 0.3 : 0 }}
        />
      </div>
    </div>
  );
}

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      quality={100}
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = () => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full  z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      ></motion.div>
    </div>
  );
};
