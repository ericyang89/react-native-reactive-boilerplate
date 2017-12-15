import React from 'react';
import { /* Text, */ View, StyleSheet, Image } from 'react-native';
import { List } from 'immutable';

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

const Index = ({ imgList = List() }) => {
  if (imgList.size === 0) {
    return <View />;
  } else if (1 === imgList.size) {
    return (
      <View style={styles.wrapper}>
        {imgList.map(item => (
          <Image
            key={item}
            style={{ width: 100, height: 100, marginRight: 2 }}
            source={{ uri: item }}
          />
        )) || null}
      </View>
    );
  }
  // const imgCount = imgList.size;
  const showImgList = imgList.take(3);
  return (
    <View style={styles.wrapper}>
      {showImgList.map(item => (
        <Image
          key={item}
          style={{ width: 100, height: 100, marginRight: 2 }}
          source={{ uri: item }}
        />
      )) || null}
    </View>
  );
};

export default Index;
