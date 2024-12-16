import { Image, Pressable, Text, View } from "react-native";
import styles from "./CardStyle";
import { TextWithIcon } from "../TextWithIcon/TextWithIcon";

export function Card({
  title,
  quality,
  time,
  type,
  ...props
}: {
  title: string;
  quality: string;
  time: string;
  type: string;
}) {
  return (
    <View style={styles.card} {...props}>
      <View style={styles.viewImage}>
        <Image
          source={require("@/assets/images/cardImage.png")}
          style={styles.imageCard}
        ></Image>
      </View>

      <View style={styles.about}>
        <View style={styles.nameAndButton}>
          <Text style={styles.text}>{title}</Text>
          <Pressable>
            <Image
              source={require("@/assets/images/cardButton.png")}
              style={styles.buttonImage}
            />
          </Pressable>
        </View>
        <View style={styles.description}>
          <TextWithIcon text={quality} source="cardEllypse" />
          <TextWithIcon text={time} source="cardTime" />
          <TextWithIcon text={type} source="cardType" />
        </View>
      </View>
    </View>
  );
}