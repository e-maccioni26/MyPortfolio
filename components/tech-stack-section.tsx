"use client"
import { motion } from "framer-motion"
import type React from "react"

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiDocker,
  SiGithub
} from "react-icons/si"
import { DiGoogleAnalytics } from "react-icons/di"
import { VscCode } from "react-icons/vsc"

interface TechItemProps {
  icon: React.ReactNode
  name: string
  delay?: number
}

const TechItem = ({ icon, name, delay = 0 }: TechItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="flex items-center gap-3 bg-[#F7F8FA] dark:bg-neutral-800/50 backdrop-blur-sm rounded-lg p-3 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors"
    >
      <div className="text-3xl">{icon}</div>
      <span className="text-black dark:text-white text-lg">{name}</span>
    </motion.div>
  )
}

interface TechCategoryProps {
  title: string
  children: React.ReactNode
  delay?: number
}

const TechCategory = ({ title, children, delay = 0 }: TechCategoryProps) => {
  return (
    <div className="mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="text-6xl font-bold text-neutral-700 dark:text-neutral-300 mb-8"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
    </div>
  )
}

export default function TechStackSection() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          MA STACK
        </motion.h2>

        <TechCategory title="FRONTEND" delay={0.1}>
          <TechItem icon={<SiJavascript className="text-[#F7DF1E]" />} name="Javascript" delay={0.2} />
          <TechItem icon={<SiTypescript className="text-[#3178C6]" />} name="Typescript" delay={0.3} />
          <TechItem icon={<SiReact className="text-[#61DAFB]" />} name="React" delay={0.4} />
          <TechItem icon={<SiNextdotjs className="text-black dark:text-white" />} name="Next.JS" delay={0.5} />
          <TechItem icon={<SiRedux className="text-[#764ABC]" />} name="Redux" delay={0.6} />
          <TechItem icon={<SiTailwindcss className="text-[#06B6D4]" />} name="Tailwind CSS" delay={0.7} />
          <TechItem icon={<DiGoogleAnalytics className="text-[#88CE02]" />} name="GSAP" delay={0.8} />
          <TechItem icon={<SiFramer className="text-[#0055FF]" />} name="Framer Motion" delay={0.9} />
          <TechItem icon={<SiSass className="text-[#CC6699]" />} name="SASS" delay={1.0} />
          <TechItem icon={<SiBootstrap className="text-[#7952B3]" />} name="Bootstrap" delay={1.1} />
        </TechCategory>

        <TechCategory title="BACKEND" delay={1.2}>
          <TechItem icon={<SiNodedotjs className="text-[#339933]" />} name="Node.JS" delay={1.3} />
          <TechItem icon={<SiNestjs className="text-[#E0234E]" />} name="Nest.JS" delay={1.4} />
          <TechItem icon={<SiExpress className="text-black dark:text-white" />} name="Express.JS" delay={1.5} />
        </TechCategory>

        <TechCategory title="DATABASE" delay={1.6}>
          <TechItem icon={<SiMysql className="text-[#4479A1]" />} name="MySQL" delay={1.7} />
          <TechItem icon={<SiPostgresql className="text-[#4169E1]" />} name="PostgreSQL" delay={1.8} />
          <TechItem icon={<SiMongodb className="text-[#47A248]" />} name="MongoDB" delay={1.9} />
          <TechItem icon={<SiPrisma className="text-black dark:text-white" />} name="Prisma" delay={2.0} />
        </TechCategory>

        <TechCategory title="TOOLS" delay={2.1}>
          <TechItem icon={<SiGit className="text-[#F05032]" />} name="Git" delay={2.2} />
          <TechItem icon={<SiGithub className="text-black dark:text-white" />} name="GitHub" delay={2.3} />
          <TechItem icon={<SiDocker className="text-[#2496ED]" />} name="Docker" delay={2.4} />
          <TechItem icon={<VscCode className="text-[#007ACC]" />} name="VS Code" delay={2.5} />
        </TechCategory>
      </div>
    </section>
  )
}

