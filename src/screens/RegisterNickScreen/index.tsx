import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import SafeContainer from '@components/SafeContainer';
import {colors} from '@components/Styles/colors';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {FeedbackType} from '@components/Input/types';
import useRegisterStore from '@src/hooks/useRegisterStore';
import {useMutation} from 'react-query';
import {checkDuplicateNickname} from '@src/apis/registerApis';
import AppError from '@src/apis/error';

const RegisterNickScreen: FunctionComponent = function RegisterNickScreen() {
  const navigation = useScreenNavigation();

  const [nick, setNick] = useState<string>('');
  const [nickValidationStart, setNickValidationStart] = useState(false);
  const [nickValidation, setNickValidation] = useState(false);
  const [nickFeedbackText, setNickFeedbackText] = useState<string>();
  const [nickFeedbackType, setNickFeedbackType] = useState<FeedbackType>();

  const {mutate: checkNick} = useMutation(
    ['checkDuplicateNickName'],
    checkDuplicateNickname,
    {
      onSuccess: () => {
        setNickFeedbackText('사용 가능해요 :)');
        setNickFeedbackType('verified');
        setNickValidation(true);
      },
      onError: (e: AppError) => {
        console.log(e.message);
        setNickFeedbackType('error');
        setNickValidation(false);
        if (
          e.message ===
          'Nickname must be not less than 2 characters but not more than 10 characters'
        ) {
          setNickFeedbackText('4~14자의 영문 대소문자, 숫자만 사용 가능해요.');
        } else if (e.message === 'Duplicated nickname') {
          setNickFeedbackText('이미 사용중인 닉네임이에요.');
        }
      },
    },
  );

  const {saveNickName} = useRegisterStore();

  const checkHandler = () => {
    setNickValidationStart(true);
    checkNick(nick);
  };

  const submitHandler = () => {
    if (nickValidation) {
      saveNickName(nick);
      navigation.navigate('RegisterMbti');
    }
  };

  // nick validation
  useEffect(() => {
    if (!nickValidationStart) {
      setNickValidation(false);
      setNickFeedbackText(undefined);
      setNickFeedbackType(undefined);
    }
  }, [nickValidationStart]);

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
