import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Симуляция проверки токена
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("authToken"); // Ваш токен авторизации
      setIsAuthenticated(!!token); // Если токен есть -> авторизован
    };
    checkAuth();
  }, []);

  return { isAuthenticated, setIsAuthenticated };
};
