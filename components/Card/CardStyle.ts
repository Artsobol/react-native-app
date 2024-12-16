import { Colors } from "@/shared/tokens";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 109,
    backgroundColor: Colors.white,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  imageCard: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  viewImage: {
    width: "25%",
    marginRight: 12,
  },
  nameAndButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  about: {
    height: "100%",
    width: "70%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonImage: {
    height: 24,
    width: 24,
  },
});

export default styles;