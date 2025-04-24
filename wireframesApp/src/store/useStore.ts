import { create } from 'zustand';

interface StoreState {
  cuisineType: string[];
  priceRange: string[];
  sortBy: string;
  setCuisineType: (type: string) => void;
  setPriceRange: (range: string) => void;
  setSortBy: (sort: string) => void;
  resetFilters: () => void;
}

export const useStore = create<StoreState>(set => ({
  cuisineType: [],
  priceRange: [],
  sortBy: 'Rating high to low',

  setCuisineType: type => {
    set(state => {
      const newCuisineType = state.cuisineType.includes(type)
        ? state.cuisineType.filter(t => t !== type)
        : [...state.cuisineType, type];
      return { cuisineType: newCuisineType };
    });
  },

  setPriceRange: range => {
    set(state => {
      const newPriceRange = state.priceRange.includes(range)
        ? state.priceRange.filter(r => r !== range)
        : [...state.priceRange, range];
      return { priceRange: newPriceRange };
    });
  },

  setSortBy: sort => {
    set({ sortBy: sort });
  },

  resetFilters: () => {
    set({
      cuisineType: [],
      priceRange: [],
      sortBy: 'Rating high to low',
    });
  },
}));
