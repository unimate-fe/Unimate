import React, {FunctionComponent} from 'react';
import {SafeAreaView, StyleSheet, ViewProps} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '@components/Styles/colors';

interface Props extends ViewProps {
  isKeyboard?: boolean;
}

const AppSafeContainer: FunctionComponent<Props> = function AppSafeContainer({
  isKeyboard = false,
  style,
  children,
}) {
  return isKeyboard === true ? (
    <KeyboardAwareScrollView style={[styles.base, style]}>
      {children}
    </KeyboardAwareScrollView>
  ) : (
    <SafeAreaView style={[styles.base, style]}>{children}</SafeAreaView>
  );
};
export default AppSafeContainer;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: colors.WHITE,
  },
});
