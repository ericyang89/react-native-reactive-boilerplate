// import React from "react";

import { TabNavigator, StackNavigator } from 'react-navigation';

import Chat from './Chat';
import AllContract from './AllContract';
import RecentChat from './RecentChat';
import PingPong from './PingPong';
import Counter from './Counter';
import KingGlory from './KingGlory';

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
  KingGlory: {
    screen: KingGlory,
    navigationOptions: {
      title: 'KingGlory'
    }
  },
  Chat: { screen: Chat }
});

export default SimpleApp;
