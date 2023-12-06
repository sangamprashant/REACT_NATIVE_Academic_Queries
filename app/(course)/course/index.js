import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import React, { useContext } from "react";
import { Cources, HomeTitle } from "../../../components";
import { AppContext } from "../../../AppContext/AppContext";

const Course = () => {
  const { courses } = useContext(AppContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111" }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <HomeTitle />
        <Cources courses={courses} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Course;
