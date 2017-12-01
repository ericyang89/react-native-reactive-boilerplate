// import React from "react";

import { TabNavigator, StackNavigator } from 'react-navigation';

import Chat from './Chat';
import AllContract from './AllContract';
import RecentChat from './RecentChat';
import PingPong from './PingPong';
import Counter from './Counter';

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChat },
  All: { screen: AllContract }
});

const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats'
    }
  },
  Counter: {
    screen: Counter
  },
  Ping: {
    screen: PingPong
  },
  Chat: { screen: Chat }
});

export default SimpleApp;
