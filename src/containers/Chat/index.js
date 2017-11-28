import React from "react";
import { Text, View, Button } from "react-native";

export default class ChatScreen extends React.Component {
  // static navigationOptions = {
  // 	title: 'Chat with Lucy',
  // };
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
        <Button
          onPress={() => this.props.navigation.navigate("All")}
          title="go all"
        />
      </View>
    );
  }
}
