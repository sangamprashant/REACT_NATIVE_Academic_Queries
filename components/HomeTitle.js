import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeTitle = () => {
  return (
    <View
      style={{
        alignItems: "left",
        marginBottom: 15,
        marginTop: 10,
        backgroundColor: "#c8d4ff",
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderRadius: 15,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>
        Welcome!
      </Text>
      <Text style={{ fontSize: 20, color: "#6f6f6f" }}>
        Your personalized space for exploring past-year surveys, enhancing exam
        preparation, and connecting with an academic community.
      </Text>
    </View>
  );
};

export default HomeTitle;
