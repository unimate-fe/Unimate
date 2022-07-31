import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import {FeedbackType} from '@components/Input/types';
import useScreenNavigation from '@hooks/useScreenNavigation';
import useRegisterStore from '@hooks/useRegisterStore';
import {testPwd} from '@src/utils';
import {checkDuplicateId, checkDuplicatePwd} from '@src/apis/registerApis';
import {useMutation} from 'react-query';
import AppError from '@src/apis/error';

const RegisterIdPwdScreen: FunctionComponent = function RegisterIdPwdScreen() {
  const navigation = useScreenNavigation();
  // id
  const [id, setId] = useState<string>('');
  const [idValidation, setIdValidation] = useState(false);
  const [idValidationStart, setIdValidationStart] = useState(false);
  const [idFeedbackType, setIdFeedbackType] = useState<FeedbackType>();
  const [idFeedbackText, setIdFeedbackText] = useState<string>();
  // password
  const [pwd, setPwd] = useState<string>('');
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
  const [confirmPwdValidation, setConfirmPwdValidation] =
    useState<boolean>(false);

  const {saveAccount} = useRegisterStore();

  const {mutate: checkId} = useMutation('idDuplicate', checkDuplicateId, {
    onSuccess: () => {
      setIdFeedbackText('사용 가능해요 :)');
      setIdFeedbackType('verified');
      setIdValidation(true);
    },
    onError: (e: AppError) => {
      if (e.message === 'Duplicated ID') {
        setIdFeedbackText('이미 사용중인 아이디에요.');
        setIdFeedbackType('error');
        setIdValidation(false);
      } else if (e.message === 'Invalid ID') {
        setIdFeedbackText('4~14자의 영문 대소문자, 숫자만 사용 가능해요.');
        setIdFeedbackType('error');
        setIdValidation(false);
      }
    },
  });

  const {mutate: checkPwd} = useMutation('pwdDuplicate', checkDuplicatePwd, {
    onSuccess: () => {
      setPwdFeedbackText(undefined);
      setPwdFeedbackType(undefined);
      setPwdValidation(true);
      setConfirmPwdValidation(true);
      saveAccount({
        username: id,
        password: pwd,
      });
      navigation.navigate('RegisterEmail');
    },
    onError: (e: AppError) => {
      if (e.message === 'INVALID_PASSWORD') {
        setPwdFeedbackText('영문 대소문자, 숫자 포함 8자 이상 입력해주세요.');
        setPwdFeedbackType('error');
        setConfirmPwdValidation(false);
      } else if (e.message === 'INCORRECT_PASSWORD') {
        setPwdFeedbackText('비밀번호가 일치하지 않아요.');
        setPwdFeedbackType('error');
        setConfirmPwdValidation(false);
      }
    },
  });

  const checkHandler = () => {
    setIdValidationStart(true);
    checkId(id);
  };

  const submitHandler = () => {
    if (!(confirmPwdValidation && pwdValidation)) {
      setPwdValidationStart(true);
      setPwdValidation(testPwd(pwd));
    }
    if (pwd && confirmPwd) {
      checkPwd({pw1: pwd, pw2: confirmPwd});
    }
  };

  // id validation
  useEffect(() => {
    if (!idValidationStart) {
      setIdValidation(false);
      setIdFeedbackText(undefined);
      setIdFeedbackType(undefined);
    }
  }, [idValidationStart]);

  // pw validation
  useEffect(() => {
    if (pwdValidationStart) {
      if (!testPwd(pwd)) {
        setPwdFeedbackText('영문 대소문자, 숫자 포함 8자 이상 입력해주세요.');
        setPwdFeedbackType('error');
        setPwdValidation(false);
      } else {
        setPwdFeedbackText(undefined);
        setPwdFeedbackType(undefined);
        setPwdValidation(true);
        if (pwd !== confirmPwd) {
          setConfirmPwdFeedbackText('비밀번호가 일치하지 않아요ㅜㅜ');
          setConfirmPwdFeedbackType('error');
          setConfirmPwdValidation(false);
        } else if (pwd === confirmPwd) {
          setConfirmPwdFeedbackText(undefined);
          setConfirmPwdFeedbackType(undefined);
          setConfirmPwdValidation(true);
        }
      }
    } else {
      setPwdValidationStart(false);
      setConfirmPwdFeedbackText(undefined);
      setConfirmPwdFeedbackType(undefined);
    }
  }, [pwdValidationStart, pwd, confirmPwd, checkPwd]);

  return (
    <SafeContainer>
      <View style={styles.base}>
        <Typo style={styles.mainText} type={'H2'}>
          {'회원정보를\n입력해 주세요.'}
        </Typo>
        <InputView
          value={id}
          onChangeText={value => {
            setId(value);
            setIdValidationStart(false);
          }}
          feedbackText={idFeedbackText}
          feedbackType={idFeedbackType}
          style={{marginBottom: 14}}
          placeholder={'아이디'}>
          <Button
            type={'Solid-Short-Confirm'}
            label={'중복 확인'}
            onPress={checkHandler}
          />
        </InputView>
        <InputView
          value={pwd}
          onChangeText={setPwd}
          feedbackType={pwdFeedbackType}
          feedbackText={pwdFeedbackText}
          style={{marginBottom: 14}}
          placeholder={'새 비밀번호'}
          secureTextEntry
        />
        <InputView
          value={confirmPwd}
          onChangeText={setConfirmPwd}
          feedbackType={confirmPwdFeedbackType}
          feedbackText={confirmPwdFeedbackText}
          placeholder={'새 비밀번호 확인'}
          secureTextEntry
        />
        <Button
          style={styles.lastBtn}
          type={'Solid-Long'}
          label={'다음'}
          disabled={!idValidation}
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
  lastBtn: {
    marginTop: 44,
  },
});
