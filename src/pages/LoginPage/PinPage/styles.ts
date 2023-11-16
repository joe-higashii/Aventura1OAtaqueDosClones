import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    height: "93%",
  },
  mainStyle: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  contentStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  secondTextStyle: {
    color: "#00A884",
  },
  buttonStyle: {
    height: 53,
    width: "90%",
    backgroundColor: "#00A884",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
  textInputStyle: {
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default styles;
