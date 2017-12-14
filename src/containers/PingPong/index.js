import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { PING } from './const';

const ping = () => ({ type: PING });

class Ping extends React.Component {
  render() {
    return (
      <View>
        <Text>ping pong test </Text>
        <Text>is pinging: {this.props.isPinging.toString()}</Text>
        <Button
          onPress={() => this.props.dispatch(ping())}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isPinging: (state && state.getIn(['ping', 'isPinging'], false)) || false
});

export default connect(mapStateToProps)(Ping);

// export default Ping;
