import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const MenuButton = () => (
  <TouchableOpacity 
    onPress={() => console.log("Open Menu")} 
    style={styles.button}
  >
    <Ionicons name="ellipsis-vertical" size={22} color="#000000" />
  </TouchableOpacity>
);

export const HistoryActions = () => (
  <View style={styles.container}>
    <TouchableOpacity 
      onPress={() => console.log("Filter")} 
      style={styles.button}
    >
      <Ionicons name="funnel-outline" size={22} color="#000" />
    </TouchableOpacity>
    
    <TouchableOpacity 
      onPress={() => console.log("Sort")} 
      style={styles.button}
    >
      <Ionicons name="reorder-three-outline" size={26} color="#000000" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 10,
  },
});
