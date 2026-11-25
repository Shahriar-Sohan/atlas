import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

import WalletIcon from "@/components/icons/wallet-icon";

type Tab = "Files" | "Wallet" | "Settings";

type MenuItemProps = {
  label: Tab;
  icon?: keyof typeof Feather.glyphMap;
  active: boolean;
  onPress: () => void;
};

// Individual menu item
function MenuItem({
  label,
  icon,
  active,
  onPress,
}: MenuItemProps) {
  const scale = useSharedValue(active ? 1.2 : 1);

  useEffect(() => {
    scale.value = withSpring(active ? 1.2 : 1, {
      damping: 15,
      stiffness: 180,
      mass: 0.6,
    });
  }, [active, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      className="flex-1 items-center gap-1"
    >
      <View className="h-12 items-center justify-center">
        <Animated.View style={animatedStyle}>
          {label === "Wallet" ? (
            <WalletIcon size={42} active={active} />
          ) : (
            <Feather
              name={icon}
              size={24}
              color={active ? "#C5D2FF" : "#898D96"}
            />
          )}
        </Animated.View>
      </View>

      <Text
        className={`text-xs font-medium ${
          active ? "text-accent" : "text-muted"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

// Main bottom navigation
export default function BottomMenu() {
  const [activeTab, setActiveTab] = useState<Tab>("Wallet");

  return (
    <View className="flex-row items-center border-t border-border py-3">
      <MenuItem
        label="Files"
        icon="folder"
        active={activeTab === "Files"}
        onPress={() => setActiveTab("Files")}
      />

      <MenuItem
        label="Wallet"
        active={activeTab === "Wallet"}
        onPress={() => setActiveTab("Wallet")}
      />

      <MenuItem
        label="Settings"
        icon="settings"
        active={activeTab === "Settings"}
        onPress={() => setActiveTab("Settings")}
      />
    </View>
  );
}