import React from 'react';
import Image from 'next/image';

interface CardProps {
    image: string;
    title: string;
    description: string;
    link: string;
  }
  
  export default function Card({ image, title, description, link }: CardProps) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <Image
          className="object-cover"
          width={400}
          height={400}
          src={image}
          alt={title}
        />

        <div className="px-6 py-4">
          <h2 className="font-bold text-blue-cool text-xl mb-2">{title}</h2> 
          <p className="text-gray-700 text-base">{description}</p>
        </div>
  
        <div className="px-6 pt-4 pb-6">
          <a
            href={link} 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
    );
  }