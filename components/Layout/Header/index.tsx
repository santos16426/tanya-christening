"use client";
import { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import { boxMenuVariant } from "@/framer/variants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="fixed z-10 w-full h-24 flex flex-row justify-between px-2 lg:px-8 py-4 items-center ">
      <div className="fixed top-[25px] right-[25px]">
        <motion.div
          variants={boxMenuVariant}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          className="w-[430px] h-[650px] bg-[#EBD9C0]/80 relative rounded-xl"
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
}
