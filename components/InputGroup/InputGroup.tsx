import React from "react";
import { View } from "react-native";
import styles from "./InputGroupStyle";

export function InputGroup({ children }: { children: React.ReactNode }) {
  return <View style={[styles.groupContainer]}>{children}</View>;
}
