import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Display, Buttons, SideBar } from "./components";

const App = () => {
  const [history, setHistory] = useState(["1 + 2"]);
  const onPress = (command: string) => {
    if (command === "=") {
      setHistory([command, ...history]);
    } else if (command === "B") {
      const [_, ...rest] = history;
      setHistory(rest);
    } else {
      const [first, ...rest] = history;
      setHistory([first + command, ...rest]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Display history={history} />
      <Buttons onPress={onPress} />
      <SideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#202020",
    alignItems: "center",
  },
});

export default App;
