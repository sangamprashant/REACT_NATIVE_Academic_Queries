import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";

const PDFFile = () => {
  const route = useRoute();
  const { item } = route?.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111", padding: 10 }}>
      {item && (
        <>
          <Text>Subject: {item.subject}</Text>
          <Text>Type: {item.type}</Text>
          <Text>pdfPath: {item.pdfPath}</Text>
          
        </>
      )}
    </SafeAreaView>
  );
};

export default PDFFile;
