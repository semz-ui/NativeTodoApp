import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Router from "./Routes/Router";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Provider } from "react-redux";
import { store } from "./app/store";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ExpoStatusBar backgroundColor="white" barStyle="dark-content" />
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            backgroundColor: "white",
          }}
        >
          <Router />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
