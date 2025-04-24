import { StyleSheet } from "react-native";
import { Colors } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resetButton: {
    color: Colors.primary,
    fontSize: 16,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    backgroundColor: Colors.background.secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  selectedTag: {
    backgroundColor: Colors.primary,
  },
  tagText: {
    color: Colors.text.secondary,
    fontSize: 14,
  },
  selectedTagText: {
    color: Colors.white,
  },
  optionsContainer: {
    gap: 10,
  },
  option: {
    backgroundColor: Colors.background.secondary,
    padding: 12,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: Colors.primary,
  },
  optionText: {
    color: Colors.text.secondary,
    fontSize: 16,
  },
  selectedOptionText: {
    color: Colors.white,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border.light,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
});