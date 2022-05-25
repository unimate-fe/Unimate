import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import {FeedbackType} from '@components/Input/types';
import useScreenNavigation from '@hooks/useScreenNavigation';

interface Props {}

const RegisterPhoneScreen: FunctionComponent<Props> =
  function RegisterPhoneScreen() {
    const navigation = useScreenNavigation();
    // request phone
    const [phone, setPhone] = useState<string>('');
    const [phoneValidation, setPhoneValidation] = useState(false);
    const [phoneFeedbackText, setPhoneFeedbackText] = useState<string>();
    const [phoneFeedbackType, setPhoneFeedbackType] = useState<FeedbackType>();

    const [cNum, setCNum] = useState<string>();
    const [cNumFeedbackText, setCNumFeedbackText] = useState<string>();
    const [cNumFeedbackType, setCNumFeedbackType] = useState<FeedbackType>();

    const checkHandler = () => {
      if (phone.replace(/-/gi, '') === '01012345678') {
        setPhoneValidation(true);
        setPhoneFeedbackText('인증번호가 전송되었습니다.');
        setPhoneFeedbackType('verified');
      } else {
        setPhoneValidation(false);
        setPhoneFeedbackText('올바른 휴대폰 번호가 아닙니다.');
        setPhoneFeedbackType('error');
      }
    };

    const submitHandler = () => {
      if (cNum === '1234') {
        setCNumFeedbackText('인증되었습니다.');
        setCNumFeedbackType('verified');
        // TODO 테스트용 스킵
        setTimeout(() => {
          Alert.alert('인증되었습니다.');
          navigation.navigate('RegisterNick');
        }, 1000);
      } else {
        setCNumFeedbackText('인증번호가 올바르지 않습니다.');
        setCNumFeedbackType('error');
      }
    };

    useEffect(() => {
      if (phone.length === 10)
        setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      if (phone.length === 13) {
        setPhone(phone);
        setPhone(
          phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
        );
      }
    }, [phone]);

    return (
      <SafeContainer>
        <View style={styles.base}>
          <Typo style={styles.mainText} type={'H2'}>
            {`번호를 입력해 주세요.`}
          </Typo>
          <View style={styles.inputContainer}>
            <InputView
              value={phone}
              defaultValue={phone}
              onChangeText={setPhone}
              style={styles.input}
              placeholder={'휴대폰 번호'}
              feedbackText={phoneFeedbackText}
              feedbackType={phoneFeedbackType}
            />
            <Button
              type={'Solid-Short-Confirm'}
              label={'인증 받기'}
              onPress={checkHandler}
            />
          </View>
          <InputView
            style={styles.lastInput}
            value={cNum}
            onChangeText={setCNum}
            placeholder={'인증번호 4자리'}
            feedbackText={cNumFeedbackText}
            feedbackType={cNumFeedbackType}
          />
          <Button
            type={'Solid-Long'}
            label={'확인'}
            onPress={submitHandler}
            disabled={!phoneValidation}
          />
        </View>
      </SafeContainer>
    );
  };
export default RegisterPhoneScreen;

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
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 14,
  },
  lastInput: {
    marginBottom: 44,
  },
});
