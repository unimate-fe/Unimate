import React from 'react';
import {FunctionComponent} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {colors} from '@components/Styles/colors';
import Typo from '@components/Typo';
import {FeedbackType} from '@components/Input/types';
import {Icons} from '@assets/icons/_index';

interface InputProps extends TextInputProps {
  disabled?: boolean;
  onPress?: () => void;
  feedbackType?: FeedbackType;
  feedbackText?: string;
}

const Input: FunctionComponent<InputProps> = function Button({
  disabled,
  onPress,
  feedbackText,
  feedbackType,
  style,
  ...rest
}) {
  // input 랜더링
  const renderInput = (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        {...rest}
        placeholderTextColor={colors.GREY2}
      />
      <Image style={styles.iconWrapper} source={Icons.SEARCH} />
    </View>
  );

  // feedback 랜더링
  const renderFeedback = () => {
    return feedbackType ? (
      <Typo
        style={[
          styles.feedback,
          feedbackType === 'verified' ? styles.verified : styles.error,
        ]}
        type={'Body2'}>
        {feedbackText}
      </Typo>
    ) : null;
  };

  return onPress ? (
    <View style={[styles.base, style]}>
      {renderInput}
      {renderFeedback}
    </View>
  ) : (
    <Pressable style={[styles.base, style]}>
      {renderInput}
      {renderFeedback}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    width: '100%',
  },
  inputContainer: {
    backgroundColor: colors.LIGHT_GREY1,
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
