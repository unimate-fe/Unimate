import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import {colors} from '@components/Styles/colors';
import InputView from '@components/Input';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {FeedbackType} from '@components/Input/types';
import {testEmail} from '@src/utils';
import {useRegister} from '@hooks/api/useRegisterApi';
import useRegisterStore from '@hooks/useRegisterStore';

interface Props {}

const RegisterEmailScreen: FunctionComponent<Props> =
  function RegisterEmailScreen() {
    const navigation = useScreenNavigation();
    const [email, setEmail] = useState<string>();
    const [emailValidStart, setEmailValidStart] = useState<boolean>(false);
    const [emailFeedbackText, setEmailFeedbackText] = useState<string>();
    const [emailFeedbackType, setEmailFeedbackType] = useState<FeedbackType>();

    const [apiStart, setApiStart] = useState(false);

    const {
      username,
      password,
      university,
      college,
      major,
      use_agree,
      information_agree,
    } = useRegisterStore();

    const {mutate: register, data: response, isSuccess} = useRegister(apiStart);

    const submitHandler = () => {
      if (!testEmail(email) || email?.length === 0) {
        setEmailFeedbackText('이메일 형식이 올바르지 않아요.');
        setEmailFeedbackType('error');
      } else {
        if (username && email && password && university && college && major) {
          setApiStart(true);
          register({
            username,
            email,
            password,
            university,
            college,
            major,
            use_agree,
            information_agree,
          });
        }
      }
    };

    useEffect(() => {
      if (isSuccess) {
        if (response === '사용자의 email은/는 이미 존재합니다.') {
          setEmailFeedbackText('이미 사용 중인 이메일이에요.');
          setEmailFeedbackType('error');
        } else {
          setEmailFeedbackText(undefined);
          setEmailFeedbackType(undefined);
          navigation.navigate('RegisterPhone');
        }
      }
      if (!emailValidStart) {
        setEmailFeedbackText(undefined);
        setEmailFeedbackType(undefined);
      }
    }, [isSuccess, response, emailValidStart, navigation]);

    return (
      <SafeContainer>
        <View style={styles.base}>
          <Typo
            style={styles.mainText}
            type={'H2'}>{`이메일을 입력해 주세요.`}</Typo>
          <Typo type={'Body2'} style={styles.descText}>
            {
              '아이디 찾기에 활용되는 이메일로,\n실제 사용 중인 이메일을 입력해 주세요.'
            }
          </Typo>
          <InputView
            value={email}
            onChangeText={value => {
              setEmail(value);
              setEmailValidStart(false);
            }}
            style={styles.input}
            placeholder={'이메일'}
            feedbackText={emailFeedbackText}
            feedbackType={emailFeedbackType}
          />
          <Button type={'Solid-Long'} label={'확인'} onPress={submitHandler} />
        </View>
      </SafeContainer>
    );
  };
export default RegisterEmailScreen;

const styles = StyleSheet.create({
  base: {
    paddingTop: 28,
    paddingHorizontal: 30,
  },
  mainText: {
    color: colors.DARK_GREY4,
    marginBottom: 10,
  },
  descText: {
    color: colors.GREY3,
    marginBottom: 48,
  },
  input: {
    marginBottom: 44,
  },
});
