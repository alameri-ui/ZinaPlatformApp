import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#7c3aed" }}>
      <Tabs.Screen name="index" options={{
        title: "الرئيسية",
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
      }} />
      <Tabs.Screen name="stores" options={{
        title: "المتاجر",
        tabBarIcon: ({ color }) => <Ionicons name="storefront" size={24} color={color} />,
      }} />
      <Tabs.Screen name="orders" options={{
        title: "الطلبات",
        tabBarIcon: ({ color }) => <Ionicons name="receipt" size={24} color={color} />,
      }} />
      <Tabs.Screen name="wallet" options={{
        title: "المحفظة",
        tabBarIcon: ({ color }) => <Ionicons name="wallet" size={24} color={color} />,
      }} />
    </Tabs>
  );
}
