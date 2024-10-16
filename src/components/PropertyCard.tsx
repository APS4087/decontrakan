// src/components/PropertyCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types';

interface PropertyCardProps extends Property {}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, price, description, details, imageUrl }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image
        src={imageUrl || '/default-image.jpg'}
        alt={title}
        width={300}
        height={200}
        className="rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p>{description}</p>
      <p className="text-gray-500">{price}</p>
      <Link href={`/properties/${title.replace(/\s+/g, '-').toLowerCase()}`}>
        View Details
      </Link>
    </div>
  );
};

export default PropertyCard;
