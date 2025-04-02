
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-jama-dark mb-4">
          Descubre lugares perfectos para cada momento
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Jama te ayuda a encontrar el lugar ideal según tus necesidades, estado de ánimo y preferencias.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/chat">
            <Button size="lg" className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white">
              <MessageSquare className="mr-2 h-5 w-5" />
              Hablar con Jamito
            </Button>
          </Link>
          
          <Link to="/explore">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-green-500 text-green-600 hover:bg-green-500/10">
              <MapPin className="mr-2 h-5 w-5" />
              Explorar lugares
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
