export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  cuisine: string[];
  priceRange: string;
  location: {
    latitude: number;
    longitude: number;
  };
  address: string;
}

export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}