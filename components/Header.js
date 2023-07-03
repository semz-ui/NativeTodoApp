import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

export default function Header({ navigation }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.con1}>
        <Text style={{ fontSize: 18 }}>GoalSetter</Text>
        {user ? <Text>{user.name}</Text> : <></>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  con1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  btn: {
    backgroundColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    flexDirection: "row-reverse",
  },
});
