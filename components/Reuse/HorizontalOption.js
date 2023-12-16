import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const HorizontalOption = ({ AppOptions, courseName, setSearchYear }) => {
  const handleCoursePress = (course) => {
    setSearchYear(course);
  };
  const handleAllPress = () => {
    handleCoursePress("");
  };
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={{ color: "white" }}>Years</Text>
      </View>
      <View>
        <ScrollView horizontal contentContainerStyle={{ paddingBottom: 5 }}>
          <TouchableOpacity
            onPress={handleAllPress}
            style={{
              marginRight: 10,
              overflow: "hidden",
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: !courseName ? "gray" : "white",
            }}
          >
            <Text
              style={{
                color: !courseName ? "white" : "black",
              }}
            >
              All
            </Text>
          </TouchableOpacity>
          {AppOptions.map((course, index) => (
            <TouchableOpacity
              onPress={() => handleCoursePress(course)}
              key={index}
              style={{
                marginRight: 10,
                overflow: "hidden",
                borderRadius: 10,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: courseName === course ? "gray" : "white",
              }}
            >
              <Text
                style={{
                  color: courseName === course ? "white" : "black",
                }}
              >
                {course}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HorizontalOption;
