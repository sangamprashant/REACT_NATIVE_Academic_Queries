import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { ContactForm } from "../../../components";
import { bgImage } from "../../../Images";

const Contact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollContainer}
        >
          <ContactForm />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Contact;
