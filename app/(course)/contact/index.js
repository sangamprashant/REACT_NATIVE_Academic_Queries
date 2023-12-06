import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#111111",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.subHeading}>
          We're delighted to hear from you! Thank you for reaching out.
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
          placeholder="Subject"
          placeholderTextColor="#aaa"
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message..."
          placeholderTextColor="#aaa"
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send Message</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3d68ff",
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 30,
    textAlign: "center",
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "#cecece1c",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
    fontSize: 16,
    color: "white",
  },
  messageInput: {
    height: 100,
  },
  sendButton: {
    backgroundColor: "#3d68ff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Contact;
