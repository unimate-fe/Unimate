import React from 'react';
import {FunctionComponent} from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {getLabelStyle, getStyle} from '@components/Button/utils';
import {ButtonType} from '@components/Button/types';
import Typo from '@components/Typo';

interface ButtonProps {
  type: ButtonType;
  label: string;
  onPress: () => void;
  disabled?: boolean;
  // Pressable style
  style?: StyleProp<ViewStyle>;
  // View style
  contentStyle?: StyleProp<ViewStyle>;
  // Text style
  typoStyle?: StyleProp<TextStyle>;
}

const Button: FunctionComponent<ButtonProps> = function Button({
  type,
  label,
  onPress,
  disabled,
  style,
  contentStyle,
  typoStyle,
}) {
  return (
    <Pressable
      style={({pressed}) => [pressed ? {opacity: 0.6} : undefined, style]}
      onPress={onPress}>
      <View style={[styles.contents, getStyle(type), contentStyle]}>
        <Typo
          type={'Button1'}
          style={[getLabelStyle(type, disabled), typoStyle]}>
          {label}
        </Typo>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contents: {
    flexDirection: 'row',
  },
});

export default Button;
