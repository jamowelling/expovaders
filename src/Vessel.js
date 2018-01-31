import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width * 0.95;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;

class Vessel extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY()

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // console.log('gesture: ', gesture);
        console.log('event: ', event.nativeEvent);
        const { moveX, moveY } = gesture;
        position.setValue({ x: moveX - 30 , y: moveY - 30 })
      },
      onPanResponderRelease: () => {},
      // onPanResponderRelease: (event, gesture) => {
      //   if (gesture.dx > SWIPE_THRESHOLD) {
      //     console.log('swipe right!');
      //   } else if(gesture.dx < -SWIPE_THRESHOLD) {
      //     console.log('swipe left!');
      //   } else {
      //     this.resetPosition();
      //   }
      // }
    });
    this.panResponder = panResponder;
    this.position = position;
  }
  resetPosition() {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }
  getCardStyle() {
    return {
      ...this.position.getLayout(),
    };
  }
  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0 ) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            { ...this.panResponder.panHandlers}
          >
            <View style={styles.vesselStyle}/>
          </Animated.View>
        )
      }
    });
  }
  render() {
    return (
      <View
      >
        {this.renderCards()}
      </View>
    );
  }
}

const styles = {
  vesselStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
  }
}

export default Vessel;
