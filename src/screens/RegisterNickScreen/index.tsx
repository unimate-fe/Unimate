import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import SafeContainer from '@components/SafeContainer';
import {colors} from '@components/Styles/colors';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {FeedbackType} from '@components/Input/types';
import {useCheckDuplicateId} from '@src/hooks/api/useRegisterApi';
import useRegisterStore from '@src/hooks/useRegisterStore';

const RegisterNickScreen: FunctionComponent = function RegisterNickScreen() {
  const navigation = useScreenNavigation();

  const [nick, setNick] = useState<string>('');
  const [nickValidationStart, setNickValidationStart] = useState(false);
  const [nickValidation, setNickValidation] = useState(false);
  const [nickFeedbackText, setNickFeedbackText] = useState<string>();
  const [nickFeedbackType, setNickFeedbackType] = useState<FeedbackType>();

  const {mutate, isSuccess, isError, data: response} = useCheckDuplicateId();

  const {saveNickName} = useRegisterStore();

  const checkHandler = () => {
    setNickValidationStart(true);
    mutate(nick);
  };

  const submitHandler = () => {
    saveNickName(nick);
    navigation.navigate('RegisterMbti');
  };

  // id validation
  useEffect(() => {
    if (isSuccess) {
      setNickFeedbackText('사용 가능해요 :)');
      setNickFeedbackType('verified');
      setNickValidation(true);
    }
    if (isError) {
      if (response === 'Duplicated nickname') {
        setNickFeedbackText('이미 사용중인 닉네임이에요.');
        setNickFeedbackType('error');
        setNickValidation(false);
      } else {
        setNickFeedbackText('4~14자의 영문 대소문자, 숫자만 사용 가능해요.');
        setNickFeedbackType('error');
        setNickValidation(false);
      }
    }
    if (!nickValidationStart) {
      setNickValidation(false);
      setNickFeedbackText(undefined);
      setNickFeedbackType(undefined);
    }
  }, [isSuccess, isError, response, nickValidationStart]);

  return (
    <SafeContainer>
      <View style={styles.base}>
        <Typo style={styles.mainText} type={'H2'}>
          {'닉네임을 지어주세요.'}
        </Typo>
        <View style={styles.inputContainer}>
          <InputView
            value={nick}
            onChangeText={value => {
              setNick(value);
              setNickValidationStart(false);
            }}
            style={styles.input}
            placeholder={'닉네임'}
            feedbackText={nickFeedbackText}
            feedbackType={nickFeedbackType}
          />
          <Button
            type={'Solid-Short-Confirm'}
            label={'중복 확인'}
            onPress={checkHandler}
          />
        </View>
        <Button
          type={'Solid-Long'}
          label={'확인'}
          disabled={!nickValidation}
          onPress={submitHandler}
        />
      </View>
    </SafeContainer>
  );
};
export default RegisterNickScreen;

const styles = StyleSheet.create({
  base: {
    paddingTop: 28,
    paddingHorizontal: 30,
  },
  mainText: {
    color: colors.DARK_GREY4,
    marginBottom: 48,
  },
  input: {
    marginBottom: 44,
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
