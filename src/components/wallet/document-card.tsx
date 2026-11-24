import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function DocumentCard() {
  return (
    <View className="h-[166px] rounded-[17px] bg-wallet-licence p-4">

      <View className="flex-row items-center justify-between">

        <View>
          <Text className="text-white text-base font-semibold">
            Driving licence
          </Text>

          <Text className="text-white/70 text-[10px]">
            PORTUGAL · CATEGORY B
          </Text>
        </View>

        <Feather name="truck" size={22} color="white" />

      </View>

    </View>
  );
}