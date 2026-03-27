import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export function HeaderDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Dropdown
      style={styles.dropdown}
      selectedTextStyle={styles.selectedText}
      data={data}
      labelField="label"
      valueField="value"
      value={value}
      onChange={(item) => onChange(item.value)}
    />
  );
}

const data = [
  { label: "", value: "0" },
  { label: "Snellen LogMAR", value: "1" },
  { label: "Sphere Equivalent", value: "2" },
  { label: "Plus Minus Cylinder", value: "3" },
  { label: "Astigmatism vector conversion", value: "4" },
  { label: "CCT IOP correction", value: "5" },
  { label: "mmHg kPa", value: "6" },
  { label: "Axial length refractive error", value: "7" },
  { label: "Visual field indices", value: "8" },
];

const styles = StyleSheet.create({
  dropdown: {
    width: 200,
    marginRight: 15,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    textAlign: "right",
  },
});
