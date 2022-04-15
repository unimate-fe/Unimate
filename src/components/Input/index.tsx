import React from 'react';
import {FunctionComponent} from 'react';
import {Image, StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {colors} from '@components/Styles/colors';
import Typo from '@components/Typo';
import {FeedbackType} from '@components/Input/types';
import {Icons} from '@assets/icons/_index';

interface InputProps extends TextInputProps {
  feedbackType?: FeedbackType;
  feedbackText?: string;
}

const Input: FunctionComponent<InputProps> = function Button({
  feedbackText,
  feedbackType,
  ...rest
}) {
  return (
    <View style={styles.base}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          {...rest}
          placeholderTextColor={colors.GREY2}
        />
        <Image style={styles.iconWrapper} source={Icons.SEARCH} />
      </View>
      {feedbackText && (
        <Typo
          style={[
            styles.feedback,
            feedbackType === 'verified' ? styles.verified : styles.error,
          ]}
          type={'Body2'}>
          {feedbackText}
        </Typo>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {},
  inputContainer: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.DARK_GREY3,
    paddingVertical: 20,
    paddingHorizontal: 24,
    paddingRight: 52,
    flex: 1,
  },
  iconWrapper: {
    position: 'absolute',
    right: 16,
    width: 24,
    height: 24,
  },
  feedback: {
    marginTop: 8,
  },
  verified: {
    color: `${colors.PRIMARY.NORMAL}`,
  },
  error: {
    color: `${colors.ERROR}`,
  },
});

export default Input;
