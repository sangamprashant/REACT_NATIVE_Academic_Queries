import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { WebView } from 'react-native-webview';

const PaperTable = ({ coursePath, courseName, loading, papers }) => {
  const router = useRouter();

  const handlePress = (item) => {
    console.log("itemSend", item);
    router.push("(pdf)/pdfFile");
    router.setParams({ params: { item } });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row} onPress={() => handlePress(item)}>
      <Text style={styles.cell}>{item.subject}</Text>
      <Text style={styles.cell}>{item.type}</Text>
      <Text style={styles.cell}>{item.year}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (papers.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>
          No papers available for {courseName}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={papers}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.headerText}>Papers for {courseName}</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  header: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cecece1c",
    paddingVertical: 10,
  },
  cell: {
    padding: 5,
    color: "white",
    fontSize: 16,
    flex: 1,
  },
  noDataText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default PaperTable;
