import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 375,
    height: 81,
    backgroundColor: "#F9FAFF",
    borderRadius: 16,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  viewImage: {
    width: 57,
    height: 57,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 10,
  },
  imageCard: {
    width: "100%",
    height: "100%",
  },
  about: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  brand: {
    fontSize: 14,
    color: "#9C9C9C",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  timeAndRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 14,
    color: "#000",
    marginRight: 6,
  },
  rating: {
    fontSize: 10,
    fontWeight: "700",
    color: "#A9C700",
  },
  arrowButton: {
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingCircle: {
    width: 17,
    height: 17,
    borderRadius: 8.5,
    backgroundColor: "#C8FF00",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#000",
  },
});

export default styles;
