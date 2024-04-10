import React from "react";
import { Constants } from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import RepositotyList from "./RepositoryList";
import { theme } from "../theme";
export interface StyledTextInterface {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  children?: boolean;
  style?: boolean;
  small?: boolean;
}
const StyledText: React.FC<StyledTextInterface> = ({
  color,
  fontWeight,
  children,
  fontSize,
  style,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: "bold",
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
});
export default StyledText;
