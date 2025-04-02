
import { Place } from "@/components/PlaceCard";

export const placesData: Place[] = [
  {
    id: 1,
    name: "Café Artesanal La Esquina",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1470&auto=format&fit=crop",
    tags: ["tranquilo", "wifi", "café especial"],
    priceLevel: "medium",
    rating: 4.7,
    location: "Calle Principal 123, Centro"
  },
  {
    id: 2,
    name: "Restaurante El Jardín",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop",
    tags: ["romántico", "terraza", "vegetariano"],
    priceLevel: "high",
    rating: 4.9,
    location: "Avenida del Parque 45, La Floresta"
  },
  {
    id: 3,
    name: "Coworking Norte",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop",
    tags: ["trabajo", "wifi rápido", "silencioso"],
    priceLevel: "medium",
    rating: 4.5,
    location: "Calle Norte 78, Empresarial"
  },
  {
    id: 4,
    name: "Bar La Noche",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1374&auto=format&fit=crop",
    tags: ["animado", "cócteles", "música en vivo"],
    priceLevel: "high",
    rating: 4.3,
    location: "Avenida Central 90, Zona Rosa"
  },
  {
    id: 5,
    name: "Biblioteca Central",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=1374&auto=format&fit=crop",
    tags: ["silencioso", "estudio", "gratuito"],
    priceLevel: "low",
    rating: 4.6,
    location: "Plaza Mayor 1, Cultural"
  },
  {
    id: 6,
    name: "Panadería Dulce Hogar",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1470&auto=format&fit=crop",
    tags: ["desayuno", "acogedor", "wifi"],
    priceLevel: "low",
    rating: 4.8,
    location: "Calle Residencial 56, El Barrio"
  }
];

export const trendingPlaces = placesData.slice(0, 3);
export const quietPlaces = placesData.filter(place => place.tags.includes("tranquilo") || place.tags.includes("silencioso"));
export const workPlaces = placesData.filter(place => place.tags.includes("trabajo") || place.tags.includes("estudio") || place.tags.includes("wifi rápido"));

export const getPlaceById = (id: number): Place | undefined => {
  return placesData.find(place => place.id === id);
};
