import { ScrollView } from "react-native";
import React from "react";
import { Cources, HomeTitle } from "../../components";

const Course = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <HomeTitle />
      <Cources />
    </ScrollView>
  );
};

export default Course;
