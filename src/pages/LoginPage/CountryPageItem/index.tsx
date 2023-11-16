// CountryPageItem.tsx
import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const CountryPageItem = ({
  name,
  flag,
  dial_code,
}: {
  name: string;
  flag: string;
  dial_code: string;
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <View style={styles.midView}>
          <Text>{flag}</Text>
          <Text>{name}</Text>
        </View>
        <Text>{dial_code}</Text>
      </View>
    </View>
  );
};

export default CountryPageItem;
