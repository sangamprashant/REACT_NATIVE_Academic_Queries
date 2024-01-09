import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { Cources, HomeHeader, HomeTitle } from "../../../components";
import { AppContext } from "../../../AppContext/AppContext";

const Home = () => {
  const { courses } = useContext(AppContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111" }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <HomeHeader />
        <HomeTitle />
        {/* <View style={styles.BtnContainer}>
          <TouchableOpacity style={[styles.sendButton, styles.courseButton]}>
            <Text style={styles.sendButtonText}>Course</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.sendButton, styles.courseButton]}>
            <Text style={styles.sendButtonText}>Projects</Text>
          </TouchableOpacity>
        </View> */}
        <Cources courses={courses} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
    marginBottom: 4,
  },
  courseButton: {
    flex: 1,
  },
  sendButton: {
    backgroundColor: "#3d68ff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
