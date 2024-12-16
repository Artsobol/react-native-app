import { Image, Pressable, Text, View } from "react-native";
import styles from "./CardStyle";
import { TextWithIcon } from "../TextWithIcon/TextWithIcon";

export function Card({
  title,
  brand = "Unknown brand",
  time,
  rating,
  ...props
}: {
  title: string;
  brand?: string;
  time: string;
  rating?: string;
}) {
  return (
    <View style={styles.card} {...props}>
      <View style={styles.viewImage}>
        <Image
          source={require("@/assets/images/cardImage.png")}
          style={styles.imageCard}
        />
      </View>

      <View style={styles.about}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.brand}>{brand}</Text>
        <View style={styles.infoRow}>
          <TextWithIcon text={time} source="cardTime" />
          <View style={styles.ratingCircle}>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.arrowButton}>
        <Image
          source={require("@/assets/images/cardButton.png")}
          style={{ width: 26, height: 26 }}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}
