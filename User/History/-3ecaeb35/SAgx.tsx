import React from "react";
import { Constants } from "expo-constants";
import { Text, View } from "react-native";
import RepositotyList from "./RepositoryList";

export interface MainInterface {}
const Main: React.FC<MainInterface> = () => {
  return (
    <View>
      <RepositotyList />
    </View>
  );
};
export default Main;
