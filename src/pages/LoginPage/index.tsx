import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import React from "react";
import DropDown from "../../assets/svg/dropdown_icon.svg";
import styles from "./styles";

const LoginPage = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>Insira seu número de telefone</Text>
        <Text style={styles.descStyle}>
          O Whatsapp precisa confirmar seu número de telefone.
          <Text style={styles.linkStyle} onPress={() => {}}>
            Qual é o meu número?
          </Text>{" "}
        </Text>
        <Pressable
          style={styles.countryButtonView}
          onPress={() => {
            navigation.navigate("country_page");
          }}
        >
          <Text style={styles.countryTextStyle}>Brasil</Text>
          <DropDown />
        </Pressable>
        <View style={styles.inputViewStyle}>
          <View style={styles.countryButtonView}>
            <Text style={styles.countryTextStyle}>+55</Text>
          </View>
          <TextInput style={styles.textInputStyle} />
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("pin_page");
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>Avançar</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginPage;