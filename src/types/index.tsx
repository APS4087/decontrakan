// src/types/index.ts

// Define the type for a property listing
export interface Property {
    id: number;
    title: string;
    price: string;
    details: string;  //  additional details about the property
    description: string;
    location?: string;  //  location info
    bedrooms?: number;  // number of bedrooms
    bathrooms?: number;  // number of bathrooms
    area?: number;       //  size in square feet/meters
    imageUrl?: string;   //  main image for the property
    images?: Image[];    //  list of property images
  }
  
  // Define the type for property images
  export interface Image {
    id: number;
    src: string;
    alt: string;
  }

  // Define the type for page metadata (for SEO purposes)
  export interface PageMetaData {
    title: string;
    description: string;
    keywords?: string[];  // meta keywords for SEO
    author?: string;      // author of the page
  }
  