// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./Stack/HomeStack";
import TodoStack from "./Stack/TodoStack";
import ProfileStack from "./Stack/ProfileStack";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeStack") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "TodoStack") {
            iconName = focused ? "pencil" : "pencil-outline";
          } else if (route.name === "ProfileStack") {
            iconName = focused
              ? "account-settings"
              : "account-settings-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          title: "Home",
        }}
      />
      <Tab.Screen
        name="TodoStack"
        component={TodoStack}
        options={{
          tabBarLabel: "Todo",
          title: "Order",
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
