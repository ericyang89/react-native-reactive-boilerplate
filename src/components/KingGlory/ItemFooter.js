import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  left: {
    flex: 1,
    flexDirection: 'row'
  },
  userName: {
    fontSize: 12,
    color: '#999',
    marginRight: 20
  },
  time: { fontSize: 12 },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  replyCount: { fontSize: 12 }
});

const Index = ({ userName = 'TODO:this is footer', time, replyCount }) => (
  <View style={styles.wrapper}>
    <View style={styles.left}>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
    <View style={styles.right}>
      <Text style={styles.replyCount}>回复：{replyCount}</Text>
    </View>
  </View>
);
Index.propsType = {
  userName: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  replyCount: PropTypes.number.isRequired
};

export default Index;
