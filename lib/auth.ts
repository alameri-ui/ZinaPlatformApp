import { api } from "./api";
import * as SecureStore from "expo-secure-store";

export async function login(email: string, password: string) {
  const response = await api.post("/api/auth/login", { email, password });
  if (response.data.token) {
    await SecureStore.setItemAsync("auth_token", response.data.token);
  }
  return response.data;
}

export async function logout() {
  await api.post("/api/auth/logout");
  await SecureStore.deleteItemAsync("auth_token");
}

export async function getProfile() {
  const response = await api.get("/api/auth/me");
  return response.data;
}
