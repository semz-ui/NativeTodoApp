import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const API_URL = "http://localhost:5000/api/users/";
const API_URL = "https://mushy-gold-shirt.cyclic.app/api/users/";
//Register a new user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    try {
      const dataValue = JSON.stringify(response.data);
      AsyncStorage.setItem("user", dataValue);
    } catch (error) {
      console.error("Register async error");
    }
  }
  return response.data;
};

//Login the user

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    try {
      const dataValue = JSON.stringify(response.data);
      AsyncStorage.setItem("user", dataValue);
    } catch (error) {
      console.error("login async error");
    }
  }
  return response.data;
};

const logout = async () => {
  AsyncStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
