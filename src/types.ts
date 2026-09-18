export interface ApartmentUnit {
  id: string;
  name: string;
  category: 'studio' | '2suites' | '3suites' | 'penthouse';
  area: number; // in m²
  suites: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpots: number;
  startingPrice: number; // in BRL
  monthlyEstimate: number; // in BRL
  tag: string;
  description: string;
  highlights: string[];
  image: string;
  floorPlanImage: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'lazer' | 'tecnologia' | 'bem-estar' | 'seguranca';
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NearbyPoint {
  category: string;
  name: string;
  distance: string;
  timeMinutes: number;
}
