import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { Appbar } from "react-native-paper";
import OTPTextInput from "react-native-otp-textinput";
import styles from "./styles";

const PinPage = ({ navigation }: { navigation: any }) => {
  let otpInput = useRef(null);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(interval);
          // Realiza a navegação após a renderização inicial usando useEffect
          // Certifique-se de ter "navigation" como uma dependência do useEffect
          // para evitar warnings do eslint
          useEffect(() => {
            navigation.navigate("home_page");
          }, [navigation]);
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [navigation]);

  const handleScreenPress = useCallback(() => {
    navigation.navigate("login_page");
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Appbar.Header
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Appbar.BackAction onPress={handleScreenPress} />
        <Appbar.Content title="Verificação em duas etapas" />
      </Appbar.Header>
      <View style={styles.mainStyle}>
        <View style={styles.contentStyle}>
          <Text>Código foi enviado para +5521965671305</Text>
          <OTPTextInput
            ref={(e: any) => (otpInput = e)}
            textInputStyle={styles.textInputStyle}
          />
          <Text>
            Reenviar em
            <Text style={styles.secondTextStyle}> {seconds} </Text>s
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("home_page");
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>Verificar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PinPage;
