import React from "react";
import { Stack, Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AppProvider } from "../../AppContext/AppContext";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <AppProvider>
      <StatusBar style="light" backgroundColor="black" />
      <Tabs>
        <Tabs.Screen
          name="course"
          options={{
            tabBarLabel: "course",
            tabBarStyle: { backgroundColor: "black" },
            tabBarLabelStyle: { color: "white" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="white" />
              ) : (
                <AntDesign name="home" size={24} color="white" />
              ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            tabBarLabel: "contact",
            tabBarStyle: { backgroundColor: "black" },
            tabBarLabelStyle: { color: "white" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="people" size={24} color="white" />
              ) : (
                <Ionicons name="people-circle" size={24} color="white" />
              ),
          }}
        />
        <Tabs.Screen
          name="upload"
          options={{
            tabBarLabel: "Upload",
            tabBarStyle: { backgroundColor: "black" },
            tabBarLabelStyle: { color: "white" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="plussquare" size={24} color="white" />
              ) : (
                <AntDesign name="plussquareo" size={24} color="white" />
              ),
          }}
        />
      </Tabs>
    </AppProvider>
  );
}
