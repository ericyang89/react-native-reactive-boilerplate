import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Reactotron from 'reactotron-react-native'
import './ReactotronConfig'


class RecentChatsScreen extends React.Component {
	render() {
		return 	<View>
    <Text>List of all contacts </Text>
    <Button onPress={() => this.props.navigation.navigate('Chat', { user: 'lily' })} title="Chat with lily" />
  </View>;
	}
}

class Header extends React.Component {
	render() {
		return 	<View>
    <Text>this is header</Text>
  </View>;
	}
}


class AllContactsScreen extends React.Component {
	render() {
		return		<View>
			<Text>List of all contacts </Text>
			<Button onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })} title="Chat with Lucy" />
		</View>;
	}
}

class ChatScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Chat with Lucy',
  // };
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
	render() {
    const { params } = this.props.navigation.state;
		return (
			<View>
        <Text>Chat with {params.user}</Text>
        <Button onPress={() => this.props.navigation.navigate('All')} title="go all" />
			</View>
		);
	}
}

const MainScreenNavigator = TabNavigator({
	Recent: { screen: RecentChatsScreen },
	All: { screen: AllContactsScreen },
});

const SimpleApp = StackNavigator({
	Home: {
		screen: MainScreenNavigator,
		navigationOptions: {
			title: 'My Chats',
		},
	},
	Chat: { screen: ChatScreen },
});

console.tron.log(SimpleApp);
export default SimpleApp;
