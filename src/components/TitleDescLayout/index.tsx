import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Typo from '@components/Typo';
import {colors} from '@components/Styles/colors';

interface Props {
  title: string;
  desc?: string;
  option?: string;
}
const TitleDescLayout: FunctionComponent<Props> = function TitleDescLayout({
  title,
  desc,
  option,
  children,
}) {
  return (
    <View style={styles.base}>
      <View style={styles.titleContainer}>
        <View style={styles.optionContainer}>
          <Typo type={'H2'}>{title}</Typo>
          <Typo type={'Body2'}>{option}</Typo>
        </View>
        <Typo type={'Body2'} style={styles.desc}>
          {desc}
        </Typo>
      </View>
      {children}
    </View>
  );
};
export default TitleDescLayout;

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 48,
  },
  optionContainer: {
    flexDirection: 'row',
  },
  desc: {
    color: colors.GREY3,
  },
});
