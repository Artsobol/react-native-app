import { ScrollView, Text, View } from "react-native";
import styles from "./SaveFoodHistoryStyle";
import { useState } from "react";
import { GroupCards } from "@/components/GroupCards/GroupCards";

const cardData = [
  {
    title: "Wine",
    quality: "Terrible",
    time: "2 hours ago",
    type: "Whole foods",
    timeSort: "2024-12-05T14:00:00",
  },
  {
    title: "Another Wine",
    quality: "Bad",
    time: "3 hours ago",
    type: "Local Market",
    timeSort: "2024-12-05T13:00:00",
  },
  {
    title: "Best Wine",
    quality: "Amazing",
    time: "1 day ago",
    type: "Wine Shop",
    timeSort: "2024-12-04T10:00:00",
  },
  {
    title: "Red Delight",
    quality: "Good",
    time: "5 hours ago",
    type: "Supermarket",
    timeSort: "2024-12-05T09:00:00",
  },
  {
    title: "Golden Reserve",
    quality: "Excellent",
    time: "6 hours ago",
    type: "Wine Boutique",
    timeSort: "2024-12-05T08:00:00",
  },
  {
    title: "Vintage Sparkle",
    quality: "Outstanding",
    time: "2 days ago",
    type: "Winery",
    timeSort: "2024-12-03T15:00:00",
  },
  {
    title: "Rustic Red",
    quality: "Moderate",
    time: "7 hours ago",
    type: "Farmers Market",
    timeSort: "2024-12-05T07:00:00",
  },
  {
    title: "Elegant Rose",
    quality: "Fair",
    time: "4 hours ago",
    type: "Convenience Store",
    timeSort: "2024-12-05T10:00:00",
  },
  {
    title: "Smooth White",
    quality: "Great",
    time: "3 days ago",
    type: "Online Store",
    timeSort: "2024-12-02T18:00:00",
  },
  {
    title: "Bold Merlot",
    quality: "Decent",
    time: "1 week ago",
    type: "Specialty Shop",
    timeSort: "2024-11-28T12:00:00",
  },
];

export default function History() {
  const [sortedCards, setSortedCards] = useState(cardData);

  const sortByDate = () => {
    const sorted = [...sortedCards].sort(
      (a, b) => new Date(b.timeSort).getTime() - new Date(a.timeSort).getTime()
    );
    setSortedCards(sorted);
  };

  const sortByName = () => {
    const sorted = [...sortedCards].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedCards(sorted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle} onPress={sortByDate}>
          Recently added
        </Text>
        <Text style={styles.number}>{sortedCards.length}</Text>
        <Text style={styles.subtitle} onPress={sortByName}>
          Saved
        </Text>
        <Text style={styles.number}>{sortedCards.length}</Text>
      </View>
      <ScrollView>
        <GroupCards cards={sortedCards} />
      </ScrollView>
    </View>
  );
}
