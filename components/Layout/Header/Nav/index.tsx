import Link from "next/link";
import { featureNav } from "@/constants/template";
import { motion } from "framer-motion";
import { perspectiveVariant } from "@/framer/variants";
export default function index() {
  return (
    <div className="h-full pt-[100px] px-[40px] pb-[50px] box-border">
      <div className="flex flex-col gap-5">
        {featureNav.map((link, i) => {
          return (
            <motion.div
              key={link.label}
              custom={i}
              variants={perspectiveVariant}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <Link
                href={link.href}
                target={link?.target}
                className="text-black/90 text-5xl"
              >
                {link.label}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
