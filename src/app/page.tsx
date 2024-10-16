'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types';
import Footer from '@/components/Footer';

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
  // Controls the scroll reveal animation
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section>
      {/* Hero Section - Full screen height */}
      <motion.div 
        className="relative h-screen flex justify-center items-center"
        initial={{ opacity: 0, y: 0 }} // Animation starts hidden
        animate={{ opacity: 1, y: 0 }}  // Ends fully visible
        transition={{ duration: 0.8 }}   // Smooth transition
      >
        <div className="relative w-full max-w-7xl rounded-lg overflow-hidden mx-4 sm:mx-10 md:mx-20">
          <Image
            src="/images/bandstand.png"
            alt="Hero"
            width={1200}
            height={600}
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center leading-snug">
              Find a comfort zone to live.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center mt-4 leading-normal sm:leading-relaxed">
              Close to the right environment that can be your number one supporter.
            </p>
            <Link href="/properties" className="btn btn-primary mt-8">
              Browse Properties
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scrollable section - Triggered on scroll */}
      <motion.section 
        ref={ref} // Link the inView trigger here
        className="container mx-auto my-8 px-4"
        initial="hidden"  // Initially hidden
        animate={controls} // Animate when in view
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.8 }}  // Smooth scroll effect
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10">
          {featuredProperties.map((property) => (
            <motion.div 
              key={property.id}
              whileHover={{ scale: 1.05 }} // Small scale animation on hover
              transition={{ duration: 0.3 }}
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Space before the footer */}
      <div className="mb-16"></div> 
      <Footer /> 
    </section>
  );
}
