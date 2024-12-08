import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  style?: string;
}

export default function Button({ text, href, onClick, style }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={`px-6 py-3 rounded-full text-lg font-bold transition ${style}`}>
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-lg font-bold transition ${style}`}
    >
      {text}
    </button>
  );
}