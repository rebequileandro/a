import React from "react";
import { Constants } from "expo-constants";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { repositories } from "../data/data";
export interface RepositoryListInterface {}

const RepositotyList: React.FC<RepositoryListInterface> = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => (
        <View key={item.id} style={styles.container}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Id: {item.id}
          </Text>
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
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
export default RepositotyList;
