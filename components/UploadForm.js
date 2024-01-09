import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { BaseApi } from "../config";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  // file part start
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileBlob, setFileBlob] = useState(null);
  // file part end
  const [waitting, setWaiting] = useState(false);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      console.log(result);
      if (!result.canceled) {
        const r = await fetch(result.assets[0].uri);
        const b = await r.blob();
        setFileBlob(b);
        setFileName(result.assets[0].name);
        setSelectedFile(result);
      } else {
        console.log("Document picking canceled");
      }
    } catch (err) {
      console.error("Error picking document:", err);
    }
  };

  const handleUpload = async () => {
    if (
      !name ||
      !email ||
      !subject ||
      !year ||
      !college ||
      !course ||
      !selectedFile
    ) {
      Alert.alert("All fields are required", "Please enter all the fields.");
      return;
    }
    setWaiting(true);
    try {
      const fileRef = ref(storage, `Pdf/${Date.now() + fileName}`);
      uploadBytes(fileRef, fileBlob).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // Send the download URL to your server for storage in MongoDB
          saveToDb(url);
          console.log("Download URL:", url);
        });
      });
    } catch (error) {
      console.error("Error uploading document:", error);
      Alert.alert("Error", "Failed to upload document. Please try again.");
      setWaiting(false);
    }
  };

  const saveToDb = async (url) => {
    try {
      const requestBody = {
        path: url,
        type: college,
        subject: subject,
        year: year,
        course: course,
        name: name,
        email: email,
        valid: false,
      };

      const response = await axios.post(`${BaseApi}/upload`, requestBody);
      console.log("Server Response:", response.data);

      if (response.status === 200) {
        console.log("Data saved successfully");
        // Reset the form after successful upload
        setName("");
        setEmail("");
        setSubject("");
        setYear("");
        setCollege("");
        setCourse("");
        setSelectedFile(null);
        Alert.alert(
          "Upload Successful!",
          `Thank you, ${name}! Your question paper has been successfully uploaded. Your contribution to our community is greatly appreciated.`
        );        
      } else {
        console.log("Failed to save data. Status:", response.status);
      }
    } catch (error) {
      console.log("Error saving data:", error);
    } finally {
      setWaiting(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
      <>
        <Text style={styles.heading}>Upload Your Question Paper</Text>
        <Text style={styles.subHeading}>
          Your contribution is valuable to us😄
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Subject name"
          placeholderTextColor="#aaa"
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          placeholderTextColor="#aaa"
          value={year}
          onChangeText={(text) => setYear(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter college/University Name"
          placeholderTextColor="#aaa"
          value={college}
          onChangeText={(text) => setCollege(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Paper Courese"
          placeholderTextColor="#aaa"
          value={course}
          onChangeText={(text) => setCourse(text)}
        />
        <TouchableOpacity
          style={[styles.Button, styles.pdfSelect]}
          onPress={pickDocument}
        >
          <Text style={styles.sendButtonText}>
            {selectedFile ? "File selected" : "Select File"}
          </Text>
        </TouchableOpacity>
        {!waitting ? (
          <TouchableOpacity
            animation={waitting ? "fadeOut" : "fadeIn"}
            duration={500}
            style={[
              styles.Button,
              styles.sendButton,
              waitting && styles.hidden,
            ]}
            onPress={handleUpload}
            disabled={waitting}
          >
            <Text style={styles.sendButtonText}>Upload File</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            animation={!waitting ? "fadeOut" : "fadeIn"}
            duration={500}
            style={[
              styles.Button,
              styles.sendButton,
              waitting && styles.hidden,
            ]}
            disabled={!waitting}
          >
            <Text style={styles.sendButtonText}>Uploading file</Text>
          </TouchableOpacity>
        )}
      </>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "90%",
    backgroundColor: "#e6e6e614",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  heading: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3d68ff",
    textAlign: "center",
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 30,
    textAlign: "center",
    color: "white",
  },
  input: {
    borderColor: "#cecece1c",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "100%",
    fontSize: 16,
    color: "white",
  },
  messageInput: {
    height: 100,
  },
  pdfSelect: { backgroundColor: "#ffffff21" },

  sendButton: {
    backgroundColor: "#3d68ff",
  },
  Button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  touchableButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadForm;
