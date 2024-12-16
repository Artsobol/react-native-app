import { View } from "react-native";
import styles from "./GroupCardsStyle";
import { Card } from "../Card/Card";

export function GroupCards({ cards }: { cards: any[] }) {
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </View>
  );
}
