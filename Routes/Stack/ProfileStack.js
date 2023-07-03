import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Profile from "../../pages/Profile";
import Login from "../../pages/Login";

export default function ProfileStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
