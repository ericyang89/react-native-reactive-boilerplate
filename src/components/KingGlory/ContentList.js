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
    backgroundColor: '#fff'
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 2,
    marginBottom: 2
  }
});

class ContentList extends PureComponent {
  onRefreshHandle = () => {
    this.props.onRefresh(this.props.id);
  };
  onLoadHandle = () => {
    const list = this.props.postList;
    const lastPost = list.get(-1);
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
          keyExtractor={(item, index) =>
            `${item.get('pid')}-${item.get('id')}-${index}`
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
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
