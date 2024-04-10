import React from "react";
import { Text, View } from "react-native";

export interface MainInterface {}
const Main: React.FC<MainInterface> = () => {
  return (
    <View>
      <Text>Hola mundo</Text>
    </View>
  );
};
