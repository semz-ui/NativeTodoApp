import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import { login, reset } from "../features/auth/authSlice";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  if (user) {
    navigation.replace("BottomTab");
  }

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (isSuccess) {
      console.log("Login Success");
      console.log(user, "user");
      navigation.replace("BottomTab");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const onSubmit = (e) => {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.title}>
        <Text style={{ fontSize: 30 }}>Login</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please enter your email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please enter your Password"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
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
    marginTop: 40,
    fontSize: 60,
    alignItems: "center",
  },
});
