'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen); 

  return (
    <div className="shadow-md mb-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo cliquable */}
        <Link href="/" className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ... text-4xl font-bold">
          Elone.
        </Link>

        {/* Bouton du menu burger */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Menu (visible sur desktop, caché sur mobile sauf si ouvert) */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col items-center md:flex-row md:space-x-8 text-xl font-semibold text-white">
            <li className="py-2 md:py-0">
              <Link
                href="/about"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)} // Fermer le menu après clic
              >
                About me
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="/projects"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="/contact"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
