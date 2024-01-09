import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Text,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Rating from "./Drawable/Rating";

const HomeHeader = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openGlobalLink = () => {
    const globalLink = "https://academicqueries.me";
    Linking.openURL(globalLink).catch((err) =>
      console.error("Error opening global link:", err)
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require("../Images/icon.png")}
          style={styles.iconImage}
        />
      </TouchableOpacity>
      <Text style={{ color: "white", fontSize: 25, fontWeight: "900" }}>
        Academic Queries
      </Text>
      <TouchableOpacity style={styles.earthButton} onPress={openGlobalLink}>
        <FontAwesome name="globe" size={50} color="black" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.closeBtn}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <FontAwesome name="times" size={30} color="white" />
                </TouchableOpacity>
              </View>
              <Rating setModalVisible={setModalVisible}/>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  iconButton: {
    borderRadius: 50,
  },
  iconImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    objectFit: "cover",
  },
  earthButton: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#272727",
    padding: 20,
    width: "90%",
    height: "100%",
    borderRadius: 10,
  },
  closeBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

export default HomeHeader;
