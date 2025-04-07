import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Portfolio
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Développeur passionné, créant des expériences numériques qui inspirent et engagent.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@exemple.com"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Accueil", href: "/" },
                { name: "À propos", href: "/a-propos" },
                { name: "Projets", href: "/projets" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Développement Web",
                "UI/UX Design",
                "Applications Mobiles",
                "Optimisation & Performance",
                "CMS & E-commerce",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-600 dark:text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 text-indigo-500 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">Paris, France</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="flex-shrink-0 text-indigo-500 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">+33 6 12 34 56 78</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="flex-shrink-0 text-indigo-500 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">contact@exemple.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Portfolio. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-xs text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-xs text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

