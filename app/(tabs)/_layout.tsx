import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "@/shared/tokens";
import HouseIcon from "@/assets/icons/houseIcon";
import ScannerIcon from "@/assets/icons/scannerIcon";
import ProfileIcon from "@/assets/icons/profileIcon";
import OnboardingScreen1 from "../onboarding/OnboardingScreen1";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Layout() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        // await AsyncStorage.removeItem("hasSeenOnboarding");
        // console.log("Флаг онбординга успешно сброшен.");
        // Читаем флаг из AsyncStorage
        const onboardingComplete = await AsyncStorage.getItem(
          "hasSeenOnboarding"
        );

        // Устанавливаем состояние в зависимости от флага
        if (onboardingComplete === "true") {
          setShowOnboarding(false); // Онбординг пройден
        } else {
          setShowOnboarding(true); // Онбординг не пройден
        }
      } catch (error) {
        console.error("Ошибка при проверке AsyncStorage:", error);
        setShowOnboarding(true); // Если ошибка, показываем онбординг
      }
    };

    checkOnboarding();
  }, []);

  // Пока состояние не определено, показываем пустой экран
  if (showOnboarding === null) {
    return null;
  }

  // Показываем онбординг, если он не пройден
  if (showOnboarding) {
    return <OnboardingScreen1 />;
  }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const icons: Record<
            "index" | "scanner" | "saveFood",
            React.ReactNode
          > = {
            index: <ProfileIcon width={32} height={32} fill={Colors.black} />,
            scanner: <ScannerIcon width={32} height={32} fill={Colors.black} />,
            saveFood: <HouseIcon width={32} height={32} fill={Colors.black} />,
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
    alignSelf: "center",
    marginLeft: 30,
    bottom: 20,
    height: 90,
    backgroundColor: Colors.green,
    borderRadius: 60,
    position: "absolute",
    width: "85%",
  },
  tabbarItem: {
    paddingVertical: 25,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
