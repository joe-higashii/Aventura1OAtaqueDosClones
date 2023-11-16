import { View } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import BackgroundImg from "../../assets/svg/loading_background.svg";
import LOGO from "../../assets/svg/logo_whatsapp.svg";
import TouchableScreen from "../../components/TouchableScreen";

import styles from "./styles";

const LoadingPage = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../../assets/fonts/Robot/Roboto-Black.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Robot/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Robot/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Robot/Roboto-Medium.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Robot/Roboto-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(() => {
        navigation.navigate("welcome_page");
      }, 2000);
    }
  }, [fontsLoaded, navigation]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>
      <View style={styles.bgStyleView}>
        <BackgroundImg />
      </View>
      <View style={styles.contentViewStyle}></View>
      <LOGO width="70" height="70" />
      <View style={styles.touchableScreenContainer}>
        <TouchableScreen navigation={navigation} />
      </View>
    </View>
  );
};

export default LoadingPage;
