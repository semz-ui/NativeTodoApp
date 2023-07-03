import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../../pages/Home";
import Header from "../../components/Header";
import Login from "../../pages/Login";

export default function HomeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
