import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { InputGroup } from "@/components/InputGroup/InputGroup";
import { useState } from "react";
import styles from "./indexStyle";
import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
  SafeAreaView,
} from "react-native";

export default function HomeScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const [fields, setFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const [errors, setErrors] = useState({
    email: { isError: false, message: "" },
    password: { isError: false, message: "" },
    confirmPassword: { isError: false, message: "" },
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (name: string, value: string) => {
    setFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const { email, password, confirmPassword } = fields;
    const newErrors = {
      email: {
        isError: !emailRegex.test(email),
        message: "Неверный Email",
      },
      password: {
        isError: password !== confirmPassword,
        message: "Пароли не совпадают",
      },
      confirmPassword: {
        isError: password !== confirmPassword,
        message: "Пароли не совпадают",
      },
      nickname: { isError: false, message: "" },
    };

    if (newErrors.email.isError)
      setFields((prevState) => ({ ...prevState, email: "" }));
    if (newErrors.password.isError)
      setFields((prevState) => ({ ...prevState, password: "" }));
    if (newErrors.confirmPassword.isError)
      setFields((prevState) => ({ ...prevState, confirmPassword: "" }));

    setErrors(newErrors);

    setTimeout(() => {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: { isError: false, message: "" },
        password: { isError: false, message: "" },
        confirmPassword: { isError: false, message: "" },
      }));
    }, 2000);

    return !Object.values(newErrors).some((error) => error.isError);
  };

  const isFormValid = !(
    !fields.email ||
    !fields.password ||
    (!isLogin && (!fields.confirmPassword || !fields.nickname)) ||
    Object.values(errors).some((error) => error.isError)
  );

  const handleRegistration = () => {
    if (validateForm()) {
      // TODO регистрацию
    }
  };

  const handleAuth = () => {
    const { email, password } = fields;
    if (emailRegex.test(email)) {
      // TODO авторизацию
    }
  };

  const resetFields = () => {
    setFields({
      email: "",
      password: "",
      confirmPassword: "",
      nickname: "",
    });
    setErrors({
      email: { isError: false, message: "" },
      password: { isError: false, message: "" },
      confirmPassword: { isError: false, message: "" },
    });
  };

  const getButtonText = () => {
    const { email, password, confirmPassword, nickname } = fields;
    if (isLogin) {
      return !email || !password ? "Войти" : "Войти ->";
    }
    return !email || !password || !confirmPassword || !nickname
      ? "Зарегистрироваться"
      : "Зарегистрироваться ->";
  };

  const getButtonPress = () => {
    return isLogin ? handleAuth : handleRegistration;
  };

  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={styles.container}>
          {/* Логотип */}
          <Image
            source={require("@/assets/images/Logo.png")}
            style={styles.logo}
          />

          <View style={styles.content}>
            {/* Вкладки */}
            <View style={styles.tabContainer}>
              <Pressable
                style={[styles.tabButton, isLogin && styles.activeTab]}
                onPress={() => {
                  setIsLogin(true);
                  resetFields();
                }}
              >
                <Text style={[styles.tabText, isLogin && styles.activeTabText]}>
                  Авторизация
                </Text>
              </Pressable>
              <Pressable
                style={[styles.tabButton, !isLogin && styles.activeTab]}
                onPress={() => {
                  setIsLogin(false);
                  resetFields();
                }}
              >
                <Text
                  style={[styles.tabText, !isLogin && styles.activeTabText]}
                >
                  Регистрация
                </Text>
              </Pressable>
            </View>

            {/* Поля ввода */}
            <InputGroup>
              {!isLogin && (
                <Input
                  placeholder={"Имя пользователя"}
                  onChangeText={(value) => handleInputChange("nickname", value)}
                  value={fields.nickname}
                />
              )}
              <Input
                placeholder={
                  errors.email.isError ? errors.email.message : "Email"
                }
                value={fields.email}
                onChangeText={(value) => handleInputChange("email", value)}
                isError={errors.email.isError}
                errorMessage={errors.email.message}
              />
              <Input
                placeholder={
                  errors.password.isError ? errors.password.message : "Пароль"
                }
                onChangeText={(value) => handleInputChange("password", value)}
                isPassword
                value={fields.password}
                isError={errors.password.isError && !isLogin}
                errorMessage={errors.password.message}
              />
              {!isLogin && (
                <Input
                  placeholder={
                    errors.confirmPassword.isError
                      ? errors.confirmPassword.message
                      : "Подтверждение пароля"
                  }
                  isPassword
                  value={fields.confirmPassword}
                  onChangeText={(value) =>
                    handleInputChange("confirmPassword", value)
                  }
                  isError={errors.confirmPassword.isError}
                  errorMessage={errors.confirmPassword.message}
                />
              )}
            </InputGroup>

            {/* Кнопка */}
            <Button
              text={getButtonText()}
              style={styles.buttonContainer}
              onPress={getButtonPress()}
              disabled={!isFormValid}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
