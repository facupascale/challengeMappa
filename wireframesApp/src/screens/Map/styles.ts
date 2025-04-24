import { Colors } from "@/constants";
import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.secondary,
    borderRadius: 8,
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    padding: 10,
    backgroundColor: Colors.background.secondary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  filterIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  cardsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
  },
  cardsScrollContent: {
    paddingHorizontal: 15,
    gap: 15,
  },
  restaurantCard: {
    height: 150,
    width: 280,
    backgroundColor: Colors.background.primary,
    borderRadius: 12,
    padding: 15,
    shadowColor: Colors.shadow.default,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedCard: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  cardContent: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  restaurantDetails: {
    color: Colors.text.secondary,
    marginBottom: 4,
  },
  restaurantAddress: {
    color: Colors.text.tertiary,
    fontSize: 12,
    marginBottom: 8,
  },
  ratingContainer: {
    backgroundColor: Colors.background.secondary,
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  rating: {
    fontWeight: 'bold',
  },
  markerContainer: {
    alignItems: 'center',
  },
  marker: {
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 5,
    borderColor: Colors.white,
    borderWidth: 1,
  },
  markerText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  restaurantPopup: {
    position: 'absolute',
    bottom: 220,
    left: 20,
    right: 20,
    backgroundColor: Colors.background.primary,
    borderRadius: 10,
    padding: 15,
    shadowColor: Colors.shadow.default,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  popupDetails: {
    color: Colors.text.secondary,
    marginBottom: 5,
  },
  popupAddress: {
    color: Colors.text.tertiary,
    fontSize: 12,
    marginBottom: 5,
  },
  popupRating: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  noResultsCard: {
    width: 280,
    backgroundColor: Colors.background.primary,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
});
