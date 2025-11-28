"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { EXPERIENCES } from "@/data/experience";
import { motion, useScroll, useSpring } from "framer-motion";

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress for the "Draw Line" effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="w-full py-20 relative"> 
      <div className="container mx-auto px-4 md:px-[50px]">
        
        <Link href={"#experience"}>
          <h2
            className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-16",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}
          >
            EXPERIENCE
          </h2>
        </Link>

        {/* Timeline Container */}
        <div 
          ref={containerRef} 
          className="relative max-w-4xl mx-auto"
        >
          {/* Background Gray Line (Static) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

          {/* gray 'Draw' Line (Animated) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-500 -translate-x-1/2"
          />

          {/* Experience Items */}
          <div className="flex flex-col gap-8 md:gap-12 relative">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Date (Desktop) */}
                  <div className="hidden md:block w-1/2 px-8 text-right">
                     <motion.div
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // FIX 2: Set once: false to re-animate on scroll
                        viewport={{ once: false, amount: 0.3 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={cn("text-lg font-semibold text-zinc-500 dark:text-zinc-400", isEven ? "text-left" : "text-right")}
                     >
                      {exp.period}
                     </motion.div>
                  </div>

                  {/* Pulse Glow Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.4 }}
                        className="w-4 h-4 rounded-full bg-gray-500 relative"
                    >
                        {/* Continuous Pulse Effect */}
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full bg-gray-400 blur-sm"
                        />
                    </motion.div>
                  </div>

                  {/* Slide-in Card */}
                  <div className={cn(
                    "w-full md:w-1/2 pl-16 md:pl-0",
                    isEven ? "md:pr-12" : "md:pl-12"
                  )}>
                    <motion.div
                        // Animation Logic:
                        // Even (Index 0) = Left Side (-50 x)
                        // Odd (Index 1) = Right Side (50 x)
                        initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        // FIX 3: Re-trigger animation every time
                        viewport={{ once: false, amount: 0.2 }} 
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-gray-500/30 transition-all duration-300"
                    >
                      {/* Mobile Date */}
                      <span className="md:hidden inline-block mb-2 text-xs font-semibold text-zinc-500">
                          {exp.period}
                      </span>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-400 mb-3">
                        {exp.company}
                      </p>
                      
                      <ul className="list-disc list-outside ml-4 space-y-1 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;