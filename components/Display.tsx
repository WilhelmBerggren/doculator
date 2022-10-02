import React from "react";
import { StyleSheet, Text } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

const DEFAULT_DISPLAY_OFFSET = 440;

export const Display = ({ history }: { history: string[] }) => {
  const historyOffset = useSharedValue(-DEFAULT_DISPLAY_OFFSET);
  const displayHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      historyOffset.value = event.absoluteY;
    },
    onActive: (event, ctx) => {
      historyOffset.value = event.absoluteY;
    },
    onEnd: (event, ctx) => {
      historyOffset.value = withSpring(
        snapPoint(historyOffset.value, event.velocityY, [0, 400])
      );
    },
  });
  const displayStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: historyOffset.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={displayHandler}>
      <Animated.View style={[displayStyles.display, displayStyle]}>
        {history.map((entry, i) => (
          <Text
            selectable
            key={`history-${i}`}
            style={displayStyles.displayText}
          >
            {entry}
          </Text>
        ))}
      </Animated.View>
    </PanGestureHandler>
  );
};

const displayStyles = StyleSheet.create({
  display: {
    backgroundColor: "#444444",
    width: "100%",
    height: "100%",
    padding: 16,
    flexGrow: 0,
    flexDirection: "column-reverse",
    borderRadius: 8,
    zIndex: 1,
    position: "absolute",
    top: 0,
  },
  displayText: {
    color: "#fff",
    textAlign: "right",
    fontSize: 32,
  },
});
