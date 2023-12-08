import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import React, { useContext } from "react";
import { Cources, HomeHeader, HomeTitle } from "../../../components";
import { AppContext } from "../../../AppContext/AppContext";

const home = () => {
  const { courses } = useContext(AppContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111" }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <HomeHeader />
        <HomeTitle />
        <Cources courses={courses} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
