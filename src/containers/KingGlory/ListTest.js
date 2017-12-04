import React from 'react';
import { StyleSheet, Text, View, FlatList, ListView } from 'react-native';

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
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(getData())
    };
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={item => <Text key={item.num}>{item.num}</Text>}
      />
    );
   /*  eslint-disable */
   return (
     <View style={styles.view}>
     <FlatList
     keyExtractor={(item, index) => `${index}111`}
     data={getData()}
     renderItem={({ item }) => <Text key={item.num}>{item.num}</Text>}
     />
     </View>
    );
    /*  eslint-enable */
  }
}

// const mapStateToProps = state => ({ number: state && state.counter.number });

// export default connect(mapStateToProps)(Ping);

export default ContentList;
