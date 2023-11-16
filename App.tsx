import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingPage from "./src/pages/LoadingPage";
import WelcomePage from "./src/pages/WelcomePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import CountryPage from "./src/pages/LoginPage/CountryPage";
import OtpPage from "./src/pages/LoginPage/PinPage";
import HomePage from "./src/pages/HomePage/HomePage";
import Example from "./src/pages/HomePage/Example";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loading_page">
        <Stack.Screen
          name="loading_page"
          component={LoadingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcome_page"
          component={WelcomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login_page"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="country_page"
          component={CountryPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="pin_page"
          component={OtpPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home_page"
          component={Example}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}