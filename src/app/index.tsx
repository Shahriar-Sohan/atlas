import { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/layout/header";
import BottomMenu from "@/components/navigation/bottom-menu";
import CardStack from "@/components/wallet/card-stack";

export default function HomeScreen() {
  const [intro, setIntro] = useState(true);

  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  const menuOpacity = useSharedValue(0);

  // Intro timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Bottom menu animation
  useEffect(() => {
    if (!intro) {
      menuOpacity.value = withDelay(
        900,
        withTiming(1, { duration: 400 })
      );
    }
  }, [intro, menuOpacity]);

  const menuStyle = useAnimatedStyle(() => ({
    opacity: menuOpacity.value,
  }));

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-[22px] pt-[18px]">

          {/* Main content */}
          <View
            className="flex-1"
            onLayout={(event) => {
              const { width, height } = event.nativeEvent.layout;
              setScreen({ width, height });
            }}
          >
            <Header
              intro={intro}
              width={screen.width}
              height={screen.height}
            />

            {/* Document cards */}
            {!intro && (
              <Animated.View
                entering={FadeIn.delay(900).duration(400)}
              >
                <View className="mt-6">
                  <CardStack />
                </View>
              </Animated.View>
            )}
          </View>

          {/* Bottom navigation */}
          <Animated.View
            style={menuStyle}
            pointerEvents={intro ? "none" : "auto"}
          >
            <BottomMenu />
          </Animated.View>

        </View>
      </SafeAreaView>
    </View>
  );
}