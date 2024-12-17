import { StyleSheet } from "react-native";
import Colors from "@/constants/colors";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  safeArea: {
    flex: 1,
  },
  logo: {
    height: 38,
    width: 133,
    marginBottom: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 32,
  },
  content: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  tabContainer: {
    flexDirection: "row",
    width: "80%",
    height: 39,
    backgroundColor: "black",
    borderRadius: 12,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    borderRadius: 10,
    backgroundColor: Colors.Green,
    width: "50%",
    height: 35,
  },
  tabText: {
    color: Colors.White,
    fontSize: 16,
  },
  activeTabText: {
    color: "black",
  },
  buttonContainer: {
    width: "80%",
  },
  inputError: {
    backgroundColor: "rgba(250, 0, 67, 0.1)",
    borderColor: Colors.Red,
    borderWidth: 1,
    borderRadius: 12,
  },
});

export default styles;
