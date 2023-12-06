import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from expo

import { AppContext } from "../../../AppContext/AppContext";
import { useNavigation } from "expo-router";

const CourseScreen = () => {
  const route = useRoute();
  const { coursePath, courseName } = route.params;
  const { courses } = useContext(AppContext);
  const navigation = useNavigation();

  const handleCoursePress = (course) => {
    navigation.navigate("courseOpen", {
      coursePath: course.coursePath,
      courseName: course.courseName,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111", padding: 20 }}>
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
              <Text style={{ color: course.courseName === courseName ?  "white":"#3498db" , }}>{course.courseName}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
        
      </View>
    </SafeAreaView>
  );
};

export default CourseScreen;
