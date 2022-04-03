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
import {ButtonType} from '../../../src/components/Button/types';
import {getLabelStyle, getStyle} from '../../../src/components/Button/utils';
import Typo from '../../../src/components/Typo';

interface ButtonProps {
  type: ButtonType;
  label: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  typoStyle?: StyleProp<TextStyle>;
}

const Button: FunctionComponent<ButtonProps> = function Button({
  type,
  label,
  disabled,
  style,
  contentStyle,
  typoStyle,
}) {
  return (
    <Pressable
      style={({pressed}) => [pressed ? {opacity: 0.6} : undefined, style]}>
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
