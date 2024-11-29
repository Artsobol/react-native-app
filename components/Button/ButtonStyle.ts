import { StyleSheet } from "react-native";
import Colors from "@/constants/colors";

const styles = StyleSheet.create({
  button: {
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Green,
    overflow: "hidden",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
