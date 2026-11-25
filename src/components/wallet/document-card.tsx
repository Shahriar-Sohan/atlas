import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

export type DocumentCardProps = {
  title: string;
  subtitle: string;
  holder: string;
  color: string;
  icon: keyof typeof Feather.glyphMap;
}




export default function DocumentCard({title,subtitle,holder,color,icon}:DocumentCardProps) {
  return (
    <View className="h-[166px] rounded-[17px] p-4" style={{backgroundColor: color}}>

      <View className="flex-row items-center justify-between">

        <View>
          <Text className="text-white text-base font-semibold">
            {title}
          </Text>

          <Text className="text-white/70 text-[10px]">
            {subtitle}
          </Text>
        </View>

        <Feather name={icon} size={22} color="white" />

      </View>

    </View>
  );
}