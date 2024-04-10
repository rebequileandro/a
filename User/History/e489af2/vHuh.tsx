import React from "react";
import { Constants } from "expo-constants";
import { Text, View } from "react-native";
import RepositotyList from "./RepositoryList";

export interface StyledTextInterface {}
const StyledText: React.FC<StyledTextInterface> = () => {
  return (
    <View>
      <RepositotyList />
    </View>
  );
};
export default StyledText;
