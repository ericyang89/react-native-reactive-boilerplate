import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { ImmutableVirtualizedList } from 'react-native-immutable-list-view';
import ListItem from './ListItem';
// import im from ''

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 50,
    backgroundColor: 'blue'
  }
});
const pageSize = 20;

class ContentList extends PureComponent {
  onRefreshHandle = () => {
    this.props.onRefresh(this.props.id);
  };
  onLoadHandle = () => {
    const list = this.props.postList;
    const lastPost = list.get(-1);
    if (list.size > 0 && list.size % pageSize === 0)
      this.props.onLoad(this.props.id, lastPost && lastPost.get('id'));
  };
  render() {
    const { postList } = this.props || {};
    return (
      <View style={styles.view}>
        <ImmutableVirtualizedList
          refreshing={false}
          onRefresh={this.onRefreshHandle}
          onEndReachedThreshold={50}
          onEndReached={this.onLoadHandle}
          immutableData={postList}
          keyExtractor={item => `${item.get('pid')}-${item.get('id')}`}
          renderItem={({ item }) => <ListItem postMap={item} />}
        />
      </View>
    );
  }
}

ContentList.propsType = {
  // tag的id
  id: PropTypes.string,
  postList: ImmutablePropTypes.List,
  onRefresh: PropTypes.func,
  onLoad: PropTypes.func
};

export default ContentList;
