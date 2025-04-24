import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '@/store';
import { useMainNavigation } from '@/hooks';
import { styles } from './styles';
const CUISINE_TYPES = [
  'Italian',
  'Mexican',
  'Japanese',
  'Chinese',
  'Indian',
  'American',
  'Healthy',
  'Fast Food',
];
const PRICE_RANGES = ['$', '$$', '$$$'];
const SORT_OPTIONS = ['Rating high to low', 'Price low to high', 'Price high to low', 'Distance'];

export const FiltersScreen = () => {
  const navigation = useMainNavigation();
  const {
    cuisineType,
    priceRange,
    sortBy,
    setCuisineType,
    setPriceRange,
    setSortBy,
    resetFilters,
  } = useStore();

  const handleApply = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={resetFilters}>
          <Text style={styles.resetButton}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuisine Type</Text>
          <View style={styles.tagsContainer}>
            {CUISINE_TYPES.map(type => (
              <TouchableOpacity
                key={type}
                style={[styles.tag, cuisineType.includes(type) && styles.selectedTag]}
                onPress={() => setCuisineType(type)}
              >
                <Text
                  style={[styles.tagText, cuisineType.includes(type) && styles.selectedTagText]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Range</Text>
          <View style={styles.tagsContainer}>
            {PRICE_RANGES.map(range => (
              <TouchableOpacity
                key={range}
                style={[styles.tag, priceRange.includes(range) && styles.selectedTag]}
                onPress={() => setPriceRange(range)}
              >
                <Text
                  style={[styles.tagText, priceRange.includes(range) && styles.selectedTagText]}
                >
                  {range}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sort By</Text>
          <View style={styles.optionsContainer}>
            {SORT_OPTIONS.map(option => (
              <TouchableOpacity
                key={option}
                style={[styles.option, sortBy === option && styles.selectedOption]}
                onPress={() => setSortBy(option)}
              >
                <Text style={[styles.optionText, sortBy === option && styles.selectedOptionText]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


