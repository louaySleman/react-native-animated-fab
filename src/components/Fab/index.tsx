import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, View} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Fab = ({isVisible = true}) => {
  const animationController = useRef<Animated.Value>(
    new Animated.Value(0),
  ).current;
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const scale = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  useEffect(() => {
    Animated.timing(animationController, {
      duration: 150,
      toValue: isVisible ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);
  return (
    <AnimatedPressable
      onPress={() => console.log('test')}
      style={[styles.fab, {transform: [{scale}]}]}>
      <AntDesign name={'plus'} style={styles.fabIcon} />
    </AnimatedPressable>
  );
};

export default Fab;
