import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { View, Text, StyleSheet } from "react-native";

const CollegeSelect = ({ uniqueTypes, searchType, setSearchType }) => {
  const dropdownData = ["All", ...uniqueTypes];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a College</Text>
      <SelectDropdown
        data={dropdownData}
        onSelect={(selectedItem, index) => {
          setSearchType(selectedItem === "All" ? "" : selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdownButton}
        dropdownStyle={styles.dropdown}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 5,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  dropdownButton: {
    textAlign: "left",
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
  },
  dropdown: {
    borderWidth: 1,
    textAlign: "left",
    borderColor: "white",
    width: "100%",
  },
});

export default CollegeSelect;
