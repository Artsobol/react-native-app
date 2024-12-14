import { Colors } from "@/shared/tokens";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
      resizeMode: "cover",
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center"
    },
    logo: {
      height: 38,
      width: 133,
      position: "absolute",
      top: 71,
    },
    textContainer: {
      alignItems: 'center',
      justifyContent: "center",
      width: '75%',
      flexGrow: 0,
      marginTop: 190
    },

    text: {
      fontFamily: "InterBold",
      fontSize: 28,
      color: Colors.black,
      fontWeight: '700',
      textAlign: 'center',
    },

    title: {
      fontFamily: "InterBold",
      fontWeight: "800",
      fontSize: 34,
      lineHeight: 42,
      color: Colors.black
    },
    button: {
      backgroundColor: Colors.green,
      width: 296,
      height: 44,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10
    },
    buttonText: {
      fontFamily: "InterBold",
      fontWeight: "700",
      fontSize: 16,
      color: Colors.black,
    },
    icon: {
      width: 94,
      height: 141,
      marginBottom: 100
    },
  
  });

  export default styles;