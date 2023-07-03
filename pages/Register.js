import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.title}>
        <Text style={{ fontSize: 30 }}>Register</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please enter your fullname"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please enter your email"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please enter your Password"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please confirm Password"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BottomTab")}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 20,
    padding: 10,
    width: "100%",
    marginBottom: 10,
    borderRadius: 10,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 40,
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "black",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    marginBottom: 40,
    fontSize: 60,
    alignItems: "center",
    marginTop: 20,
  },
});
