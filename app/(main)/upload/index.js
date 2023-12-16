import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { UploadForm } from "../../../components";
import { bgImage } from "../../../Images";

const Upload = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollContainer}
        >
          <UploadForm />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
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

export default Upload;
