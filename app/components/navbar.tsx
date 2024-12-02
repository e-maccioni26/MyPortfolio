'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen); 

  return (
    <div className="bg-slate-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 text-4xl font-bold"
        >
          Elone.
        </Link>

        <button
          onClick={toggleMenu}
          className="text-white text-3xl md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? '✖' : '☰'}
        </button>

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
            <li>
              <a
                href="/doc/CV_elone_maccioni.pdf"
                download
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-indigo-700"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}