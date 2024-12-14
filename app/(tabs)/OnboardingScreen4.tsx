import { ImageBackground, View, Image, Text, Pressable } from "react-native";
import styles from "./Screen4Styles";
import { useRouter } from "expo-router";
import { Colors } from "@/shared/tokens";
import MailIcon from "@/assets/images/mail";

export default function OnboardingScreen2() {

const router = useRouter();
  
const handleNext = () => {
     router.push("/OnboardingScreen3");
    };

    return(
        <ImageBackground source={require("../../assets/images/background.png")} style={styles.background}>
              <View style={styles.container}>
                <Image source={require("../../assets/images/Logo.png")} style = {styles.logo}/>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    Войдите, чтобы продолжить свой путь с
                    <Text style={styles.title}> KCAL</Text>
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Pressable style={({ pressed }) => [
                  styles.button,
                  pressed && { opacity: 0.5},
                  ]}
                  onPress={handleNext}
                >
                  
                  <View style={styles.buttonContent}>
                  <MailIcon style={[styles.icon, {width: 19, left: -30}]}/>
                  <Text style={styles.buttonText}>Войти с помощью эл. почты</Text>
                  </View>
                  </Pressable>
                  <Pressable style={({ pressed }) => [
                  styles.button, {backgroundColor: Colors.darkGray},
                  pressed && { opacity: 0.5},
                  ]}
                  onPress={handleNext}
                >
                  <Text style={styles.buttonText1}>Нет аккаунта? Зарегистрируйся сейчас!</Text>
                  </Pressable>
                  </View>
                  <Pressable style={({ pressed }) => [
                  styles.button, {opacity: 0.5},
                  pressed && { opacity: 0.5},
                  ]}
                  onPress={handleNext}
                >
                  <Text style={styles.buttonText}>пропустить</Text>
                  </Pressable>
              </View>
        </ImageBackground>
    );
  }