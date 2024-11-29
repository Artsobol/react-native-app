import { Pressable, PressableProps, Text, View } from "react-native";

import styles from "./ButtonStyle";

export function Button({
  text,
  disabled,
  ...props
}: PressableProps & { text: string; disabled?: boolean }) {
  return (
    <Pressable {...props} disabled={disabled}>
      <View style={[styles.button, { opacity: disabled ? 0.5 : 1 }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
}
