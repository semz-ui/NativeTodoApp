import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../components/Header";
import { logout, reset } from "../features/auth/authSlice";

export default function Profile({ navigation }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginOut = async () => {
    try {
      dispatch(logout());
      dispatch(reset());
      navigation.replace("Home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      {user ? (
        <View style={styles.con}>
          <Text style={{ fontSize: 40, color: "gray" }}>
            Welcome {user.name}
          </Text>
        </View>
      ) : (
        <></>
      )}
      <TouchableOpacity style={styles.btn} onPress={loginOut}>
        <Text style={{ color: "white" }}>Logout</Text>
        <MaterialCommunityIcons name="logout" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  btn: {
    backgroundColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 30,
  },
  con: {
    marginTop: 90,
    alignItems: "center",
    flex: 1,
  },
});
