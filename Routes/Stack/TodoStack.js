import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Todo from "../../pages/Todo";

export default function TodoStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Todo" component={Todo} />
    </Stack.Navigator>
  );
}
