
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-jama-teal mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! No encontramos la página que buscas</p>
        <p className="text-gray-600 mb-8">
          La página que estás buscando podría haber sido eliminada, renombrada o está temporalmente no disponible.
        </p>
        <Link to="/">
          <Button className="bg-jama-teal hover:bg-jama-teal/90">
            <Home className="mr-2 h-4 w-4" />
            Ir al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
