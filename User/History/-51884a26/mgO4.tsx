import React from "react";
import { Constants } from "expo-constants";
import { FlatList, Text, View } from "react-native";
import { repositories } from "../data/data";
export interface RepositoryListInterface {}

const RepositotyList: React.FC<RepositoryListInterface> = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => (
        <View
          key={item.id}
          style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}
        >
          <Text>Id: {item.id}</Text>
          <Text>Full Name: {item.fullName}</Text>
          <Text>Description: {item.description}</Text>
          <Text>Language: {item.language}</Text>
          <Text>Stars: {item.stargazersCount}</Text>
          <Text>Forks: {item.forksCount}</Text>
          <Text>Review: {item.reviewCount}</Text>
          <Text>Rating: {item.ratingAverage}</Text>
        </View>
      )}
    />
  );
};
export default RepositotyList;
