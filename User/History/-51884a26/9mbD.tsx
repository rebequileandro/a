import React from "react";
import { Constants } from "expo-constants";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { repositories } from "../data/data";
import StyledText from "./StyledText";
export interface RepositoryListInterface {}

const RepositotyList: React.FC<RepositoryListInterface> = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => (
        <View key={item.id} style={styles.container}>
          <StyledText fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </StyledText>
          <StyledText>Description: {item.description}</StyledText>
          <StyledText>Language: {item.language}</StyledText>
          <StyledText>Stars: {item.stargazersCount}</StyledText>
          <StyledText>Forks: {item.forksCount}</StyledText>
          <StyledText>Review: {item.reviewCount}</StyledText>
          <StyledText>Rating: {item.ratingAverage}</StyledText>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strog: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "gray",
  },
});
export default RepositotyList;
