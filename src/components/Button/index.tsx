import React from 'react';
import {FunctionComponent} from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {getLabelStyle, getStyle} from '@components/Button/utils';
import {ButtonType} from '@components/Button/types';
import Typo from '@components/Typo';
import Pressable from '@components/Pressable';

interface ButtonProps {
  type: ButtonType;
  label: string;
  onPress: () => void;
  left?: Element;
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
  left,
  disabled,
  style,
  contentStyle,
  typoStyle,
}) {
  return (
    <Pressable style={style} onPress={onPress} disabled={disabled}>
      <View style={[styles.contents, getStyle(type), contentStyle]}>
        {left && left}
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
    paddingVertical: 20,
  },
});

export default Button;
