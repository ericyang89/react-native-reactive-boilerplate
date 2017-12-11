import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
// import PropTypes from 'prop-types';
import ImgList from './ImgList';
import ItemFooter from './ItemFooter';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  title: {
    fontSize: 16
  },
  content: { fontSize: 14 },
  imgList: {}
});

// replyCount:10
// time_format:10-31 12:26
// pid:888127551509424000
// poster:鱼吧用户
// time:1509424000
// isContainVideo:false
// isVote:false
// isDynamic:false
// title:是动态刚发发个安全无二套请问二群翁
// images:[] 0 items
// content:https://v.qq.com/x/cover/ssv8mu2z6yrfs3b/q0537d29w08.html
// id:87989
// isLottery:false

class ListItem extends PureComponent {
  render() {
    const post = this.props.postMap || {};
    // console.tron.log(post);
    // return (
    //   <View>
    //     <Text>12</Text>
    //   </View>
    // );
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{post.get('title')}</Text>
        <Text style={styles.content}>{post.get('content')}</Text>
        <ImgList />
        <ItemFooter />
      </View>
    );
  }
}

ListItem.propTypes = {
  postMap: ImmutablePropTypes.map.isRequired
};

export default ListItem;
