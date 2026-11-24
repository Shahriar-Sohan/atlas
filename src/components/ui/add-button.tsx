import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function AddButton() {
  return (
    <Pressable
        className="w-[42px] h-[42px] rounded-full bg-surface items-center justify-center active:opacity-70"
        accessibilityRole="button"
        accessibilityLabel="Add document"
        onPress={() => console.log("Add document")}
        >
      <Feather name="plus" size={24} color="#F5F5F7" />
    </Pressable>
  );
}