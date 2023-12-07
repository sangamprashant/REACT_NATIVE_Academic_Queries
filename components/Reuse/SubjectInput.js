import { View, StyleSheet, TextInput, Text } from "react-native";
import React from "react";

const SubjectInput = ({ searchInput, setSearchInput }) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={{ color: "white" }}>Search</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Subject"
        placeholderTextColor="#aaa"
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "#cecece1c",
    borderWidth: 1,
    padding: 6,
    color: "white",
  },
});

export default SubjectInput;
