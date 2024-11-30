'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture du menu burger

  const toggleMenu = () => setIsOpen(!isOpen); // Fonction pour ouvrir/fermer le menu

  return (
    <div className="bg-slate-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo cliquable avec fond en dégradé */}
        <Link
          href="/"
          className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 text-4xl font-bold"
        >
          Elone.
        </Link>

        {/* Bouton menu burger pour mobile */}
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
          } absolute top-16 left-0 w-full bg-slate-900 md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col items-center md:flex-row md:space-x-8 text-xl font-semibold text-white">
            <li>
              <Link href="/about" className="hover:text-indigo-600">
                About me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-indigo-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bouton Download CV (visible sur desktop, caché sur mobile sauf si ouvert) */}
        <div
          className={`${
            isOpen ? 'block mt-4 text-center' : 'hidden md:block'
          } md:ml-4`}
        >
          <a
            href="/doc/CV_elone_maccioni.pdf" 
            download
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-indigo-700"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}