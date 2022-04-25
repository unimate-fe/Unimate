import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import SafeContainer from '@components/SafeContainer';
import {colors} from '@components/Styles/colors';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {FeedbackType} from '@components/Input/types';

interface Props {}

const RegisterNickScreen: FunctionComponent<Props> =
  function RegisterNickScreen() {
    const navigation = useScreenNavigation();
    const [nick, setNick] = useState<string>('');

    const [nickValidationStart, setNickValidationStart] = useState(false);
    const [nickValidation, setNickValidation] = useState(false);
    const [nickFeedbackText, setNickFeedbackText] = useState<string>();
    const [nickFeedbackType, setNickFeedbackType] = useState<FeedbackType>();

    const checkHandler = () => {
      setNickValidationStart(true);
      if (nick === 'ADMIN') setNickValidation(true);
    };

    useEffect(() => {
      if (nickValidationStart) {
        if (nick.length < 2) {
          setNickFeedbackText('닉네임은 두 글자 이상 입력해주세요.');
          setNickFeedbackType('error');
        } else if (nick === 'ADMIN') {
          setNickFeedbackText(undefined);
          setNickFeedbackType(undefined);
        } else {
          setNickFeedbackText('이미 사용 중인 닉네임입니다.');
          setNickFeedbackType('error');
        }
      }
    }, [nick, nickValidationStart]);

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
            // TODO : 테스트용 스킵
            // disabled={!nickValidation}
            onPress={() => {}}
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
