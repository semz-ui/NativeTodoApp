import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { reset, createGoal } from "../features/goals/goalSlice";
import Header from "../components/Header";

export default function Home({ navigation }) {
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onSubmit = (e) => {
    dispatch(createGoal({ text }));
    if (inputRef.current) {
      inputRef.current.clear(); // Clear the input value
    }
  };

  if (!user) {
    navigation.replace("Login");
  }
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View style={styles.con1}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "gray",
              marginTop: 20,
            }}
          >
            Set Your goals for today
          </Text>
        </View>
        <View style={styles.inputCon}>
          <Text style={{ marginBottom: 90, fontSize: 20 }}>Goal</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setText(text)}
            ref={inputRef}
          />
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Add Goal
            </Text>
          </TouchableOpacity>
        </View>
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
  input: {
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 20,
    padding: 10,
    width: "100%",
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "black",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 40,
  },
  con1: {
    alignItems: "center",
  },
  inputCon: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80%",
  },
});
