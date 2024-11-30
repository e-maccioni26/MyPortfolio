'use client'; 

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Navbar from '../app/components/navbar';
// import { Card } from '../app/components/card';

gsap.registerPlugin(TextPlugin); 

export default function Page() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        text: { value: "Maccioni Elone" },
        duration: 2, 
        ease: "power2.out",
      });
    }

    if (roleRef.current) {
      gsap.to(roleRef.current, {
        text: { value: "Développeur Full Stack" },
        duration: 2, 
        ease: "power2.out",
        delay: 3, 
        repeat: -1, 
        repeatDelay: 1, 
        yoyo: true, 
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="">
        <div className='flex flex-col items-center mt-10'>
          <h1
            ref={nameRef}
            className="text-center text-white font-bold text-6xl mb-4"
          ></h1>
          <h2
            ref={roleRef}
            className="text-center italic text-indigo-600 font-semibold text-3xl"
          ></h2>
        </div>
      </main>
    </>
  );
}
