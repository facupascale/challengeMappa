import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Region, Restaurant } from '@/types';
import { useStore } from '@/store';
import { MOCK_RESTAURANTS } from '@/mock';
import { Colors, MAIN_STACK_SCREEN_NAMES } from '@/constants';
import { styles } from './styles';
import { useMainNavigation } from '@/hooks';
const INITIAL_REGION: Region = {
  latitude: -34.6037,
  longitude: -58.3816,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  if (!isFinite(lat1) || !isFinite(lon1) || !isFinite(lat2) || !isFinite(lon2)) {
    return 0;
  }
  const R = 6371; // Radio de la tierra en km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const CustomMarker = React.memo(
  ({ restaurant, onPress }: { restaurant: (typeof MOCK_RESTAURANTS)[0]; onPress: () => void }) => (
    <Marker
      coordinate={restaurant.location}
      title={restaurant.name}
      description={`${restaurant.cuisine.join(', ')} • ${restaurant.priceRange}`}
      tracksViewChanges={false}
      onPress={onPress}
    >
      <View style={styles.markerContainer}>
        <View style={styles.marker}>
          <Text style={styles.markerText}>{restaurant.priceRange}</Text>
        </View>
      </View>
    </Marker>
  )
);

export const MapScreen = () => {
  const navigation = useMainNavigation();
  const [region, setRegion] = useState<Region>(INITIAL_REGION);
  const [searchQuery, setSearchQuery] = useState('');
  const { cuisineType, priceRange, sortBy } = useStore();
  const [isMapReady, setIsMapReady] = useState(false);
  const [visibleMarkers, setVisibleMarkers] = useState<typeof MOCK_RESTAURANTS>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const hasActiveFilters =
    cuisineType.length > 0 || priceRange.length > 0 || sortBy !== 'Rating high to low';

  const handleRegionChange = (newRegion: Region) => {
    if (
      isFinite(newRegion.latitude) &&
      isFinite(newRegion.longitude) &&
      isFinite(newRegion.latitudeDelta) &&
      isFinite(newRegion.longitudeDelta)
    ) {
      setRegion(newRegion);
    }
  };

  const filteredAndSortedRestaurants = useMemo(() => {
    let filtered = [...MOCK_RESTAURANTS];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        restaurant =>
          restaurant.name.toLowerCase().includes(query) ||
          restaurant.cuisine.some(c => c.toLowerCase().includes(query))
      );
    }

    if (cuisineType.length > 0) {
      filtered = filtered.filter(restaurant =>
        restaurant.cuisine.some(c => cuisineType.includes(c))
      );
    }

    if (priceRange.length > 0) {
      filtered = filtered.filter(restaurant => priceRange.includes(restaurant.priceRange));
    }

    switch (sortBy) {
      case 'Rating high to low':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'Price low to high':
        filtered.sort((a, b) => a.priceRange.length - b.priceRange.length);
        break;
      case 'Price high to low':
        filtered.sort((a, b) => b.priceRange.length - a.priceRange.length);
        break;
      case 'Distance':
        filtered.sort((a, b) => {
          const distA = calculateDistance(
            region.latitude,
            region.longitude,
            a.location.latitude,
            a.location.longitude
          );
          const distB = calculateDistance(
            region.latitude,
            region.longitude,
            b.location.latitude,
            b.location.longitude
          );
          return distA - distB;
        });
        break;
    }

    return filtered;
  }, [MOCK_RESTAURANTS, searchQuery, cuisineType, priceRange, sortBy, region]);

  useEffect(() => {
    if (isMapReady) {
      setVisibleMarkers(filteredAndSortedRestaurants);
    }
  }, [isMapReady, filteredAndSortedRestaurants]);

  const handleMapReady = useCallback(() => {
    setIsMapReady(true);
  }, []);

  const handleSearchBlur = () => {
    Keyboard.dismiss();
  };

  const handleRestaurantPress = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setRegion({
      ...region,
      latitude: restaurant.location.latitude,
      longitude: restaurant.location.longitude,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={Colors.text.secondary} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search restaurants..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
            clearButtonMode="while-editing"
            onBlur={handleSearchBlur}
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate(MAIN_STACK_SCREEN_NAMES.FILTERS)}
        >
          <Ionicons name="filter" size={24} color={hasActiveFilters ? Colors.primary : Colors.text.secondary} />
          {hasActiveFilters && <View style={styles.filterIndicator} />}
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={handleRegionChange}
          showsUserLocation
          showsMyLocationButton
          showsCompass
          loadingEnabled
          maxZoomLevel={16}
          minZoomLevel={10}
          onMapReady={handleMapReady}
        >
          {isMapReady &&
            visibleMarkers.map(restaurant => (
              <CustomMarker
                key={restaurant.id}
                restaurant={restaurant}
                onPress={() => handleRestaurantPress(restaurant)}
              />
            ))}
        </MapView>
      </View>

      <View style={styles.cardsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsScrollContent}
        >
          {filteredAndSortedRestaurants.length === 0 ? (
            <View style={styles.noResultsCard}>
              <Text style={styles.noResultsText}>No restaurants found</Text>
            </View>
          ) : (
            filteredAndSortedRestaurants.map(restaurant => (
              <TouchableOpacity
                key={restaurant.id}
                style={[
                  styles.restaurantCard,
                  selectedRestaurant?.id === restaurant.id && styles.selectedCard,
                ]}
                activeOpacity={0.7}
                onPress={() => handleRestaurantPress(restaurant)}
              >
                <View style={styles.cardContent}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <Text style={styles.restaurantDetails}>
                    {restaurant.cuisine.join(', ')} • {restaurant.priceRange}
                  </Text>
                  <Text style={styles.restaurantAddress}>{restaurant.address}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{restaurant.rating.toFixed(1)}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>

      {selectedRestaurant && (
        <View style={styles.restaurantPopup}>
          <Text style={styles.popupTitle}>{selectedRestaurant.name}</Text>
          <Text style={styles.popupDetails}>
            {selectedRestaurant.cuisine.join(', ')} • {selectedRestaurant.priceRange}
          </Text>
          <Text style={styles.popupAddress}>{selectedRestaurant.address}</Text>
          <Text style={styles.popupRating}>Rating: {selectedRestaurant.rating.toFixed(1)}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedRestaurant(null)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

