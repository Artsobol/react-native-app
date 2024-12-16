import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Image, View, Text, StyleSheet, ImageBackground, TextInput, Pressable, Alert } from "react-native";
import { Colors } from "@/shared/tokens";

export default function Profile() {

  const [fontsLoaded] = useFonts({
    InterBold: require("@/assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("@/assets/fonts/Inter-Medium.ttf"),
    SFMedium: require("@/assets/fonts/SFCompactText-Medium.otf"),
    SFBold: require("@/assets/fonts/SFCompactText-Bold.otf"),
  });

  function confirmChangingPassword() {
    Alert.alert("Подтвердить изменение пароля", "Снова его можно будет поменять тут же",
      [
        { text: 'Нет', onPress: () => console.log('Пароль не изменен') },
        {text: "Да", onPress: () => console.log("Пароль изменен"), style: 'cancel'},
      ]
    )
  };

  function confirmDeletingAccount() {
    Alert.alert("Подтвердить удаление аккаунта","Его нельзя будет восстановить",
      [
        {text: "Удалить аккаунт", onPress: () => console.log("Аккаунт удален"), style: 'destructive'},
        {text: "Отменить", onPress: () => console.log("Аккаунт не удален"), style: 'default'}
      ]
    )
  };

  return (
    <ImageBackground source={require("../../assets/images/background.png")} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Привет!</Text>
            <Text style={styles.text}>Username_test</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#696969" editable={false} />
            <TextInput style={styles.input} placeholder="Логин" placeholderTextColor="#696969" editable={false}/>
            <TextInput style={styles.input} placeholder="Пароль" placeholderTextColor="#696969" secureTextEntry />
            <TextInput style={styles.input} placeholder="Повторите пароль" placeholderTextColor="#696969" secureTextEntry/>
            <Pressable style={({pressed}) => [styles.confirmButton, pressed && {opacity: 0.5}]}
              onPress={confirmChangingPassword}>
              <Text style={styles.confirmButtonText}>Подтвердить изменения</Text>
            </Pressable>
          </View>
          <View style={styles.deleteAccountContainer}>
            <Pressable style={({pressed}) => [styles.deleteAccountButtom, pressed && {opacity: 0.5}]}
              onPress={confirmDeletingAccount}>
            <Text style={styles.deleteAccountText}>Удалить аккаунт</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    flex: 1,
  },

  container: {
    flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      //justifyContent: "center",
      paddingHorizontal: 35,
  },

  titleContainer: {
    marginTop: 82,
    marginLeft: 45,
    marginRight: 158,
    width: 231,
    height: 70,
    paddingBottom: 10,
    marginBottom: 10,
    //backgroundColor: Colors.green
  },
  title: {
    fontFamily: "SFBold",
    fontSize: 64,
    fontWeight: "700"
  },
  main: {
    width: "100%",
    height: "60%",
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 9
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "13%",
    gap: 5,
    marginTop: 14,
    marginBottom: 15,
    //backgroundColor: Colors.lightBlue
  },
  text: {
    fontFamily: "SFMedium",
    fontSize: 24,
    fontWeight: "400"
  },

  inputContainer: {
    //alignItems: 'center',
    //justifyContent: 'center',
    gap: 15,
  },

  input: {
    width: 280,
    borderRadius: 13,
    padding: 11,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: Colors.lightBlue,
    color: Colors.darkGray
  },

  confirmButton: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 45,
    backgroundColor: Colors.green
  },

  confirmButtonText: {
    fontFamily: "SFBold",
    fontSize: 16,
    fontWeight: "600"
  },

  deleteAccountContainer: {
    paddingLeft: 10,
    paddingVertical: 20
  },

  deleteAccountText: {
    fontFamily: "SFMedium",
    fontSize: 15,
    color: Colors.red,
    textDecorationLine: 'underline'
  },
  deleteAccountButtom: {
    //position: 'absolute',
    right: "30%",
  },



});
