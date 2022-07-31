import React, {
  FunctionComponent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import Toast from 'react-native-easy-toast';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import {FeedbackType} from '@components/Input/types';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {useMutation} from 'react-query';
import {
  checkAuthorizationNumber,
  getAuthorizationNumber,
} from '@src/apis/registerApis';
import AppError from '@src/apis/error';

const RegisterPhoneScreen: FunctionComponent = function RegisterPhoneScreen() {
  const navigation = useScreenNavigation();
  const toastRef = useRef<Toast>(null);

  const [phone, setPhone] = useState<string>('');
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [phoneFeedbackText, setPhoneFeedbackText] = useState<string>();
  const [phoneFeedbackType, setPhoneFeedbackType] = useState<FeedbackType>();
  const [cNum, setCNum] = useState<string>();
  const [submitValid, setSubmitValid] = useState(false);

  const {mutate: getAuth} = useMutation(
    ['getAuthNumber'],
    getAuthorizationNumber,
    {
      onSuccess: () => {
        setPhoneFeedbackText('인증번호가 전송되었어요.');
        setPhoneFeedbackType('verified');
        setPhoneValidation(true);
      },
      onError: (e: AppError) => {
        if (e.message === 'REGISTERED_NUMBER') {
          setPhoneFeedbackText('이미 존재하는 번호에요.');
          setPhoneFeedbackType('error');
          setPhoneValidation(false);
        }
      },
    },
  );

  const {mutate: checkAuth} = useMutation(
    ['checkAuthDuplicate'],
    checkAuthorizationNumber,
    {
      onSuccess: () => {
        navigation.navigate('RegisterNick');
      },
      onError: (e: AppError) => {
        if (e.message === 'INVALID_NUMBER') {
          toastRef?.current?.show('휴대폰 인증에 실패했어요.');
        }
      },
    },
  );

  useEffect(() => {
    if (phone.length === 10) {
      setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    } else if (phone.length === 13) {
      setPhone(phone);
      setPhone(
        phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
    }
  }, [phone]);

  useEffect(() => {
    if (cNum?.length === 6) {
      Keyboard.dismiss();
    }
    if (cNum?.length === 6 && phoneValidation) {
      setSubmitValid(true);
    } else {
      setSubmitValid(false);
    }
  }, [cNum, phoneValidation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: undefined,
    });
  }, [navigation]);

  return (
    <SafeContainer>
      <View style={styles.base}>
        <Typo style={styles.mainText} type={'H2'}>
          {'번호를 입력해 주세요.'}
        </Typo>
        <View style={styles.inputContainer}>
          <InputView
            value={phone}
            defaultValue={phone}
            onChangeText={value => {
              setPhoneValidation(false);
              setPhone(value);
            }}
            style={styles.input}
            placeholder={'휴대폰 번호'}
            feedbackText={phoneFeedbackText}
            feedbackType={phoneFeedbackType}
          />
          <Button
            type={'Solid-Short-Confirm'}
            label={'인증 받기'}
            onPress={() => getAuth(phone.replace(/-/g, ''))}
          />
        </View>
        <InputView
          disabled={!phoneValidation}
          style={styles.lastInput}
          value={cNum}
          onChangeText={setCNum}
          placeholder={'인증번호 6자리'}
          maxLength={6}
          keyboardType={'numeric'}
        />
        <Button
          type={'Solid-Long'}
          label={'확인'}
          onPress={() => checkAuth(cNum)}
          disabled={!submitValid}
        />
      </View>
      <Toast
        ref={toastRef}
        positionValue={200}
        fadeInDuration={400}
        fadeOutDuration={400}
      />
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
