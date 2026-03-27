import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#000000" }}>
      <Tabs.Screen
        name="convert"
        options={{
          title: "Конвертировать",
          tabBarIcon: ({ color }) => (
            <Ionicons name="swap-horizontal" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calculate"
        options={{
          title: "Рассчитать",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calculator" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "История",
          tabBarIcon: ({ color }) => (
            <Ionicons name="time-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
