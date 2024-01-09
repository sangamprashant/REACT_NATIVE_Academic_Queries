import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AppContext } from "../../AppContext/AppContext";
import { FontAwesome } from "@expo/vector-icons";

import zero from "./images/1.jpg";
import one from "./images/2.jpg";
import two from "./images/3.jpg";
import three from "./images/4.png";
import four from "./images/5.png";
import five from "./images/6.png";
import six from "./images/7.png";
import seven from "./images/8.png";

const Images = {
  0: zero,
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
  7: seven,
};

const renderStars = (numStars) => {
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    starIcons.push(
      <FontAwesome
        key={i}
        name={i < numStars ? "star" : "star-o"}
        size={16}
        color="yellow"
      />
    );
  }
  return starIcons;
};

const Index = () => {
  const { reviews } = useContext(AppContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111" }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {reviews.length === 0 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="large"
              color="yellow"
              style={{ marginTop: 20 }}
            />
          </View>
        ) : (
          reviews.map((review) => (
            <View key={review._id} style={styles.card}>
              <View style={styles.cardBody}>
                <View style={styles.cardTitleContainer}>
                  <View style={styles.avatarContainer}>
                    <Image
                      source={Images[review.image]}
                      style={styles.avatar}
                    />
                    <View style={styles.textContainer}>
                      <Text style={styles.name}>{review.name}</Text>
                      <Text style={styles.email}>{review.email}</Text>
                    </View>
                  </View>

                  <View style={styles.starsContainer}>
                    {renderStars(review.stars)}
                  </View>
                </View>
                <Text style={styles.feedback}>{review.feedback}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
    borderRadius: 8,
    marginBottom: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  email: {
    fontSize: 12,
    color: "#777777",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  stars: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  feedback: {
    color: "white",
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
