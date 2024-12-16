import { Image, Text, View } from "react-native";
import styles from "./TextWithIconStyle";

export function TextWithIcon({
  text,
  source,
}: {
  text: string;
  source: string;
}) {
  const imagePaths: { [key: string]: any } = {
    cardEllypse: require("@/assets/icons/cardEllypse.png"),
    cardTime: require("@/assets/icons/cardTime.png"),
    cardType: require("@/assets/icons/cardType.png"),
  };

  return (
    <View style={styles.textWithIcon}>
      {imagePaths[source] ? (
        <Image source={imagePaths[source]} style={styles.icon} />
      ) : (
        <Text style={styles.text}>Image not found</Text>
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}