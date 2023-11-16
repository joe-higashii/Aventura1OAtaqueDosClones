import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff5ee"
  },
  bgStyleView: {
    width: "100%",
    position: "absolute",
  },
  contentViewStyle: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
  },
  touchableScreenContainer: {
    position: "absolute",
    top: "70%",
  },
});

export default styles;
