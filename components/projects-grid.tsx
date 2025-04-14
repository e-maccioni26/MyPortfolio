"use client"

import { useState, useEffect } from "react"
import { Project, projects } from "./projects-data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"

export default function ProjectsGrid() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [selectedTech, setSelectedTech] = useState<string>("Tous")
  const [isFiltering, setIsFiltering] = useState(false)

  
  const allProgrammingLanguages = Array.from(
    new Set(
      projects.flatMap((project) => 
        project.technologies.filter(tech => [
          "React", "React Native", "PHP", "JavaScript", "TypeScript", "Python", 
          "HTML", "CSS", "TailwindCss", "Bootstrap", "Wordpress", "Flask", "Express",
          "JSX", "MySQL", "PostgreSQL"
        ].includes(tech))
      )
    )
  ).sort()

 
  const filterOptions = ["Tous", ...allProgrammingLanguages]

 
  useEffect(() => {
    setIsFiltering(true)
    
    let result = [...projects]

    if (selectedTech !== "Tous") {
      result = result.filter((project) => 
        project.technologies.includes(selectedTech)
      )
    }

    
    const timer = setTimeout(() => {
      setFilteredProjects(result)
      setIsFiltering(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedTech])

  return (
    <section className="container mx-auto py-16 px-4">
      <motion.h2 
        className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explorez mes projets
      </motion.h2>
      

      <motion.div 
        className="mb-10 flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-medium mb-4">Filtrer par langage de programmation :</h3>
        <div className="flex flex-wrap gap-3 max-w-3xl">
          {filterOptions.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                selectedTech === tech
                  ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                  : "bg-card hover:bg-muted/80 border-border hover:border-primary/50 dark:hover:border-primary/50"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech === "Tous" ? "Tous les langages" : tech}
            </motion.button>
          ))}
        </div>
      </motion.div>

 
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isFiltering ? 0.5 : 1 }}
        transition={{ duration: 0.3 }}
        className="min-h-[300px]"
      >
        {filteredProjects.length === 0 ? (
          <motion.div 
            className="text-center py-20 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground text-lg">Aucun projet ne correspond à ce langage de programmation.</p>
            <button 
              onClick={() => setSelectedTech("Tous")}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Voir tous les projets
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full overflow-hidden border-border/50 dark:border-border/30 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 bg-card/80 backdrop-blur-sm">
                  <div className="relative h-48 w-full overflow-hidden group">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium truncate">{project.description}</p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-muted-foreground">
                      {project.longDescription?.substring(0, 100)}...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className={cn(
                            "px-2 py-1 text-xs rounded-full border border-border/50",
                            selectedTech === tech ? "bg-primary/10 border-primary/50 text-primary-foreground text-black dark:text-white" : "bg-muted/50"
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted/50 text-xs rounded-full border border-border/50">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      href={project.link} 
                      className="w-full px-4 py-2 bg-primary/90 text-primary-foreground rounded-md text-center hover:bg-primary transition-colors"
                    >
                      Voir le projet
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}