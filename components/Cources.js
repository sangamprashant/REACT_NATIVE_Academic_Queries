import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import CourceCard from "./Reuse/CourceCard";

const Cources = ({ courses }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, color: "#6f6f6f", width: "100%" }}>
        Explore the available courses below.
      </Text>
      {!courses.length > 0 ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: 20 }}
        />
      ) : (
        <View style={styles.container}>
          {courses.map((course, index) => (
            <CourceCard course={course} key={index} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Cources;
