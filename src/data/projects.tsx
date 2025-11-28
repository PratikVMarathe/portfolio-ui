import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyH4, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaJava, FaCss3  } from "react-icons/fa6";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiHibernate,
  SiMysql,
  SiSpringboot,
  SiApachemaven,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <FaCss3 />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <BiLogoSpringBoot />,
  },
  spring: {
    title: "Spring",
    bg: "black",
    fg: "white",
    icon: <SiSpringboot />,
  },
  hibernate: {
    title: "Hibernate",
    bg: "black",
    fg: "white",
    icon: <SiHibernate />,
  },
  microservices: {
    title: "Microservices",
    bg: "black",
    fg: "white",
    icon: (
      <Image 
        src="/assets/icons/microservices.png"
        alt="Microservices" 
        color="white"
        width={40} 
        height={40} 
        className="w-full h-full object-contain"
      />
    ),
  },
  maven: {
    title: "Apache Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  security: {
    title: "Spring Security",
    bg: "black",
    fg: "white",
    icon: <MdSecurity />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string | any;
};
const projects: Project[] = [
  {
    id: "power-chart",
    category: "Healthcare System",
    title: "Power-Chart Healthcare System",
    src: "/assets/projects-screenshots/power-chart/powerchart.svg",
    screenshots: ["PC-img.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.hibernate,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/PratikVMarathe/Power-Chart",
    github: "https://github.com/PratikVMarathe/Power-Chart",
    get content() {
      return (
        <div className="font-mono text-zinc-400 space-y-6">
          {/* Overview */}
          <div>
            <TypographyP className="leading-relaxed">
              A comprehensive healthcare management tool designed to optimize
              workflows for hospitals, physicians, and nurses. It acts as a
              centralized solution for recording diagnoses, treatments, and
              managing associated financial transactions.
            </TypographyP>
            <ProjectsLinks repo={this.github} />
          </div>

          {/* Features Grid */}
          <div>
            <TypographyH4 className="font-mono text-xl font-bold text-zinc-100 mb-3">
              Key Features
            </TypographyH4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <TypographyH4 className="font-semibold text-blue-400 mb-2">
                  Patient Care
                </TypographyH4>
                <TypographyP className="text-sm">
                  Document clinical conditions, manage inpatients, and maintain
                  detailed clinical history for physicians.
                </TypographyP>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <TypographyH4 className="font-semibold text-green-400 mb-2">
                  Billing & Admin
                </TypographyH4>
                <TypographyP className="text-sm">
                  Generates invoices for encounters, manages hospital branches,
                  and provides financial transaction insights.
                </TypographyP>
              </div>
            </div>
          </div>

          <SlideShow images={[`${BASE_PATH}/power-chart/PC-img.png`]} />

          {/* Responsibilities */}
          <div>
            <TypographyH4 className="font-mono text-xl font-bold text-zinc-100 mb-3">
              My Contributions
            </TypographyH4>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>
                Designed the{" "}
                <strong className="text-zinc-200">Business Logic Layer</strong>{" "}
                and created entities based on ER diagrams.
              </li>
              <li>
                Implemented RESTful web services using{" "}
                <strong className="text-zinc-200">Spring Boot</strong> and
                documented APIs with Swagger.
              </li>
              <li>
                Wrote comprehensive unit tests using{" "}
                <strong className="text-zinc-200">JUnit</strong> to ensure
                system reliability.
              </li>
              <li>
                Optimized database performance using{" "}
                <strong className="text-zinc-200">Hibernate/JPA</strong> and
                complex MySQL queries (Joins, Subqueries).
              </li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: "centralized-logging-api",
    category: "Microservices",
    title: "Centralized Logging System",
    src: "/assets/projects-screenshots/centralized-logging/centralized-logging.svg",
    screenshots: ["centralized-logging-api-diagram.png"],
    live: "https://github.com/PratikVMarathe/centralized-logging-api",
    github: "https://github.com/PratikVMarathe/centralized-logging-api",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.microservices,
      ],
    },
    get content(): JSX.Element {
      return (
        <div className="font-mono text-zinc-400 space-y-6">
        <div>
          <TypographyP className="leading-relaxed">
            A fully reactive, concurrent centralized logging system built with <strong className="text-zinc-200">Java Microservices</strong>. 
            It simulates high-traffic log generation from various OS environments, processes them via a TCP Collector, 
            and stores enriched data in a reactive MongoDB instance.
          </TypographyP>
        </div>

        <ProjectsLinks repo={this.github} />

        <div>
          <TypographyH4 className="font-mono text-xl font-bold text-zinc-100 mb-3">Architecture</TypographyH4>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <strong className="text-blue-400">Client Services:</strong> Microservices that simulate Linux/Windows log streams every 1-2 seconds.
            </li>
            <li>
              <strong className="text-purple-400">Collector Service:</strong> Listens on TCP port 9000, performs blacklist filtering, and forwards clean logs.
            </li>
            <li>
              <strong className="text-green-400">Central Server:</strong> A Spring WebFlux application offering a REST API for ingestion and querying.
            </li>
          </ul>
        </div>

        <SlideShow images={[`${BASE_PATH}/centralized-logging/centralized-logging-api-diagram.png`]} />

        <div>
          <TypographyH4 className="font-mono text-xl font-bold text-zinc-100 mb-3">Key Features</TypographyH4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-800/50 p-3 rounded border border-zinc-700">
              <span className="font-bold text-zinc-200 block mb-1">Reactive Stack</span>
              <span className="text-sm">Built using Project Reactor and Reactive MongoDB for non-blocking I/O.</span>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded border border-zinc-700">
              <span className="font-bold text-zinc-200 block mb-1">Docker Ready</span>
              <span className="text-sm">Full `docker-compose` support to spin up the entire ecosystem in one command.</span>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded border border-zinc-700">
              <span className="font-bold text-zinc-200 block mb-1">TCP & HTTP</span>
              <span className="text-sm">Hybrid communication handling TCP for raw logs and HTTP for API access.</span>
            </div>
          </div>
        </div>
      </div>
      );
    },
  },
  {
    id: "rbac-api-template",
    category: "Security Boilerplate",
    title: "RBAC API Template",
    src: "/assets/projects-screenshots/rbac-api-templete/rbac-templete.svg",
    screenshots: ["rbac-api-template-diagram.png"],
    live: "https://github.com/PratikVMarathe/RBAC-API-Templete",
    github: "https://github.com/PratikVMarathe/RBAC-API-Templete",
    skills: {
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.security,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.maven,
      ],
      frontend: [],
    },
    get content() {
      return (
        <div className="text-zinc-400 space-y-6">
  <div>
    <TypographyP className="font-mono leading-relaxed">
      A production-grade <strong className="text-zinc-200">Role-Based Access Control (RBAC)</strong>
      API template engineered to simplify secure backend development. 
      Built with a clean architecture mindset, this project provides a ready-to-extend 
      foundation for building enterprise-level systems with consistent authorization,
      modular design, and high maintainability.
    </TypographyP>
  </div>

  <ProjectsLinks repo={this.github} />

  <div>
    <TypographyH4 className="font-mono text-xl font-bold text-zinc-100 mb-3">What This Project Solves</TypographyH4>
    <TypographyP className="font-mono leading-relaxed">
      Most teams spend days or weeks setting up authentication, authorization, folder structure,
      and base security rules. This template eliminates that repetitive work by offering:
    </TypographyP>
    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
      <li>
        <strong className="font-mono text-purple-400">Configurable RBAC Engine:</strong> Easily assign roles, map permissions, and secure routes with fine-grained control.
      </li>
      <li>
        <strong className="font-mono text-blue-400">Enterprise Security Setup:</strong> Built with Spring Security 6, supporting JWT/OAuth2 integration out-of-the-box.
      </li>
      <li>
        <strong className="font-mono text-green-400">Clean Modular Architecture:</strong> Well-structured packages for controllers, services, repositories, 
        and configs — making it ideal for scaling production-grade APIs.
      </li>
      <li>
        <strong className="font-mono text-yellow-400">Developer-Friendly Boilerplate:</strong> Reduces setup time, boosts team productivity, and ensures consistent coding standards.
      </li>
    </ul>
  </div>

  <div>
    <TypographyH4 className="font-mono text-xl font-bold text-zinc-100 mb-3">Highlights & Capabilities</TypographyH4>
    <ul className="font-mono list-disc pl-5 space-y-2 text-sm md:text-base">
      <li>Pre-configured security filter chain with customizable authentication logic</li>
      <li>Ready-to-use entities for <em>Users, Roles, and Privileges</em></li>
      <li>Exception handling and API response structure for production usage</li>
      <li>Environment-based configuration (dev/prod) for smooth deployment</li>
      <li>Extendable design ideal for SaaS dashboards, admin panels, or any multi-role system</li>
    </ul>
  </div>

  <div>
    <TypographyH4 className="font-mono text-xl font-bold text-zinc-100 mb-3">Tech Stack</TypographyH4>
    <div className="flex flex-wrap gap-2">
      <span className="font-mono px-3 py-1 bg-zinc-800 rounded-full text-xs border border-zinc-700">Java 17</span>
      <span className="font-mono px-3 py-1 bg-zinc-800 rounded-full text-xs border border-zinc-700">Spring Boot 3.5.6</span>
      <span className="font-mono px-3 py-1 bg-zinc-800 rounded-full text-xs border border-zinc-700">Spring Security</span>
      <span className="font-mono px-3 py-1 bg-zinc-800 rounded-full text-xs border border-zinc-700">Maven</span>
      <span className="font-mono px-3 py-1 bg-zinc-800 rounded-full text-xs border border-zinc-700">REST API</span>
    </div>
  </div>

  <div>
    <TypographyH4 className="font-mono text-xl font-bold text-zinc-100 mb-3">Impact</TypographyH4>
    <TypographyP className="font-mono leading-relaxed">
      This project demonstrates my ability to design secure backend architectures,
      implement real-world authentication flows, and build systems that scale.
      It reflects production-level understanding of Spring Security, modular API development,
      and clean coding practices essential for enterprise engineering roles.
    </TypographyP>
  </div>
</div>

      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "https://github.com/PratikVMarathe/portfolio-ui",
    github: "https://github.com/PratikVMarathe/portfolio-ui",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/navbar.png`,
              `${BASE_PATH}/portfolio/navbar2.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "sportified-sop",
    category: "ERP System",
    title: "Sportified SOP Ecosystem",
    src: "/assets/projects-screenshots/sportified-sop/sportified-sop.png",
    screenshots: ["1.jpeg", "2.jpeg", "3.jpeg"],
    live: "https://github.com/PratikVMarathe/SOP-MANAGEMENT-UI",
    github: "https://github.com/PratikVMarathe/SOP-MANAGEMENT-UI",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        // PROJECT_SKILLS.security,
        PROJECT_SKILLS.mongo,
        // PROJECT_SKILLS.maven,
      ],
    },
    get content() {
      return (
        <div className="font-mono text-zinc-400 space-y-6">
        <div>
          <TypographyP className="leading-relaxed">
            A comprehensive Standard Operating Procedure (SOP) management system designed to standardize quality coaching and operations. 
            It manages the entire lifecycle from <strong className="text-zinc-200">Inquiry to Enrolment</strong> and automates financial tallying between departments.
          </TypographyP>
        </div>

        <ProjectsLinks repo={this.github} />

        <div>
          <TypographyH4 className="text-xl font-bold text-zinc-100 mb-3">Key Modules</TypographyH4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <TypographyH4 className="font-semibold text-blue-400 mb-2">Operations (Ops)</TypographyH4>
              <p className="text-sm">Maintains coach rosters, batch schedules, and student attendance logs.</p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <TypographyH4 className="font-semibold text-green-400 mb-2">Finance & BD</TypographyH4>
              <TypographyP className="text-sm">Tracks pending dues and conducts weekly &ldquo;Saturday Collaboration&rdquo; calls to tally revenue vs. expenses.</TypographyP>
            </div>
          </div>
        </div>

        <SlideShow
            images={[
              `${BASE_PATH}/sportified-sop/sportified-sop.svg`,
            ]}
          />

        <div>
          <TypographyH4 className="text-xl font-bold text-zinc-100 mb-3">Core Workflows</TypographyH4>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <strong className="text-zinc-200">Student Lifecycle:</strong> Inquiry → Trial Session → Enrolment → Batch Allocation.
            </li>
            <li>
              <strong className="text-zinc-200">Coach Performance Rubric:</strong> Monthly scoring (out of 100) based on student feedback, punctuality, and discipline.
            </li>
            <li>
              <strong className="text-zinc-200">Conversion Funnel:</strong> Tracks leads from initial contact to final closure and drop-offs.
            </li>
          </ul>
        </div>

        <SlideShow
            images={[
              `${BASE_PATH}/sportified-sop/1.jpeg`,
              `${BASE_PATH}/sportified-sop/2.jpeg`,
              `${BASE_PATH}/sportified-sop/3.jpeg`,
            ]}
          />
      </div>
      );
    },
  },
  {
    id: "keeper-app",
    category: "Web App",
    title: "Keeper App",
    src: "/assets/projects-screenshots/keeper-app/keeper-app.svg",
    screenshots: ["keeper.png"],
    live: "https://nvv97h.csb.app/",
    github: "https://github.com/PratikVMarathe/keeper-app",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.css],
      backend: [],
    },
    get content() {
      return (
        <div className="font-mono text-zinc-400 space-y-6">
        <div>
          <TypographyP className="leading-relaxed">
            A clean and intuitive note-taking application inspired by <strong className="text-zinc-200">Google Keep</strong>. 
            It allows users to create, delete, and organize notes dynamically, featuring a responsive masonry layout for a seamless user experience.
          </TypographyP>
        </div>

        <ProjectsLinks live={this.live} repo={this.github} />

        <div>
          <TypographyH4 className="text-xl font-bold text-zinc-100 mb-3">Key Features</TypographyH4>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <strong className="text-yellow-400">Dynamic Note Creation:</strong> Instantly add notes with titles and content.
            </li>
            <li>
              <strong className="text-blue-400">React State Management:</strong> Uses hooks (`useState`) to manage the array of notes in real-time.
            </li>
            <li>
              <strong className="text-green-400">Responsive Design:</strong> Clean UI that adapts to different screen sizes.
            </li>
          </ul>
        </div>

        <SlideShow
            images={[
              `${BASE_PATH}/keeper-app/keeper.png`,
            ]}
          />
      </div>
      );
    },
  },
];
export default projects;
