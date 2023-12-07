import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const HomeTitle = () => {
  return (
    <View
      style={{
        alignItems: "left",
        marginBottom: 15,
        marginTop: 20,
        backgroundColor: "#c8d4ff",
        paddingVertical: 50,
        paddingHorizontal: 10,
        borderRadius: 15,
      }}
    >
      <Text style={{ fontSize: 20, color: "#6f6f6f" }}>Hi! Welcome to,</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Academic Queries</Text>
      <Text style={{ fontSize: 20, color: "#6f6f6f" }}>
        Your one-stop platform for free access to past-year surveys, aiding exam
        preparation and fostering a collaborative academic community.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cecece1c",
    paddingVertical: 10,
  },
  cell: {
    color: "white",
    fontSize: 16,
    flex: 1,
  },
});

export default HomeTitle;
