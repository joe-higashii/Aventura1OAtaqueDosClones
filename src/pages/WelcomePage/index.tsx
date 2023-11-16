import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeArt from "../../assets/svg/welcome_page_art.svg";
import styles from "./styles";

const WelcomePage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.root}>
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>Bem-vinda(o) ao Whatsapp</Text>
        <WelcomeArt />
        <Text style={styles.descStyle}>
          Leia nossa{" "}
          <Text style={styles.linkStyle} onPress={() => {}}>
            Política de Privacidade.
          </Text>{" "}
          Toque em CONCORDAR E CONTINUAR para aceitar os{" "}
          <Text style={styles.linkStyle} onPress={() => {}}>
            Termos de Serviço.
          </Text>
        </Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("login_page");
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>CONCORDAR E CONTINUAR</Text>
      </Pressable>
    </View>
  );
};

export default WelcomePage;
