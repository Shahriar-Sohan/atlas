import AddButton from "@/components/ui/add-button";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Animated, {
    Easing,
    FadeIn,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";



type HeaderProps = {
  intro: boolean;
  width: number;
  height: number;
};

export default function Header({
  intro,
  width,
  height,
}: HeaderProps) {
  const [brand, setBrand] = useState({
    width: 0,
    height: 0,
  });

  const progress = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (!intro) {
      progress.value = withTiming(1, {
        duration: 900,
        easing: Easing.inOut(Easing.cubic),
      });
    }
  }, [intro, progress]);

  useEffect(() => {
        if (brand.width > 0 && width > 0) {
            opacity.value = withTiming(1, {
            duration: 600,
            easing: Easing.out(Easing.cubic),
            });
        }
    }, [brand.width, width, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        translateX:
          ((width - brand.width) / 2) * (1 - progress.value),
      },
      {
        translateY:
          ((height - brand.height) / 2) * (1 - progress.value),
      },
    ],
  }));

  return (
    <View className="relative">

      <Animated.View
        style={[{ alignSelf: "flex-start" }, animatedStyle]}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setBrand({ width, height });
        }}
      >
        <Text className="text-foreground text-[32px] font-bold">
          atlas<Text className="text-accent">.</Text>
        </Text>

        <Text className="text-muted text-xs">
          Your digital identity wallet
        </Text>
      </Animated.View>

      {!intro && (
        <Animated.View
          entering={FadeIn.delay(900).duration(400)}
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          <AddButton />
        </Animated.View>
      )}
      

    </View>
  );
}