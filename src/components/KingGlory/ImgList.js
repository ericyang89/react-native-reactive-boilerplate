import React from 'react';
import { Text, View } from 'react-native';

const Index = ({ content = 'TODO' }) => (
  <View>
    <Text>{content}</Text>
  </View>
);

export default Index;
