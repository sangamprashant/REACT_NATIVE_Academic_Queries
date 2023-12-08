import React from "react";
import { View, Text } from "react-native";
import { Stack, Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AppProvider } from "../../AppContext/AppContext";
import { StatusBar } from "expo-status-bar";

const getFocusedStyle = (focused) => {
  return {
    color: focused ? "#3d68ff" : "white",
    fontSize:12,
  };
};

export default function Layout() {
  return (
    <AppProvider>
      <StatusBar style="light" backgroundColor="black" />
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[getFocusedStyle(focused)]}>Home</Text>
            ),
            tabBarStyle: { backgroundColor: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#3d68ff" />
              ) : (
                <AntDesign name="home" size={24} color="white" />
              ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[getFocusedStyle(focused)]}>Contact</Text>
            ),
            tabBarStyle: { backgroundColor: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="mail" size={24} color="#3d68ff" />
              ) : (
                <AntDesign name="mail" size={24} color="white" />
              ),
          }}
        />
        <Tabs.Screen
          name="upload"
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[getFocusedStyle(focused)]}>Upload</Text>
            ),
            tabBarStyle: { backgroundColor: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="plussquare" size={24} color="#3d68ff" />
              ) : (
                <AntDesign name="plussquareo" size={24} color="white" />
              ),
          }}
        />
      </Tabs>
    </AppProvider>
  );
}
