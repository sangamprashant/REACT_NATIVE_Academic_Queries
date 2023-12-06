import React, { useState } from "react";
import {
  View,
  Text,
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
    <ScrollView contentContainerStyle={styles.container}>
      <View behavior="padding" style={styles.formContainer}>
        <Text style={styles.headding}>Contact</Text>
        <Text style={styles.sub_headding}>
          We're Happy to Hear from You! Thank you for reaching out.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Subject"
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message.."
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  headding: {
    fontSize: 30,
  },
  sub_headding: {
    fontSize: 15,
    marginBottom:30,
  },
  input: {
    height: 40,
    borderColor: "#dfdfdf",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  messageInput: {
    height: 100,
  },
  sendButton: {
    backgroundColor: "#564f91",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Contact;
