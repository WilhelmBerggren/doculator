import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const SideBar = () => {
  const offsetX = useSharedValue(0);
  const sideBarStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }],
    };
  });
  return (
    <>
      <Animated.View style={[sidebarStyles.sideBar, sideBarStyle]}>
        <View style={sidebarStyles.sideBarBody}>
          <Text>SideBar</Text>
        </View>
        <TouchableOpacity
          style={sidebarStyles.toggle}
          onPress={() => {
            offsetX.value = withSpring(300);
          }}
        >
          <Text style={sidebarStyles.toggleText}>☰</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const sidebarStyles = StyleSheet.create({
  sideBar: {
    backgroundColor: "#444444",
    width: "102%",
    height: "100%",
    padding: 16,
    flexGrow: 0,
    flexDirection: "row",
    borderRadius: 8,
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: "-100%",
  },
  sideBarBody: {
    width: "100%",
  },
  toggle: {
    height: 40,
    width: 44,
    marginTop: -16,
    backgroundColor: "#333333",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleText: {
    fontSize: 32,
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 12,
    margin: 8,
    color: "#202020",
  },
});
