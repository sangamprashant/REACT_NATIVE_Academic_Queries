import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { BASE_API  } from "@env";

console.log(BASE_API)

const index = () => {
  return <Redirect href="/(course)/course" />;
};

export default index;
