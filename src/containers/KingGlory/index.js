import React from 'react';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import ContentList from './../../components/KingGlory/ContentList';
import { loadTopic, loadPost, addPost } from './reducer';
import EmptyPage from './../../components/EmptyPage';

class Index extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(loadTopic());
  }
  onViewRefreshHandle = tag => {
    const param = { id: tag, lastId: '' };
    this.props.dispatch(loadPost(param));
  };
  onViewLoadHandle = (tag, lastId) => {
    const param = { id: tag, lastId };
    this.props.dispatch(addPost(param));
  };
  render() {
    const tag = this.props.topic;
    if (!tag || tag.size < 1) {
      return <EmptyPage />;
    }

    // ScrollableTabView 外面嵌套view会导致问题，后续要查一下
    return (
      <ScrollableTabView
        style={{ flex: 1 }}
        renderTabBar={() => <DefaultTabBar />}
      >
        {tag.map(item => (
          // <Text>12</Text>
          <ContentList
            key={item.get('id')}
            id={item.get('id')}
            postList={item.get('post')}
            tabLabel={item.get('name')}
            onRefresh={this.onViewRefreshHandle}
            onLoad={this.onViewLoadHandle}
          />
        ))}
      </ScrollableTabView>
    );
  }
}

const mapStateToProps = state => ({
  topic: state && state.get && state.get('kingGlory').get('topic')
});

export default connect(mapStateToProps)(Index);

// export default Index;
