import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { connect } from 'react-redux';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import ContentList from './ContentList';

class Index extends React.Component {
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

// const mapStateToProps = state => ({ number: state && state.counter.number });

// export default connect(mapStateToProps)(Ping);

export default Index;
