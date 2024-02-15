"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./gallery.module.scss";
import { useTransform, useScroll, MotionValue, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "../../hooks/useDimension";
import { cn } from "../../lib/utils";
const Column = ({
  images,
  y,
}: {
  images: string[];
  y?: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ y }}
      className={cn(
        styles.column,
        "relative w-1/4 h-full flex flex-col gap-[10px] min-w-[250px]"
      )}
    >
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image
            className="w-full h-full relative object-cover"
            src={`${src}`}
            fill
            alt="image"
          />
        </div>
      ))}
    </motion.div>
  );
};
type GalleryProps = {
  images: string[];
};
export default function Gallery({ images }: GalleryProps) {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 6.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 5.3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-gray-700 flex flex-col gap-2">
      <div
        ref={container}
        className="h-[360vh] bg-white/80 flex flex-row gap-[10px] p-[10px] box-border overflow-hidden"
      >
        <Column
          images={[images[0], images[1], images[2], images[3], images[4]]}
          y={y1}
        />
        <Column
          images={[images[5], images[6], images[7], images[8], images[9]]}
          y={y2}
        />
        <Column
          images={[images[10], images[11], images[12], images[13], images[14]]}
          y={y1}
        />
        <Column
          images={[images[18], images[19], images[15], images[16], images[17]]}
          y={y2}
        />
      </div>
    </div>
  );
}
