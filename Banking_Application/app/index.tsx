import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";
import Home from "./home";

const index = () => {
  return (
    <View>
      <Text className="text-red-500 text-4xl font-bold">
        {/* className=" text-red-400 text-4xl font-bold" */}
        A.C.Dilshan Creation
      </Text>
      {/* <Link href="">user click</Link> */}
      <Link href="Home">home click</Link>
    </View>
  );
};

export default index;
