import { Image, View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./Screen3Styles";
import { useRouter } from "expo-router";
import EqualIcon from "@/assets/images/equal";
import PlusIcon from "@/assets/images/plus";
import BarcodeIcon from "@/assets/images/barcode";
import GroceryIcon from "@/assets/images/grocery";
import ShoppingIcon from "@/assets/images/shopping";
import Arrow1Icon from "@/assets/images/arrow1";
import Arrow2Icon from "@/assets/images/arrow2";

export default function OnboardingScreen3() {

    const router = useRouter();
    
      const handleNext = () => {
        router.push("/OnboardingScreen4");
      };
      
    return (
        <ImageBackground source={require("../../assets/images/background.png")} style={styles.background}>
              <View style={styles.container}>
                <Image source={require("../../assets/images/Logo.png")} style = {styles.logo}/>
                <View style={[styles.textContainer]}>
                <Text style={[styles.text, {fontSize: 20, fontWeight: '600'}]}>Внедрение пищевых привычек - это только начало.</Text>
                <Text style={[styles.text, {fontSize: 20, fontWeight: '600'}]}><Text style={[styles.title, {fontSize: 20, fontWeight: '700', lineHeight: 30}]}>KCAL</Text> поможет вам составить здоровую продуктовую корзину!</Text>
              </View>
              <Image source={require("../../assets/images/Logo.png")} style = {styles.miniLogo}/>
              <View style={styles.arrowContainer}>
                <Arrow1Icon/>
                <Arrow2Icon/>
              </View>
              <View style={styles.promo}>
              <GroceryIcon style={styles.image}/>
              <PlusIcon style={styles.sign}/>
              <BarcodeIcon style={styles.image}/>
              </View>
              <View style={styles.textContainer1}>
                <View style={styles.promoTextContainer}>
                <Text style={styles.promoText}>Огромная база продуктов</Text>
                </View>
                <View style={styles.promoTextContainer}>
                <Text style={styles.promoText}>Быстрая оценка БЖУ</Text>
                </View>
              </View>
              <View style={styles.promo2}>
              <EqualIcon width={20} height={20} style={[styles.sign, { marginBottom: 27 }]} />
                <ShoppingIcon style={[styles.image, {marginBottom: 8, marginRight: 10}]}/>
                <Text style={styles.promoText}>Здоровая корзина</Text>
              </View>
              <Pressable style={({ pressed }) => [
            styles.button,
            pressed && { opacity: 0.5, marginTop: 113},
          ]}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>Далее →</Text>
        </Pressable>
            </View>
          </ImageBackground>
    );
}