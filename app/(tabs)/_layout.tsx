import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { HeaderDropdown } from "../../components/dropdown";

export default function TabsLayout() {
  const [selectedCalculator, setSelectedCalculator] = useState("0");

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#000000" }}>
      <Tabs.Screen
        name="calculate"
        options={{
          title: "Рассчитать",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calculator" size={24} color={color} />
          ),
          headerRight: () => (
            <HeaderDropdown
              value={selectedCalculator}
              onChange={setSelectedCalculator}
            />
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
          headerRight: () => (
            <HeaderDropdown
              value={selectedCalculator}
              onChange={setSelectedCalculator}
            />
          ),
        }}
      />
    </Tabs>
  );
}
