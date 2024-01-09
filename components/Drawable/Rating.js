import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppContext } from "../../AppContext/AppContext";

const Rating = ({ setModalVisible }) => {
  const { ratings } = useContext(AppContext);
  // console.log(ratings);
  const router = useRouter();
  const totalStars = 5;
  const starsData = Array.from({ length: totalStars }, (_, index) => ({
    star: index + 1,
    percentage: 0,
  }));
  ratings?.starsPercentage.forEach((item) => {
    const index = item.star - 1;
    if (index >= 0 && index < totalStars) {
      starsData[index].percentage = item.percentage;
    }
  });
  const reversedStarsData = starsData.reverse();
  // console.log(reversedStarsData);
  return (
    <View style={styles.mainContainer}>
      {ratings && (
        <View style={styles.ratingContainer}>
          <Text style={styles.Heading}>Ratings</Text>
          <View style={styles.container}>
            <View style={{ width: "30%" }}>
              <View style={styles.averageRow}>
                <Text style={styles.averageRating}>
                  {ratings.averageStars.toFixed(1)}
                </Text>
              </View>
            </View>
            <View style={{ width: "70%" }}>
              {reversedStarsData.map((rating, index) => (
                <View key={index} style={styles.ratingRow}>
                  <View
                    style={[
                      styles.progressBarContainer,
                      styles.ratingProgressBarContainer,
                    ]}
                  >
                    <View
                      style={[
                        styles.progressBar,
                        { width: `${rating.percentage}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.ratingLabel}>{` ${rating.star}`}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(false), router.push("(AboutUs)");
          }}
        >
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(false), router.push("(Reviews)");
          }}
        >
          <Text style={styles.buttonText}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(false), router.push("(Services)");
          }}
        >
          <Text style={styles.buttonText}>Services</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "95%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  ratingContainer: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "black",
  },
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  progressBarContainer: {
    height: 10,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 5,
    overflow: "hidden",
  },
  ratingProgressBarContainer: {
    backgroundColor: "gray",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
  },
  averageRow: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
  },
  averageRating: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },
  ratingLabel: {
    color: "white",
  },
  starsRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  starContainer: {
    backgroundColor: "transparent",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Rating;
