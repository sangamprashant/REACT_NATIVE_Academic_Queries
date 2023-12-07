import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const CourceCard = ({ course }) => {
  const navigation = useNavigation();

  const handleCoursePress = () => {
    navigation.navigate("courseOpen", {
      coursePath: course.coursePath,
      courseName: course.courseName,
    });
  };
  return (
    <TouchableOpacity onPress={handleCoursePress}>
      <View key={course._id} style={styles.card}>
        <Image source={{ uri: course.courseImage }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{course.courseName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    width: (width - 30) / 2,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#cecece1c",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e6e6e614",
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
  },
  cardText: {
    fontSize: 14,
    margin: 8,
  },
});

export default CourceCard;
