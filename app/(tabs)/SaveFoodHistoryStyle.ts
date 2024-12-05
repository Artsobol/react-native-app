import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginRight: 10,
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20,
    color: "gray",
  },
});

export default styles;
