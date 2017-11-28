import React from "react";
import { Text, View, Button } from "react-native";

export default class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of all contacts </Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate("Chat", { user: "lily" })
          }
          title="Chat with lily"
        />
      </View>
    );
  }
}
