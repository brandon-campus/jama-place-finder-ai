
import PlaceCard, { Place } from "./PlaceCard";

interface PlaceGridProps {
  places: Place[];
  title?: string;
}

const PlaceGrid = ({ places, title }: PlaceGridProps) => {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-jama-dark">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default PlaceGrid;
