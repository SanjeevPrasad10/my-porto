"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Meteors = ({ number = 28, className }) => {
  // Generate stable meteor positions and animation timings centered on the screen
  const meteorStyles = useMemo(() => {
    return Array.from({ length: number }, (_, idx) => {
      // Distribute centered around the main page column
      const leftPercent = Math.floor(Math.random() * 120) - 10; // -10% to 110% across centered box
      const topOffset = Math.floor(Math.random() * 500) - 100;  // Staggered vertical start
      const delay = (Math.random() * 4).toFixed(2);
      const duration = (Math.random() * 2.5 + 2.5).toFixed(2);
      const tailLength = Math.floor(Math.random() * 40 + 45); // 45px to 85px

      return {
        id: idx,
        style: {
          top: `${topOffset}px`,
          left: `${leftPercent}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          width: "2px",
          height: "2px",
          "--tail-width": `${tailLength}px`,
        },
      };
    });
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={cn(
        "fixed inset-0 pointer-events-none overflow-hidden z-0 flex justify-center items-center",
        className
      )}
    >
      {/* Centered Constrained Container aligned with page layout */}
      <div className="relative w-full max-w-3xl h-full mx-auto">
        {meteorStyles.map((item) => (
          <span
            key={"meteor-" + item.id}
            style={item.style}
            className={cn(
              "animate-meteor-effect absolute rounded-full",
              "bg-emerald-400 dark:bg-emerald-300 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[var(--tail-width,55px)] before:-translate-y-1/2",
              "before:bg-gradient-to-r before:from-emerald-400/90 dark:before:from-emerald-300/90 before:via-emerald-500/30 before:to-transparent before:content-['']"
            )}
          />
        ))}
      </div>
    </motion.div>
  );
};