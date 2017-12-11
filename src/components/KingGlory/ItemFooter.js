import React from 'react';
import { Text, View } from 'react-native';

const Index = ({ content = 'TODO:this is footer' }) => (
  <View>
    <Text>{content}</Text>
  </View>
);

export default Index;
