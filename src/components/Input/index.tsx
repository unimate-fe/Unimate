import React from 'react';
import {FunctionComponent} from 'react';
import {Image, StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {colors} from '@components/Styles/colors';
import Typo from '@components/Typo';
import {FeedbackType} from '@components/Input/types';
import {Icons} from '@assets/icons';
import Pressable from '@components/Pressable';

interface InputViewProps extends TextInputProps {
  disabled?: boolean;
  onPress?: () => void;
  value?: string;
  boxPlaceHolder?: string;
  feedbackType?: FeedbackType;
  feedbackText?: string;
  icon?: string;
  search?: boolean;
}

const InputView: FunctionComponent<InputViewProps> = function InputView({
  disabled,
  onPress,
  value,
  boxPlaceHolder,
  feedbackText,
  feedbackType,
  icon,
  search = false,
  style,
  ...rest
}) {
  // input 랜더링
  const renderInput = () => {
    return (
      <View style={[styles.inputContainer, style]}>
        <TextInput
          style={styles.input}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          {...rest}
          placeholderTextColor={colors.GREY2}
        />
        {icon && <View style={styles.iconWrapper}>{icon}</View>}
        {search && (
          <View style={styles.iconWrapper}>
            <Image style={styles.searchIcon} source={Icons.SEARCH} />
          </View>
        )}
      </View>
    );
  };

  const renderBox = () => {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Typo
            type={'Body1'}
            style={!value ? {color: colors.GREY2} : {color: colors.DARK_GREY4}}>
            {value ? value : boxPlaceHolder}
          </Typo>
        </View>
        <Image style={styles.iconWrapper} source={Icons.SEARCH} />
      </View>
    );
  };

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

  return !onPress ? (
    <View style={[styles.base, style]}>
      {renderInput()}
      {renderFeedback()}
    </View>
  ) : (
    <Pressable onPress={onPress} style={[styles.base, style]}>
      {renderBox()}
      {renderFeedback()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 56,
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
    height: 56,
    justifyContent: 'center',
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
  searchIcon: {
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

export default InputView;
