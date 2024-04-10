import React from "react";
import { Constants } from "expo-constants";
import { Text, View } from "react-native";
import RepositotyList from "./RepositoryList";

export interface StyledTextInterface {
  blue?: boolean;
  bold?: boolean;
  children?: boolean;
  big?: boolean;
  small?: boolean;
}
const StyledText: React.FC<StyledTextInterface> = ({
  blue,
  bold,
  children,
  big,
  small,
}) => {
  return (
    <View>
      <RepositotyList />
    </View>
  );
};
export default StyledText;
