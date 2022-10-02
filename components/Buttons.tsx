import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BUTTONS = [
  "AC",
  "()",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "B",
  "=",
];

export const Buttons = ({
  onPress,
}: {
  onPress: (command: string) => unknown;
}) => {
  return (
    <View style={buttonStyles.buttons}>
      {BUTTONS.map((command) => (
        <TouchableOpacity
          key={command}
          style={buttonStyles.button}
          onPress={() => onPress(command)}
        >
          <Text style={buttonStyles.buttonText}>{command}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 20,
    margin: 8,
    padding: 8,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
  },
  buttons: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    maxWidth: 340,
  },
});
