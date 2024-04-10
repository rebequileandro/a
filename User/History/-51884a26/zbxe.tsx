import React from "react";
import { Constants } from "expo-constants";
import { Text, View } from "react-native";
import { repositories } from "../data/data";
export interface RepositoryListInterface {}

const RepositotyList: React.FC<RepositoryListInterface> = () => {
  return (
    <View>
      {repositories.map(() => (
        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      ))}
    </View>
  );
};
export default RepositotyList;
