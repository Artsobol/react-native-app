import { ImageBackground, View, Image, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import styles from "./OnboardingScreenStyles";

export default function OnboardingScreen1() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/onboarding/OnboardingScreen2");
    console.log("Нажат второй онборндинг");
  };

  const [fontsLoaded] = useFonts({
    InterBold: require("@/assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("@/assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Добро</Text>
          <Text style={styles.text}>пожаловать</Text>
          <Text style={styles.text}>
            в<Text style={[styles.title, { marginBottom: 10 }]}> KCAL</Text>
          </Text>
        </View>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>Далее →</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
