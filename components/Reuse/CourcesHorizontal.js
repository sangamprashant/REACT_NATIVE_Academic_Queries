import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const CourcesHorizontal = ({ courses, courseName }) => {
  const navigation = useNavigation();
  const handleCoursePress = (course) => {
    navigation.navigate("courseOpen", {
      coursePath: course.coursePath,
      courseName: course.courseName,
    });
  };
  return (
    <>
      <View>
        <Text style={{ color: "white" }}>All Cources</Text>
      </View>
      <View>
        <ScrollView horizontal contentContainerStyle={{ paddingVertical: 10 }}>
          {courses.map((course, index) => (
            <TouchableOpacity
              onPress={() => handleCoursePress(course)}
              key={index}
              style={{
                marginRight: 10,
                overflow: "hidden",
                borderRadius: 10,
                padding: 10,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  course.courseName === courseName ? "#3498db" : "white",
              }}
            >
              <Text
                style={{
                  color: course.courseName === courseName ? "white" : "#3498db",
                }}
              >
                {course.courseName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default CourcesHorizontal;
