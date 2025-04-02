
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Place {
  id: number;
  name: string;
  image: string;
  tags: string[];
  priceLevel: 'low' | 'medium' | 'high';
  rating: number;
  location: string;
}

interface PlaceCardProps {
  place: Place;
}

const PriceIndicator = ({ level }: { level: 'low' | 'medium' | 'high' }) => {
  const priceMap = {
    low: { label: "$", className: "price-tag low" },
    medium: { label: "$$", className: "price-tag medium" },
    high: { label: "$$$", className: "price-tag high" }
  };
  
  const { label, className } = priceMap[level];
  
  return <span className={className}>{label}</span>;
};

const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-jama-dark line-clamp-1">{place.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-jama-gold fill-jama-gold mr-1" />
            <span className="text-sm font-medium">{place.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-3 w-3 mr-1" />
          <span className="line-clamp-1">{place.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {place.tags.map((tag, index) => (
            <span key={index} className="place-tag">{tag}</span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <PriceIndicator level={place.priceLevel} />
          <Link to={`/places/${place.id}`}>
            <Button size="sm" variant="outline" className="text-jama-teal border-jama-teal hover:bg-jama-teal hover:text-white">
              Ver más
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
