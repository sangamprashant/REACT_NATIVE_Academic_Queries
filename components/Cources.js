import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { BASE_API } from "@env";
import axios from "axios";
import CourceCard from "./Reuse/CourceCard";

const Cources = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BASE_API}/get/course`);
      if (response) {
        setCourses(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: "#6f6f6f" }}>
        Explore the available courses below.
      </Text>
      {courses.map((course, index) => (
        <CourceCard course={course} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Cources;
