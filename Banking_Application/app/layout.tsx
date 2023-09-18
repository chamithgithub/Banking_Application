import React from "react";
import { View } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

// const height = StatusBar.length;
// console.log(height);

const Layout = () => {
  return (
    <View style={{ padding: 50, flex: 1 }}>
      <StatusBar backgroundColor="#101010" style="light" />
      <Slot />
    </View>
  );
};

export default Layout;
