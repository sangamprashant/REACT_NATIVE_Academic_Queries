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
          <Text style={{color:"white"}}>Subject: {item.subject}</Text>
          <Text style={{color:"white"}}>Type: {item.type}</Text>
          {/* pdf path is from firebase neede to show user the pdf :) */}
          <Text style={{color:"white"}}>pdfPath: {item.pdfPath}</Text>
          
        </>
      )}
    </SafeAreaView>
  );
};

export default PDFFile;
