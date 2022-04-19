import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import {FeedbackType} from '@components/Input/types';
import {testPwd} from '@screens/RegisterIdPwdScreen/utils';

interface Props {}
const RegisterIdPwdScreen: FunctionComponent<Props> =
  function RegisterIdPwdScreen() {
    // id
    const [id, setId] = useState<string>('');
    const [idValidation, setIdValidation] = useState(false);
    const [idValidationStart, setIdValidationStart] = useState(false);
    const [idFeedbackType, setIdFeedbackType] = useState<FeedbackType>();
    const [idFeedbackText, setIdFeedbackText] = useState<string>();
    // password
    const [pwd, setPwd] = useState<string>();
    const [pwdValidationStart, setPwdValidationStart] = useState(false);
    const [pwdValidation, setPwdValidation] = useState(false);
    const [pwdFeedbackType, setPwdFeedbackType] = useState<FeedbackType>();
    const [pwdFeedbackText, setPwdFeedbackText] = useState<string>();
    // confirm password
    const [confirmPwd, setConfirmPwd] = useState<string>();
    const [confirmPwdFeedbackType, setConfirmPwdFeedbackType] =
      useState<FeedbackType>();
    const [confirmPwdFeedbackText, setConfirmPwdFeedbackText] =
      useState<string>();

    const checkHandler = () => {
      setIdValidationStart(true);
      if (id === 'admin') {
        setIdValidation(true);
      } else setIdValidation(false);
    };

    const submitHandler = () => {
      setPwdValidationStart(true);
      setPwdValidation(testPwd(pwd));
    };

    // id validation
    useEffect(() => {
      if (idValidationStart) {
        if (idValidation) {
          setIdFeedbackText('사용 가능해요 :)');
          setIdFeedbackType('verified');
        } else if (id.length === 0) {
          setIdFeedbackText('유효한 아이디를 입력해주세요.');
          setIdFeedbackType('error');
        } else {
          setIdFeedbackText('이미 사용 중인 아이디에요.');
          setIdFeedbackType('error');
        }
      } else {
        setIdFeedbackText(undefined);
        setIdFeedbackType(undefined);
      }
    }, [idValidationStart, idValidation, id]);

    useEffect(() => {
      if (pwdValidationStart) {
        setPwdValidation(testPwd(pwd));
        if (!pwdValidation) {
          setPwdFeedbackText('영문 대소문자, 숫자 포함 8자 이상 입력해주세요.');
          setPwdFeedbackType('error');
        } else {
          setPwdFeedbackText(undefined);
          setPwdFeedbackType(undefined);
          if (pwd !== confirmPwd) {
            setConfirmPwdFeedbackText('비밀번호가 일치하지 않아요ㅜㅜ');
            setConfirmPwdFeedbackType('error');
          }
          if (pwd === confirmPwd) {
            setConfirmPwdFeedbackText(undefined);
            setConfirmPwdFeedbackType(undefined);
          }
        }
      }
    }, [pwdValidationStart, pwdValidation, pwd, confirmPwd]);

    return (
      <SafeContainer>
        <View style={styles.base}>
          <Typo
            style={styles.mainText}
            type={'H2'}>{`회원정보를\n입력해 주세요.`}</Typo>
          <View style={styles.inputContainer}>
            <InputView
              value={id}
              onChangeText={value => {
                setId(value);
                setIdValidationStart(false);
              }}
              feedbackText={idFeedbackText}
              feedbackType={idFeedbackType}
              style={styles.input}
              placeholder={'아이디'}
            />
            <Button
              type={'Solid-Short-Confirm'}
              label={'중복 확인'}
              onPress={checkHandler}
            />
          </View>
          <InputView
            value={pwd}
            onChangeText={setPwd}
            feedbackType={pwdFeedbackType}
            feedbackText={pwdFeedbackText}
            style={{marginBottom: 14}}
            placeholder={'새 비밀번호'}
          />
          <InputView
            value={confirmPwd}
            onChangeText={setConfirmPwd}
            feedbackType={confirmPwdFeedbackType}
            feedbackText={confirmPwdFeedbackText}
            placeholder={'새 비밀번호 확인'}
          />
          <Button
            style={styles.lastBtn}
            type={'Solid-Long'}
            label={'다음'}
            disabled={id && pwd && confirmPwd ? false : true}
            onPress={submitHandler}
          />
        </View>
      </SafeContainer>
    );
  };
export default RegisterIdPwdScreen;

const styles = StyleSheet.create({
  base: {
    paddingTop: 28,
    paddingHorizontal: 30,
  },
  mainText: {
    color: colors.DARK_GREY4,
    marginBottom: 44,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 22,
  },
  lastBtn: {
    marginTop: 44,
  },
});
