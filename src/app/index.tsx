import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
      
      <Text className="text-foreground text-4xl font-bold">
        atlas

        <Text className="text-accent">
          .
        </Text>

      </Text>
      <Text className="text-muted text-sm">
        Your digital identity wallet
      </Text>

    </View>
  );
}