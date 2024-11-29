import React, { useState, useEffect } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  Image,
  ViewStyle,
  Pressable,
} from "react-native";
import styles from "./InputStyle";

export function Input({
  isPassword,
  style,
  isError,
  placeholder,
  errorMessage,
  value,
  onChangeText,
  ...props
}: TextInputProps & {
  isPassword?: boolean;
  style?: ViewStyle;
  isError?: boolean;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}) {
  const [isSecure, setIsSecure] = useState(isPassword);

  const dynamicPlaceholder = isError
    ? errorMessage || placeholder
    : placeholder;

  const togglePasswordVisibility = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={[styles.container, style, isError && styles.inputError]}>
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword && isSecure}
        placeholder={dynamicPlaceholder}
        placeholderTextColor={isError ? "#FA0043" : "#808080"}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {isPassword && (
        <Pressable
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}
        >
          <Image
            source={
              isSecure
                ? require("@/assets/icons/eye-off.png")
                : require("@/assets/icons/eye-on.png")
            }
            style={styles.icon}
          />
        </Pressable>
      )}
    </View>
  );
}
