
import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSectionProps {
  onFilterChange?: (filters: any) => void;
}

const noiseOptions = [
  { id: "low", label: "Bajo (tranquilo)" },
  { id: "medium", label: "Medio" },
  { id: "high", label: "Alto (animado)" },
];

const moodOptions = [
  { id: "work", label: "Trabajo" },
  { id: "date", label: "Citas" },
  { id: "family", label: "Familia" },
  { id: "solo", label: "Solo" },
];

const foodTypes = [
  { id: "coffee", label: "Café" },
  { id: "restaurant", label: "Restaurante" },
  { id: "bar", label: "Bar" },
  { id: "fastfood", label: "Comida rápida" },
  { id: "dessert", label: "Postres" },
];

const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [distance, setDistance] = useState([5]);
  const [noiseLevel, setNoiseLevel] = useState("");
  const [mood, setMood] = useState<string[]>([]);
  const [food, setFood] = useState<string[]>([]);

  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        searchTerm,
        priceRange,
        distance: distance[0],
        noiseLevel,
        mood,
        food,
      });
    }
  };

  const handleMoodToggle = (value: string) => {
    setMood((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleFoodToggle = (value: string) => {
    setFood((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div className="w-full mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar lugares..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filtros</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
            </SheetHeader>
            
            <div className="py-4 space-y-6">
              {/* Price Range */}
              <div className="space-y-2">
                <Label className="text-base">Rango de Precio</Label>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">$</span>
                  <span className="text-sm text-gray-500">$$$</span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100}
                  step={1}
                  className="my-4"
                />
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Económico</span>
                  <span className="text-xs text-gray-500">Lujoso</span>
                </div>
              </div>
              
              {/* Distance */}
              <div className="space-y-2">
                <Label className="text-base">Distancia máxima</Label>
                <Slider
                  value={distance}
                  onValueChange={setDistance}
                  max={20}
                  step={1}
                  className="my-4"
                />
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Cerca</span>
                  <span className="text-sm">{distance[0]} km</span>
                </div>
              </div>
              
              {/* Noise Level */}
              <div className="space-y-2">
                <Label className="text-base">Nivel de ruido</Label>
                <RadioGroup value={noiseLevel} onValueChange={setNoiseLevel}>
                  {noiseOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={`noise-${option.id}`} />
                      <Label htmlFor={`noise-${option.id}`}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              {/* Mood */}
              <div className="space-y-2">
                <Label className="text-base">Estado de ánimo</Label>
                <div className="grid grid-cols-2 gap-2">
                  {moodOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`mood-${option.id}`} 
                        checked={mood.includes(option.id)}
                        onCheckedChange={() => handleMoodToggle(option.id)}
                      />
                      <Label htmlFor={`mood-${option.id}`}>{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Food Type */}
              <div className="space-y-2">
                <Label className="text-base">Tipo de lugar</Label>
                <div className="grid grid-cols-2 gap-2">
                  {foodTypes.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`food-${option.id}`} 
                        checked={food.includes(option.id)}
                        onCheckedChange={() => handleFoodToggle(option.id)}
                      />
                      <Label htmlFor={`food-${option.id}`}>{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <SheetFooter className="pt-4">
              <SheetClose asChild>
                <Button onClick={handleApplyFilters} className="w-full bg-jama-teal hover:bg-jama-teal/90">Aplicar Filtros</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default FilterSection;
