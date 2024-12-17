import { StyleSheet } from "react-native";
import Colors from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#282828",
    backgroundColor: Colors.White,
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "black",
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#808080",
  },
  inputError: {
    borderColor: Colors.Red,
    backgroundColor: "rgba(250, 0, 67, 0.1)",
  },
});

export default styles;
