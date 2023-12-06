import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Redirect } from "expo-router";
import { AppProvider } from "../AppContext/AppContext";

const Index = () => {
  const [redirectToCourse, setRedirectToCourse] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirectToCourse(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!redirectToCourse) {
    return (
      <AppProvider>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading...</Text>
        </View>
      </AppProvider>
    );
  }

  return <Redirect href="/(course)/course" />;
};

export default Index;
