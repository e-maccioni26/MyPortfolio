'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Navbar from '../app/components/navbar';
import Card from '../app/components/card';

gsap.registerPlugin(TextPlugin);


export default function Page() {
  const hiThereRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (hiThereRef.current) {
      gsap.to(hiThereRef.current, {
        text: "Hi There 👋",
        duration: 1.5,
        ease: 'power2.out',
      });
    }

    if (nameRef.current) {
      gsap.to(nameRef.current, {
        text: "I'm Elone Maccioni 🚀",
        duration: 2,
        ease: 'power2.out',
        delay: 1.5,
      });
    }
  }, []);


  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-32 text-white flex flex-col items-center justify-center text-center">
        <p
          ref={hiThereRef}
          className="text-4xl font-bold text-indigo-400 mb-4"
        ></p>
        <h1
          ref={nameRef}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-6"
        ></h1>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          I am a Master’s student in Full Stack Development at Efrei Paris and a Digital Project Manager Apprentice at Crédit Agricole d’Ile-de-France. I am passionate about programming and specialize in using modern technologies like React and Next.js to build innovative web solutions.
        </p>

        <section className="py-24 w-full container">
          <div className='text-start'>
            <h2 className="text-3xl text-start font-bold mb-2 text-indigo-400">My last Projects</h2>
            <p>Consultez mes projets les plus récents...</p>
          </div>

          <div>
            <Card
              image="/images/landing-page_1.png"
              title="Next.js"
              description="The React Framework for Production"
              link="https://nextjs.org/"
            />
              
          </div>
        </section>
      </main>
    </>
  );
}