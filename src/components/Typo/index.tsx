import React from 'react';
import {FunctionComponent} from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {typos, TypoType} from '@components/Typo/type';
import {colors} from '@components/Styles/colors';

interface TypoProps extends TextProps {
  type: TypoType;
  style?: StyleProp<TextStyle>;
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
    color: colors.DARK_GREY4,
  },
});

export default Typo;
