import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 50,
    backgroundColor: 'blue'
  }
});

class ContentList extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

// const mapStateToProps = state => ({ number: state && state.counter.number });

// export default connect(mapStateToProps)(Ping);

export default ContentList;
