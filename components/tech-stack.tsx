"use client"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiTypescript,
  SiAngular,
} from "react-icons/si"

export default function TechStack() {
  const techStack = [
    {
      icon: <SiReact className="text-[#61DAFB]" />,
      name: "ReactJS",
    },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      name: "NextJS",
    },
    {
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      name: "TailwindCSS",
    },
    {
      icon: <SiPostgresql className="text-[#336791]" />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMysql className="text-[#4479A1]" />,
      name: "MySQL",
    },
    {
      icon: <SiPhp className="text-[#777BB4]" />,
      name: "PHP",
    },
    {
      icon: <SiTypescript className="text-[#3178C6]" />,
      name: "TypeScript",
    },
    {
      icon: <SiAngular className="text-[#DD0031]" />,
      name: "Angular",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Mes compétences techniques</h2>
        <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
      </div>
    </div>
  )
}

