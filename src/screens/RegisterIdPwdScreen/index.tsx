import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import {FeedbackType} from '@components/Input/types';
interface Props {}
const RegisterIdPwdScreen: FunctionComponent<Props> =
  function RegisterIdPwdScreen() {
    const [id, setId] = useState<string>();
    const [idValidation, setIdValidation] = useState(false);
    const [idValidationStart, setIdValidationStart] = useState(false);

    const checkHandler = () => {
      setIdValidationStart(true);
      if (id === 'admin') setIdValidation(true);
      else setIdValidation(false);
    };

    const idFeedbackTypeHandler = () => {
      if (idValidationStart) {
        if (idValidation) return 'error';
        return 'verified';
      }
    };

    const idFeedbackTextHandler = () => {
      if (idValidationStart) {
        if (idValidation) return '사용 가능해요 :)';
        return '이미 사용중인 아이디에요.';
      }
    };

    return (
      <SafeContainer>
        <View style={styles.base}>
          <Typo
            style={styles.mainText}
            type={'H2'}>{`회원정보를\n입력해 주세요.`}</Typo>
          <View style={styles.inputContainer}>
            <InputView
              // feedbackText={idFeedbackTextHandler}
              // feedbackType={idFeedbackTypeHandler}
              style={styles.input}
              placeholder={'아이디'}
            />
            <Button
              type={'Solid-Short-Confirm'}
              label={'중복 확인'}
              onPress={checkHandler}
            />
          </View>
          <InputView style={{marginBottom: 14}} placeholder={'새 비밀번호'} />
          <InputView placeholder={'새 비밀번호 확인'} />
          <Button
            style={styles.lastBtn}
            type={'Solid-Long'}
            label={'다음'}
            onPress={() => {}}
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
