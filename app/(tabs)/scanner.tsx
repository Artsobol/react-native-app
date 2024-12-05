import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ScannerScreen() {
  return (
    <View style={styles.screen}>
      <Text>Сканнер? Сканнер.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
