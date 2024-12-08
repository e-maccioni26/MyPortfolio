'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CiLinkedin } from "react-icons/ci"; 
import { VscGithub } from "react-icons/vsc"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen); 

  return (
    <div className="bg-black shadow-md fixed top-0 left-0 w-full z-50 border-b border-b-blue-500">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 text-4xl font-bold"
        >
          Elone.
        </Link>

        <button
          onClick={toggleMenu}
          className="text-white text-3xl md:hidden focus:outline-none absolute right-6 top-4"
          aria-label="Toggle menu"
        >
          {isOpen ? '✖' : '☰'}
        </button>

        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <nav
            className={`absolute top-16 pt-4 pb-4 left-0 w-full bg-[#ededed] md:static md:w-auto md:bg-transparent`}
          >
            <ul className="flex flex-col items-center md:flex-row md:space-x-8 text-xl font-semibold text-black md:text-white space-y-4 md:space-y-0">
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

              <li className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/elone-maccioni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 md:text-white text-3xl hover:text-indigo-800 md:hover:text-gray-300"
                >
                  <CiLinkedin />
                </Link>
                <Link
                  href="https://github.com/e-maccioni26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 md:text-white text-3xl hover:text-indigo-800 md:hover:text-gray-300"
                >
                  <VscGithub />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}