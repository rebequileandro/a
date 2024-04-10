import React from "react";
import { Constants } from "expo-constants";
import { Text, View } from "react-native";
import { repositories } from "../data/data";
export interface RepositoryListInterface {}

const RepositotyList: React.FC<RepositoryListInterface> = () => {
  return (
    <View>
      {repositories.map((repo) => (
        <View key={repo.id}>
          <Text>Id: {repo.id}</Text>
          <Text>Full Name: {repo.fullName}</Text>
          <Text>Description: {repo.description}</Text>
          <Text>Language: {repo.language}</Text>
          <Text>Stars: {repo.stargazersCount}</Text>
          <Text>Forks: {repo.forksCount}</Text>
          <Text>Review: {repo.reviewCount}</Text>
          <Text>Rating: {repo.ratingAverage}</Text>
        </View>
      ))}
    </View>
  );
};
export default RepositotyList;
