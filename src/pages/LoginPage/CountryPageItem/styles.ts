// styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    elevation: 8,
    paddingHorizontal: 20,
    gap: 18,
    paddingVertical: 6,
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderBottomColor: "#85959F",
    paddingVertical: 12,
  },
  midView: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
});

export default styles;
