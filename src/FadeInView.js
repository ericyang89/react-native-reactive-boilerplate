import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0) // 透明度初始值设为0
    };
  }

  componentDidMount() {
    Animated.timing(
      // 随时间变化而执行的动画类型
      this.state.fadeAnim,
      {
        // 动画中的变量值
        toValue: 1 // 透明度最终变为1，即完全不透明
      }
    ).start(); // 开始执行动画
  }
  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
