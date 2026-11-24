import DocumentCard from "@/components/wallet/document-card";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/layout/header";

export default function HomeScreen() {
  const [intro, setIntro] = useState(true);

  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-[22px] pt-[18px]">
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

            {!intro && (
              <Animated.View entering={FadeIn.delay(900).duration(400)}>
                <View className="mt-6">
                  <DocumentCard />
                </View>
              </Animated.View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}