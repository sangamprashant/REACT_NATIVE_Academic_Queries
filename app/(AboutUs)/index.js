import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import BigImage from "../../Images/big.png";

const AboutUs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111" }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={BigImage} resizeMode="cover" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Academic Queries is a platform that provides free surveys from the
            past year to support the academic efforts of students and faculty.
            The surveys are available for a variety of courses and academic
            levels.
            {"\n\n"}
            Operating our platform is easy and user-friendly. You can browse
            different courses and select the specific survey you need. Once
            selected, the document will be available for download in PDF format
            for easy access on a variety of devices. We take the quality and
            accuracy of our surveys very seriously and we guarantee that the
            surveys are from trusted and reputable educational institutions. We
            continually update our collection to provide you with the most
            up-to-date surveys and ensure you have access to the most relevant
            and up-to-date materials.
            {"\n\n"}
            Join us on our educational journey and take advantage of previous
            year's surveys. Improve your exam preparation, boost your confidence
            and improve your academic performance with our comprehensive
            collection of surveys. Be part of the community by providing surveys
            about your course.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 400,
    marginBottom: 16,
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 8,
    objectFit: "contain",
  },
  textContainer: {
    marginBottom: 24,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "white",
  },
});

export default AboutUs;
