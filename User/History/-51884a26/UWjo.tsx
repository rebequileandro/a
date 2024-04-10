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
          <Text>Full Name: {repo.description}</Text>
          <Text>Full Name: {repo.language}</Text>
          <Text>Full Name: {repo.stargazersCount}</Text>
          <Text>Full Name: {repo.forksCount}</Text>
          <Text>Full Name: {repo.reviewCount}</Text>
          <Text>Full Name: {repo.ratingAverage}</Text>
        </View>
      ))}
    </View>
  );
};
export default RepositotyList;
