import { useState } from "react";
import Navbar from "@/components/Navbar";
import FilterSection from "@/components/FilterSection";
import PlaceGrid from "@/components/PlaceGrid";
import { placesData } from "@/data/places";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExplorePage = () => {
  const [filteredPlaces, setFilteredPlaces] = useState(placesData);

  const handleFilterChange = (filters: any) => {
    // In a real app, this would actually filter based on the criteria
    // For this demo, we'll just keep the original data
    console.log("Applied filters:", filters);
    setFilteredPlaces(placesData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-4 py-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="flex items-center mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Volver</span>
            </Button>
          </Link>
          
          <h1 className="text-2xl font-bold text-jama-dark">Explorar Lugares</h1>
        </div>
        
        <FilterSection onFilterChange={handleFilterChange} />
        
        <PlaceGrid places={filteredPlaces} />
      </main>
      
      <footer className="bg-gray-50 border-t py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Jama - Encuentra el lugar perfecto para cada momento
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ExplorePage;
