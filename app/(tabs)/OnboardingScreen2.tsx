import { ImageBackground, View, Image, Text, Pressable } from "react-native";
import styles from "./Screen2Styles";
import { useRouter } from "expo-router";

export default function OnboardingScreen2() {

  const router = useRouter();
  
    const handleNext = () => {
      router.push("/OnboardingScreen3");
    };
    
    return(
        <ImageBackground source={require("../../assets/images/background.png")} style={styles.background}>
              <View style={styles.container}>
                <Image source={require("../../assets/images/Logo.png")} style = {styles.logo}/>
                <View style={[styles.textContainer,  {marginBottom: 32}]}>
                <Text style={styles.text}>
                  <Text style={styles.title}>KCAL - </Text>это приложение, которое позволяет считывать КБЖУ продукта по штрих-коду
                  </Text>
                </View>
                <Image source={require("../../assets/images/icon.png")} style={styles.icon}></Image>
                <Pressable style={({ pressed }) => [
                  styles.button,
                  pressed && { opacity: 0.5},
                  ]}
                  onPress={handleNext}
                >
                  <Text style={styles.buttonText}>Далее →</Text>
                  </Pressable>
              </View>
            </ImageBackground>
    );
}