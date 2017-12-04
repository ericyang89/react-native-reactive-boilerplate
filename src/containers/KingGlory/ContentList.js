import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import { connect } from 'react-redux';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 50,
    backgroundColor: 'blue'
  }
});

const getData = () =>
  Array.from(new Array(10000)).map((item, index) => ({
    num: index
  }));
class ContentList extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <FlatList
          keyExtractor={(item, index) => `${index}111`}
          data={getData()}
          renderItem={({ item }) => <Text key={item.num}>{item.num}</Text>}
        />
      </View>
    );
  }
}

// const mapStateToProps = state => ({ tag: state.kingGlory.tag });

// export default connect(mapStateToProps)(ContentList);

export default ContentList;
