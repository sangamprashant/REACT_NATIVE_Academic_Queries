import axios from "axios";
import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { BaseApi } from "../../../config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!name || !email || !subject || !message) {
      return Alert.alert("Invalid inputs!", "All fields are required.");
    }
    if (!validateEmail(email)) {
      return Alert.alert(
        "Invalid Email",
        "Please enter a valid email address."
      );
    }
    setLoading(true);
    const reqBody = {
      name: name,
      to: email,
      subject: subject,
      input: message,
    };
    try {
      const response = await axios.post(`${BaseApi}/public/sendemail`, reqBody);
      if (response.data.message) {
        setEmail("");
        setMessage("");
        setName("");
        setSubject("");
        Alert.alert("Message Sent", "Thank you for reaching out!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
        {!loading ? (
          <TouchableOpacity
            animation={loading ? "fadeOut" : "fadeIn"}
            duration={500}
            style={[styles.sendButton, loading && styles.hidden]}
            onPress={handleSendMessage}
            disabled={loading}
          >
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            animation={!loading ? "fadeOut" : "fadeIn"}
            duration={500}
            style={[styles.sendButton, loading && styles.hidden]}
            disabled={!loading}
          >
            <Text style={styles.sendButtonText}>Sending Message</Text>
          </TouchableOpacity>
        )}
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
  sendButton: {
    backgroundColor: "#3d68ff",
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

export default Contact;
