import { Restaurant } from "@/types";

const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'Healthy House',
    rating: 4.5,
    cuisine: ['Healthy', 'Vegetarian'],
    priceRange: '$$',
    location: {
      latitude: -34.6037,
      longitude: -58.3816,
    },
    address: 'Av. Corrientes 1234',
  },
  {
    id: '2',
    name: 'Sushi Master',
    rating: 4.8,
    cuisine: ['Japanese', 'Asian'],
    priceRange: '$$$',
    location: {
      latitude: -34.6057,
      longitude: -58.3836,
    },
    address: 'Av. Santa Fe 2345',
  },
  {
    id: '3',
    name: 'La Pizzería',
    rating: 4.2,
    cuisine: ['Italian', 'Fast Food'],
    priceRange: '$',
    location: {
      latitude: -34.6017,
      longitude: -58.3796,
    },
    address: 'Av. Callao 567',
  },
  {
    id: '4',
    name: 'Taco Loco',
    rating: 4.6,
    cuisine: ['Mexican'],
    priceRange: '$$',
    location: {
      latitude: -34.6077,
      longitude: -58.3856,
    },
    address: 'Av. Córdoba 890',
  },
  {
    id: '5',
    name: 'Dragon Wok',
    rating: 4.3,
    cuisine: ['Chinese', 'Asian'],
    priceRange: '$$',
    location: {
      latitude: -34.5997,
      longitude: -58.3776,
    },
    address: 'Av. Las Heras 123',
  },
  {
    id: '6',
    name: 'Maharaja Palace',
    rating: 4.7,
    cuisine: ['Indian', 'Vegetarian'],
    priceRange: '$$$',
    location: {
      latitude: -34.6097,
      longitude: -58.3876,
    },
    address: 'Av. Libertador 4567',
  },
  {
    id: '7',
    name: 'Green Life',
    rating: 4.4,
    cuisine: ['Vegan', 'Healthy'],
    priceRange: '$$',
    location: {
      latitude: -34.6137,
      longitude: -58.3896,
    },
    address: 'Av. Belgrano 789',
  },
  {
    id: '8',
    name: 'Burger King',
    rating: 4.0,
    cuisine: ['Fast Food', 'American'],
    priceRange: '$',
    location: {
      latitude: -34.5977,
      longitude: -58.3756,
    },
    address: 'Av. 9 de Julio 1234',
  },
];

export { MOCK_RESTAURANTS};