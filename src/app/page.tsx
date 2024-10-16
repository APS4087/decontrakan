// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types';

const featuredProperties: Property[] = [
  { 
    id: 1, 
    title: "Cityscape Retreat", 
    price: "$1500/month", 
    description: "Cozy Bedroom with City View", 
    details: "Full property details here...",
    imageUrl: "/images/bandstand.png" 
  },
  { 
    id: 2, 
    title: "Modern Chic Apartment", 
    price: "$1800/month", 
    description: "Stylish Living Room", 
    details: "Full property details here...",
    imageUrl: "/images/bandstand.png" 
  },
  { 
    id: 3, 
    title: "Luxury Villa", 
    price: "$2500/month", 
    description: "Spacious Kitchen", 
    details: "Full property details here...",
    imageUrl: "/images/bandstand.png" 
  },
];

export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative">
        <Image src="/images/bandstand.png" alt="Hero" width={1200} height={600} />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Find a comfort zone to live.</h1>
          <p>Close to the right environment that can be your number one supporter.</p>
          <Link href="/properties" className="btn btn-primary mt-4">
            Browse Properties
          </Link>
        </div>
      </div>

      {/* Property Highlights */}
      <section className="my-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </section>
    </section>
  );
}
