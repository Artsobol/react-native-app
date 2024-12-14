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
      marginTop: 201,
      height: 154,
      marginBottom: 41
    },

    text: {
      fontFamily: "InterBold",
      fontSize: 32,
      color: Colors.black,
      fontWeight: '700',
      lineHeight: 48,
      textAlign: 'center',
    },

    title: {
      fontFamily: "InterBold",
      fontWeight: "800",
      fontSize: 34,
      lineHeight: 48,
      color: Colors.black
    },
    button: {
      backgroundColor: Colors.green,
      width: 296,
      height: 44,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    buttonText: {
      fontFamily: "InterBold",
      fontWeight: "700",
      fontSize: 16,
      color: Colors.black,
    },
    icon: {
      width: 16,
      height: 16,
      position: 'absolute',
      left: -52
    },

    buttonText1: {
        color: Colors.lightGray,
        fontFamily: "InterBold",
        fontSize: 14,
        fontWeight: "700"
    },
    buttonContainer: {
        gap: 15,
        marginBottom: 109,
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
    }
  
  });

  export default styles;