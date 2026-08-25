"use client";
import React from "react";
import { motion } from "motion/react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 40).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {meteors.map((el, idx) => {
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-5px",
              left: Math.floor(Math.random() * 100) + "%", // Spans 0% to 100% across container
              animationDelay: Math.random() * 2 + "s", 
              animationDuration: Math.floor(Math.random() * (3 - 1) + 1) + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};