// src/data/experience.ts
export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "SDE – I",
    company: "Nativebyte Softwares LLP",
    period: "Oct 2024 – Present",
    description: [
      "Designed and developed high-performance, responsive web applications using React.js and Next.js.",
      "Enhanced front-end usability by developing modular UI components using React-Bootstrap and Tailwind CSS.",
      "Implemented secure authentication using JWT and optimized API performance with Redis caching.",
      "Collaborated in Agile sprints to deliver new features efficiently."
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Quantafile",
    period: "Sept 2023 – Oct 2024",
    description: [
      "Developed enterprise-level applications using React.js and Java Spring Boot APIs.",
      "Implemented server-side pagination, caching, and REST API endpoints for handling large datasets.",
      "Designed reusable components and optimized build pipelines using Webpack.",
      "Ensured UI/UX alignment with design mock-ups using Figma."
    ],
  },
];