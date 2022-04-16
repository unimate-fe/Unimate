import React, {FunctionComponent} from 'react';
import {
  Pressable as RNPressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props extends PressableProps {
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}

const Pressable: FunctionComponent<Props> = function Pressable({
  hitSlop,
  opacity,
  style,
  ...rest
}) {
  return (
    <RNPressable
      hitSlop={hitSlop ?? 8}
      style={({pressed}) => [
        pressed ? {opacity: opacity ?? 0.6} : undefined,
        style,
      ]}
      {...rest}
    />
  );
};

export default Pressable;
