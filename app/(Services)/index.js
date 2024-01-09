import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const WhatWeDo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111" }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={styles.sectionTitle}>
          <Text style={styles.subtitleText}>
            "Kindly grant us the opportunity to elucidate our endeavors."
          </Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <FontAwesome name="clock-o" size={24} color="blue" />
            </View>
            <Text style={styles.boxTitle}>
              <Text style={styles.linkText}>24/7 Available</Text>
            </Text>
            <Text style={styles.boxText}>
              Around-the-clock availability for all your needs. With our 24/7
              support, you can count on us day or night, ensuring prompt
              assistance and reliable service at any hour.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <FontAwesome name="file" size={24} color="blue" />
            </View>
            <Text style={styles.boxTitle}>
              <Text style={styles.linkText}>Question Paper</Text>
            </Text>
            <Text style={styles.boxText}>
              Embrace the Questions, Always Open, Always Here for You
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  sectionTitle: {
    marginBottom: 16,
  },
  subtitleText: {
    fontSize: 16,
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  iconBox: {
    width: "100%",
    maxWidth: 400,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "black",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 8,
    fontSize: 24,
    color: "white",
  },
  boxTitle: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "white",
  },
  boxText: {
    fontSize: 16,
    color: "white",
  },
});

export default WhatWeDo;
