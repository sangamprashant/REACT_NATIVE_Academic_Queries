import React from "react";
import { Redirect } from "expo-router";
import { AppProvider } from "../AppContext/AppContext";

const Index = () => {
  return (
    <AppProvider>
      <Redirect href="/(main)/home" />
    </AppProvider>
  );
};

export default Index;
