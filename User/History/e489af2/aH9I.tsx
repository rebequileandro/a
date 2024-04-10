import React from "react";
import { Constants } from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import RepositotyList from "./RepositoryList";
import { theme } from "../theme";
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
  const textStyles = [];
  return <Text>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
  },
  bold: {
    fontWeight: "bold",
  },
});
export default StyledText;
