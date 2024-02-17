import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./button.module.scss";
import { motion } from "framer-motion";
export default function Button({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={cn(
        "h-[30px] w-[80px] rounded-xl cursor-pointer top-0 right-0 absolute overflow-hidden",
        styles.button
      )}
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          top: isActive ? "-100%" : "0%",
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={cn(
            "w-full h-full bg-[#EBD9C0] text-black/80 uppercase",
            styles.el
          )}
        >
          <PerspectiveText label="menu" />
        </div>
        <div
          className={cn(
            "w-full h-full bg-black text-white top-[100%] absolute uppercase",
            styles.el
          )}
        >
          <PerspectiveText label="close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div
      className={cn(
        styles.perspectiveText,
        "w-full h-full flex flex-col justify-center items-center font-bold"
      )}
    >
      <p>{label}</p>
      <p className="absolute">{label}</p>
    </div>
  );
}
