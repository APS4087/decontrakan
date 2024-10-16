
"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Importing Image from Next.js for optimized image loading
import data from '@/utils/data';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures the theme is loaded on the client-side before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid SSR issues

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex items-center px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
    >
      <Image
        src={theme === 'light' ? data.nightModeIcon : data.lightModeIcon}
        alt={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
        width={20}
        height={20}
      />
    </button>
  );
};

export default ModeToggle;
