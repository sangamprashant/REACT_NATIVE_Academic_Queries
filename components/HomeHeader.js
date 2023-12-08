import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomeHeader = () => {
  const openGlobalLink = () => {
    const globalLink = "https://academicqueries.me";
    Linking.openURL(globalLink).catch((err) =>
      console.error("Error opening global link:", err)
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require("../Images/icon.png")}
          style={styles.iconImage}
        />
      </TouchableOpacity>
      <Text style={{ color: "white", fontSize: 25, fontWeight: "900" }}>
        Academic Queries
      </Text>
      <TouchableOpacity style={styles.earthButton} onPress={openGlobalLink}>
        <FontAwesome name="globe" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  iconButton: {
    borderRadius: 50,
  },
  iconImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    objectFit: "cover",
  },
  earthButton: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});

export default HomeHeader;
