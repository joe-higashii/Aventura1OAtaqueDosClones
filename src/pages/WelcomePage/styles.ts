import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: "20%",
    paddingBottom: 100,
  },
  contentStyle: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: 38,
    paddingHorizontal: 50,
  },
  titleStyle: {
    color: "#000",
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    letterSpacing: 0.3,
  },
  descStyle: {
    color: "#000",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
  },
  linkStyle: {
    color: "#0C42CC",
    fontSize: 13,
    fontWeight: "400",
  },
  buttonStyle: {
    height: 38,
    width: "90%",
    backgroundColor: "#00A884",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default styles;
