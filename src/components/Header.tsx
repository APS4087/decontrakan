// src/components/Header.tsx
"use client";

import { motion } from 'framer-motion';
import ModeToggle from './ModeToggle';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-4 flex items-center justify-between relative'>
      {/* Logo / Title */}
      <aside className='flex items-center gap-2'>
        <span className='text-xl font-bold'>D'econtrakan</span>
      </aside>

      {/* Navigation Menu */}
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          {/* Home link with hover animation */}
          <motion.li whileHover={{ scale: 1.1 }} >
            <Link href="/">Home</Link>
          </motion.li>

          {/* Properties link with hover animation */}
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/properties">Properties</Link>
          </motion.li>

          {/* About Us link with hover animation */}
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/about">About Us</Link>
          </motion.li>
        </ul>
      </nav>

      {/* Dark Mode Toggle */}
      <aside className='flex gap-2 items-center'>
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Header;
