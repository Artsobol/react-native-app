import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen1" />
      <Stack.Screen name="OnboardingScreen2" />
      <Stack.Screen name="OnboardingScreen3" />
      <Stack.Screen name="OnboardingScreen4" />
    </Stack>
  );
}
