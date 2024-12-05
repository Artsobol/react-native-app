import React from "react";
import { Image } from "react-native";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const icons: Record<
            "index" | "scanner" | "saveFood" | "settings",
            any
          > = {
            index: require("../../assets/icons/FirstIcon.png"),
            scanner: require("../../assets/icons/SecondIcon.png"),
            saveFood: require("../../assets/icons/ThirdIcon.png"),
            settings: require("../../assets/icons/FourthIcon.png"),
          };

          return (
            <Image
              source={icons[route.name as keyof typeof icons]}
              style={{ width: 24, height: 24 }}
            />
          );
        },
        tabBarStyle: { height: 60 },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Профиль" }} />
      <Tabs.Screen name="scanner" options={{ title: "Сканнер" }} />
      <Tabs.Screen name="saveFood" options={{ title: "Сохраненная еда" }} />
      <Tabs.Screen name="settings" options={{ title: "Настройки" }} />
    </Tabs>
  );
}
