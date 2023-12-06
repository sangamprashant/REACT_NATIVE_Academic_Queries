import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CourceCard = ({ course }) => {
  return (
    <TouchableOpacity>
      <View key={course._id} style={styles.card}>
        <Image source={{ uri: course.courseImage }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{course.courseName}</Text>
        {/* <Text style={styles.cardText}>{course.coursePath}</Text> */}
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
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  cardTitle: {
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
