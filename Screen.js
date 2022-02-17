import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import {View, Button, Text} from 'react-native';
import React, {useState} from 'react';

export default function AnimatedStyleUpdateExample(props) {
  const [isVisible, setVisible] = useState(true);
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[
          {width: 100, height: 80, backgroundColor: 'black', margin: 30},
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
          setVisible((v) => !v);
        }}
      />
      {isVisible && (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown}>
          <Text>Hello World!</Text>
        </Animated.View>
      )}
    </View>
  );
}
