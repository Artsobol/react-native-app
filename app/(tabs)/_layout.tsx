import React from "react";
import { Image, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Colors } from "@/shared/tokens";
import HouseIcon from "@/assets/icons/houseIcon";
import ScannerIcon from "@/assets/icons/scannerIcon";
import ProfileIcon from "@/assets/icons/profileIcon";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const icons: Record<
            "index" | "scanner" | "saveFood",
            React.ReactNode
          > = {
            index: <ProfileIcon width={32} height={32} fill={Colors.black} />,
            scanner: <ScannerIcon width={32} height={32} fill={Colors.black}/>,
            saveFood: <HouseIcon width={32} height={32} fill={Colors.black}/>,
          };

          return icons[route.name as keyof typeof icons];
        },
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabbarItem,
      })}
    >
      <Tabs.Screen name="scanner" options={{ title: "Сканнер" }} />
      <Tabs.Screen name="saveFood" options={{ title: "Сохраненная еда" }} />
      <Tabs.Screen name="index" options={{ title: "Профиль" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
      alignSelf: 'center',
      marginLeft: 30,
      bottom: 20,
      height: 90,
      backgroundColor: Colors.green,
      borderRadius: 60,
      position: "absolute",
      width: "85%"
  },
  tabbarItem: {
    paddingVertical: 25,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})
