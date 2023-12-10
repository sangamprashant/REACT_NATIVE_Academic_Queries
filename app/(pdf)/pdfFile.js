import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const PDFFile = () => {
  const route = useRoute();
  const { item } = route?.params;

  console.log(item?.pdfPath);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111", padding: 10 }}>
      {item && (
        <>
          <Text style={{ color: "white" }}>Subject: {item.subject}</Text>
          <Text style={{ color: "white" }}>College: {item.type}</Text>
          <Text style={{ color: "white" }}>PDF Link : {item.pdfPath}</Text>
        </>
      )}
    </SafeAreaView>
  );
};

export default PDFFile;
