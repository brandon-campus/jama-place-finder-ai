
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlaceGrid from "@/components/PlaceGrid";
import { trendingPlaces, quietPlaces, workPlaces } from "@/data/places";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <main className="flex-1 px-4 py-8 md:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-12">
          <PlaceGrid places={trendingPlaces} title="Lugares Destacados" />
          <PlaceGrid places={quietPlaces} title="Lugares Tranquilos" />
          <PlaceGrid places={workPlaces} title="Perfectos para Trabajar" />
        </div>
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

export default Index;
