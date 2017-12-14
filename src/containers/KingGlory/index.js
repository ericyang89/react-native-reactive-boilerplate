import React from 'react';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import { List } from 'immutable';
import ContentList from './../../components/KingGlory/ContentList';
import { loadTopic, loadPost, addPost, changeTab } from './reducer';
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
  onChangeTabHandle = param => {
    const tabIndex = param.i;
    this.props.dispatch(changeTab(tabIndex));
  };
  render() {
    const tag = this.props.topic;
    if (tag.size < 1) {
      return <EmptyPage />;
    }

    // ScrollableTabView 外面嵌套view会导致问题，后续要查一下
    return (
      <ScrollableTabView
        style={{ flex: 1 }}
        renderTabBar={() => <DefaultTabBar />}
        onChangeTab={this.onChangeTabHandle}
      >
        {tag.map(item => (
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
  topic: (state && state.getIn(['kingGlory', 'topic'], List())) || List()
});

export default connect(mapStateToProps)(Index);

// export default Index;
