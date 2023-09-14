import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";
import User from './User/index';

const index = () => {
  return (
    <View>
      <Text className="text-red-400 text-4xl font-bold">A.C.Dilshan Creation</Text>
    <Link href='/User/'></Link>
    </View>
  );
};

export default index;
