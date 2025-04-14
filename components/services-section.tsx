"use client"
import { motion, AnimatePresence } from "motion/react"
import { Code, Smartphone, Palette, Gauge, ShoppingCart } from "lucide-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"

const IconArrowLeft = ArrowLeft
const IconArrowRight = ArrowRight

export default function ServicesSection() {
  
  const serviceIcons = [
    {
      icon: <Code size={80} className="text-purple-500" />,
      bg: "bg-purple-50 dark:bg-purple-900",
      name: "web-dev",
    },
    {
      icon: <Palette size={80} className="text-blue-500" />,
      bg: "bg-blue-50 dark:bg-blue-900",
      name: "ui-design",
    },
    {
      icon: <Smartphone size={80} className="text-green-500" />,
      bg: "bg-green-50 dark:bg-green-900",
      name: "mobile-dev",
    },
    {
      icon: <Gauge size={80} className="text-orange-500" />,
      bg: "bg-orange-50 dark:bg-orange-900",
      name: "performance",
    },
    {
      icon: <ShoppingCart size={80} className="text-pink-500" />,
      bg: "bg-pink-50 dark:bg-pink-900",
      name: "cms",
    },
  ]

  const services = [
    {
      quote:
        "Création de sites web modernes, responsives et optimisés pour les moteurs de recherche. Développement sur mesure adapté à vos besoins spécifiques.",
      name: "Développement Web",
      designation: "Sites vitrines, e-commerce, applications web",
      src: `/placeholder.svg?height=500&width=500&text=${encodeURIComponent(serviceIcons[0].name)}`,
      icon: serviceIcons[0],
    },
    {
      quote:
        "Conception d'interfaces utilisateur intuitives et esthétiques. Focus sur l'expérience utilisateur pour maximiser l'engagement et la conversion.",
      name: "UI/UX Design",
      designation: "Wireframes, prototypes, design systems",
      src: `/placeholder.svg?height=500&width=500&text=${encodeURIComponent(serviceIcons[1].name)}`,
      icon: serviceIcons[1],
    },
    {
      quote:
        "Développement d'applications mobiles natives et cross-platform pour iOS et Android. Solutions performantes et adaptées à tous les appareils.",
      name: "Applications Mobiles",
      designation: "iOS, Android, React Native",
      src: `/placeholder.svg?height=500&width=500&text=${encodeURIComponent(serviceIcons[2].name)}`,
      icon: serviceIcons[2],
    },
    {
      quote:
        "Optimisation des performances de vos applications existantes. Amélioration de la vitesse, de la sécurité et de l'expérience utilisateur.",
      name: "Optimisation & Performance",
      designation: "Audit, refactoring, optimisation",
      src: `/placeholder.svg?height=500&width=500&text=${encodeURIComponent(serviceIcons[3].name)}`,
      icon: serviceIcons[3],
    },
    {
      quote:
        "Intégration de systèmes de gestion de contenu personnalisés. Solutions flexibles pour gérer facilement votre contenu digital.",
      name: "CMS & E-commerce",
      designation: "WordPress, Shopify, solutions sur mesure",
      src: `/placeholder.svg?height=500&width=500&text=${encodeURIComponent(serviceIcons[4].name)}`,
      icon: serviceIcons[4],
    },
  ]

  const CustomAnimatedTestimonials = () => {
    const [active, setActive] = useState(0)

    const handleNext = () => {
      setActive((prev) => (prev + 1) % services.length)
    }

    const handlePrev = () => {
      setActive((prev) => (prev - 1 + services.length) % services.length)
    }

    const isActive = (index: number) => {
      return index === active
    }

    useEffect(() => {
      const interval = setInterval(handleNext, 7000)
      return () => clearInterval(interval)
    }, [])

    const randomRotateY = () => {
      return Math.floor(Math.random() * 21) - 10
    }

    return (
      <div className="mx-auto max-w-sm px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index) ? 40 : services.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 origin-bottom flex items-center justify-center rounded-3xl ${service.icon.bg} dark:bg-opacity-100 dark:backdrop-blur-none`}
                  >
                    <div className="flex flex-col items-center justify-center">{service.icon.icon}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white">{services[active].name}</h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">{services[active].designation}</p>
              <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                {services[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-black relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Mes Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Des solutions sur mesure pour répondre à vos besoins digitaux
          </motion.p>
        </div>

        <CustomAnimatedTestimonials />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <GradientBorderButton href="/contact">Parlez-moi de votre projet</GradientBorderButton>
        </motion.div>
      </div>
    </section>
  )
}

