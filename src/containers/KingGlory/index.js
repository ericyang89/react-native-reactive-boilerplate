import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { connect } from 'react-redux';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import ContentList from './ContentList';
import { loadTopic } from './reducer';

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadTopic());
  }
  render() {
    // ScrollableTabView 外面嵌套view会导致问题，后续要查一下
    return (
      <ScrollableTabView
        style={{ flex: 1 }}
        renderTabBar={() => <DefaultTabBar />}
      >
        <ContentList tabLabel="tab 1" />
        <ContentList tabLabel="tab 2" />
        <ContentList tabLabel="tab 3" />
      </ScrollableTabView>
    );
  }
}

const mapStateToProps = state => ({
  topic: state && state.get('kingGlory').get('topic')
});

export default connect(mapStateToProps)(Index);

// export default Index;
