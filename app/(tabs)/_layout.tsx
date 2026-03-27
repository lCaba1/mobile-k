import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="convert" options={{ title: "Конвертировать" }} />
      <Tabs.Screen name="calculate" options={{ title: "Рассчитать" }} />
      <Tabs.Screen name="history" options={{ title: "История" }} />
    </Tabs>
  );
}

