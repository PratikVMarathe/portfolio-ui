"use client";
import React, { useEffect, useState } from "react"

import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
  FaJava,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";
import { SiMysql } from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { SKILLS } from "@/data/constants"; //
import Link from "next/link";
import { cn } from "@/lib/utils";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "pratikmarathe2108@gmail.com",
    href: "mailto:pratikmarathe2108@gmail.com",
    icon: <FaEnvelope size={24} />,
  },
  {
    name: "Phone",
    content: "9307946271",
    href: "tel:9307946271",
    icon: <FaPhone size={24} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pratik-marathe-104b13226/",
    content: "/pratik-marathe",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/PratikVMarathe",
    content: "/pratik-marathe",
    icon: <FaGithub size={24} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Nodejs",
    content: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: `"use using" 
using use = useUsing("use")`,
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Docker",
    content: "The best containerization! 🐳🔥",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "NginX",
    content: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Vue.js",
    content: "the chill pill for your frontend, it hits different! 🟢😌",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Express.js",
    content: "middlewares go dummy hard, no cap! 🚂💨",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "MySQL",
    content: "SQL but make it fashion, purr 💅🐘",
    icon: <SiMysql  size={"50px"} color="#007acc" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Next.js is a React framework for production",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "Next.js is a React framework for production",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Next.js is a React framework for production",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Next.js is a React framework for production",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Next.js is a React framework for production",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "VIM",
    content: "Next.js is a React framework for production",
    icon: <DiVim size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Prettier",
    content: "Next.js is a React framework for production",
    icon: <SiPrettier size={"50px"} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "Next.js is a React framework for production",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Yarn",
    content: "Next.js is a React framework for production",
    icon: <FaYarn size={"50px"} color="#2C8EBB" />,
    color: "#2C8EBB",
  },
  {
    name: "Vercel",
    content: "Next.js is a React framework for production",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Java",
    content: "Java: because your app deserves a JVM-sized ego 😎🔥",
    icon: <FaJava  size={"50px"} color="#CB3837" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Next.js is a React framework for production",
    icon: <FaAws size={"50px"} color="#3f51b5" />,
    color: "#000000",
  },
];

const AboutSection = () => {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  
  // Convert the SKILLS object into an array we can map over
  const skillsArray = Object.values(SKILLS);

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <section id="about" className="container mx-auto px-4 md:px-[50px] xl:pr-[400px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[450px] aspect-square bg-zinc-800 object-cover"
                  alt="me"
                  src="/assets/profile.png"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Pratik Marathe</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Full Stack Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md transition-colors"
                      href={link.href}
                      target={link.name !== "Phone" && link.name !== "Email" ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      <div className="w-8 flex items-center justify-center">{link.icon}</div>
                      <div className="flex flex-col overflow-hidden">
                        <div className="text-sm font-semibold">{link.name}</div>
                        <div className="text-xs text-zinc-500 truncate">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-full">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600 h-full"
            style={{ backdropFilter: "blur(20px)" }}
          >
            
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl py-4 mb-10",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          About Me
        </h2>
      
            <p className="mb-6 text-roboto text-lg leading-relaxed text-zinc-400">
              Hey there! I&apos;m Pratik, a Fullstack developer passionate about
              creating meaningful digital experiences. With expertise in Web
              development, I thrive on turning ideas into reality through coding
              and design. My journey began with a fascination for technology and
              a drive to make a positive impact.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-zinc-400">
              When I&apos;m not coding, you can find me exploring new technologies, 
              or sipping coffee while brainstorming my next project.
            </p>
            
            <h2 className="text-2xl mb-8 font-bold">Stuff I use</h2>
            <div className="mb-5">
              {!toolsLoaded ? (
                <div className="h-[80px] w-full bg-zinc-800/50 animate-pulse rounded-md"></div>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                    gap: '1rem',
                    breakpoints: {
                      640: { perPage: 3 },
                      768: { perPage: 4 },
                      1024: { perPage: 5 },
                    }
                  }}
                  aria-label="My Tech Stack"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AboutSection;