import { Pressable, PressableProps, Text, View } from "react-native";

import styles from "./ButtonStyle";
import { useFonts } from "expo-font";

export function Button({
  text,
  disabled,
  ...props
}: PressableProps & { text: string; disabled?: boolean }) {
  const [fontsLoaded] = useFonts({
    InterBold: require("@/assets/fonts/Inter-Bold.ttf"),
  });

  return (
    <Pressable {...props} disabled={disabled}>
      <View style={[styles.button, { opacity: disabled ? 0.5 : 1 }]}>
        <Text style={[styles.buttonText, { fontFamily: "InterBold" }]}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
}
