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
      // justifyContent: "center"
    },
    logo: {
      height: 38,
      width: 133,
      position: "absolute",
      top: 71,
    },

    textContainer: {
      alignItems: 'center',
      marginTop: 141,
      width: 339,
      height: 119,
      marginBottom: 15
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
    miniLogo: {
      width: 81,
      height: 23,
      marginBottom: 15
    },
    arrowContainer: {
      flexDirection: 'row',
      gap: 81,
      marginBottom: 10
    },
    promo: {
      flexDirection: 'row',
      gap: 60,
      justifyContent: 'center'
    },

    image: {
      width: 71,
      height: 74
    },

    sign: {
      width: 27,
      height: 27,
      marginTop: 20
    },
    textContainer1: {
      flexDirection: 'row',
      gap: 63
    },
    promoText: {
      fontFamily: "InterMedium",
      fontWeight:'500',
      fontSize: 14,
      lineHeight: 21,
      textAlign: 'center'
    },
    promoTextContainer: {
      width: 160,
      height: 42
    },
    promo2: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 30
    }
  
  });

  export default styles;