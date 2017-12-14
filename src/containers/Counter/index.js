import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { PLUS } from './const';

const add = () => ({ type: PLUS });

class Ping extends React.Component {
  render() {
    return (
      <View>
        <Text>counter test </Text>
        <Text>is pinging: {this.props.number.toString()}</Text>
        <Button onPress={() => this.props.dispatch(add())} title="plus" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  number: (state && state.getIn(['counter', 'number'], 0)) || 0
});

export default connect(mapStateToProps)(Ping);

// export default Ping;
