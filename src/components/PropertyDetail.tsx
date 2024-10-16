// src/components/PropertyDetail.tsx
import { Property } from "@/types";

const PropertyDetail: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{property.title}</h1>
      <p className="mt-4">{property.details}</p>
      <p className="mt-2 text-xl">{property.price}</p>
    </div>
  );
};

export default PropertyDetail;
