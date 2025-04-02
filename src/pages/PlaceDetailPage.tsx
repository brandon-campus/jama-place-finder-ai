
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPlaceById } from "@/data/places";
import Navbar from "@/components/Navbar";
import { ArrowLeft, MapPin, Star, Clock, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlaceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [place, setPlace] = useState(id ? getPlaceById(Number(id)) : undefined);

  useEffect(() => {
    if (id) {
      setPlace(getPlaceById(Number(id)));
    }
  }, [id]);

  if (!place) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Lugar no encontrado</h1>
        <Link to="/explore">
          <Button>Volver a Explorar</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="relative h-64 md:h-80 lg:h-96 bg-gray-200">
          <img 
            src={place.image} 
            alt={place.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 p-4">
            <Link to="/explore">
              <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Volver</span>
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 py-6 -mt-12 relative">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-jama-dark mb-2">{place.name}</h1>
                <div className="flex items-center gap-3 text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{place.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-jama-gold fill-jama-gold mr-1" />
                    <span className="text-sm font-medium">{place.rating}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {place.tags.map((tag, index) => (
                    <span key={index} className="place-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <Button className="mt-4 md:mt-0 bg-jama-teal hover:bg-jama-teal/90">
                Reservar
              </Button>
            </div>
            
            <Tabs defaultValue="info">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="info">Información</TabsTrigger>
                <TabsTrigger value="reviews">Opiniones</TabsTrigger>
                <TabsTrigger value="location">Ubicación</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="space-y-6">
                <p className="text-gray-700">
                  {place.name} es un lugar perfecto para quienes buscan {place.tags.join(", ")}. 
                  Ubicado en {place.location}, ofrece una experiencia única en la ciudad.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Detalles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-jama-teal mr-3" />
                      <div>
                        <p className="font-medium">Horario</p>
                        <p className="text-sm text-gray-600">Lun-Vie: 8:00 - 22:00</p>
                        <p className="text-sm text-gray-600">Sáb-Dom: 9:00 - 23:00</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-jama-teal mr-3" />
                      <div>
                        <p className="font-medium">Contacto</p>
                        <p className="text-sm text-gray-600">+123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-jama-teal mr-3" />
                      <div>
                        <p className="font-medium">Sitio web</p>
                        <a href="#" className="text-sm text-jama-teal underline">www.{place.name.toLowerCase().replace(/\s+/g, '')}.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 pb-6 border-b">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                      <span>MR</span>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <p className="font-medium mr-2">María Rodríguez</p>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= 5 ? 'text-jama-gold fill-jama-gold' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">Visitado: Hace 2 días</p>
                      <p className="text-gray-700">
                        Me encantó este lugar. El ambiente es justo lo que buscaba y el servicio fue excelente.
                        Definitivamente volveré pronto.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                      <span>JL</span>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <p className="font-medium mr-2">Juan López</p>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= 4 ? 'text-jama-gold fill-jama-gold' : 'text-gray-300'}`} 
                            />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">Visitado: Hace 1 semana</p>
                      <p className="text-gray-700">
                        Buen lugar para trabajar, aunque a veces puede ponerse un poco ruidoso por las tardes.
                        El wifi es muy bueno y el café delicioso.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="location">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Mapa no disponible en esta versión</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Dirección</h3>
                  <p className="text-gray-700">{place.location}</p>
                  <p className="text-gray-700">Ciudad Ejemplo, CP 12345</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Jama - Encuentra el lugar perfecto para cada momento
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlaceDetailPage;
