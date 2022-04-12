import React from 'react';
import {FunctionComponent} from 'react';
import {StyleProp, StyleSheet, Text, TextProps} from 'react-native';
import {typos, TypoType} from '../Typo/type';
import {colors} from '../@styles/colors';

interface TypoProps extends TextProps {
  type: TypoType;
  style?: StyleProp<TextProps>;
}

const Typo: FunctionComponent<TypoProps> = function Typo({
  type,
  style,
  ...rest
}) {
  return (
    <Text
      style={[type ? typos[type] : undefined, styles.text, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.BLACK,
  },
});

export default Typo;
