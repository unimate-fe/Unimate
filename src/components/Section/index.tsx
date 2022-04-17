import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Typo from '@components/Typo';
import {colors} from '@components/Styles/colors';
import Pressable from '@components/Pressable';

interface Props {
  isFirstActive: boolean;
  label1: string;
  label2: string;
  activeFirst: () => void;
  activeSecond: () => void;
  style?: StyleProp<ViewStyle>;
}
const Section: FunctionComponent<Props> = function Section({
  isFirstActive = true,
  label1 = '아이디',
  label2 = '비밀번호',
  activeFirst,
  activeSecond,
  style,
}) {
  return (
    <View style={[styles.base, style]}>
      <Pressable
        style={[styles.section, isFirstActive && styles.active]}
        onPress={activeFirst}>
        <Typo
          type={'Subtitle2'}
          style={[styles.text, isFirstActive && styles.activeText]}>
          {label1}
        </Typo>
      </Pressable>
      <Pressable
        style={[styles.section, !isFirstActive && styles.active]}
        onPress={activeSecond}>
        <Typo
          type={'Subtitle2'}
          style={[styles.text, !isFirstActive && styles.activeText]}>
          {label2}
        </Typo>
      </Pressable>
    </View>
  );
};
export default Section;

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    height: 50,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.LIGHT_GREY2,
  },
  active: {
    borderBottomColor: colors.DARK_GREY4,
  },
  text: {
    color: colors.LIGHT_GREY3,
  },
  activeText: {
    color: colors.DARK_GREY4,
  },
});
