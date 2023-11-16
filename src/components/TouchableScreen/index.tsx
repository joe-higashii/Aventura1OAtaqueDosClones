import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import styles from "./styles";

const TouchableScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({});

  const handleScreenPress = useCallback(() => {
    if (fontsLoaded) {
      navigation.navigate("welcome_page");
    }
  }, [fontsLoaded, navigation]);

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.titleStyle}>Whatsapp</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TouchableScreen;