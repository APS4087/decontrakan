// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-yellow-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">D'econtrakan</h1>
        <nav className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/about">About Us</Link>
        </nav>
      </div>
    </header>
  );
}
