import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '@components/Styles/colors';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
interface Props {}

const PwdSection: FunctionComponent<Props> = function PwdSection() {
  const navigation = useScreenNavigation();

  const [sectionIdx, setSectionIdx] = useState(1);
  const [id, setId] = useState<string>();

  const [idValidation, setIdValidation] = useState(false);
  const [idValidationStart, setIdValidationStart] = useState(false);

  const confirmIdHandler = () => {
    setIdValidationStart(true);
    if (id === '성공') {
      setIdValidation(true);
      setSectionIdx(2);
    } else setIdValidation(false);
  };

  const renderInputId = () => {
    return (
      <View style={styles.base}>
        <View style={styles.titleWrapper}>
          <Typo type={'Body1'} style={styles.subText}>
            기존 아이디를 입력해주세요.
          </Typo>
        </View>
        <InputView
          value={id}
          onChangeText={setId}
          placeholder={'아이디'}
          feedbackText={
            idValidationStart && !idValidation
              ? '존재하지 않는 아이디 입니다.'
              : undefined
          }
          feedbackType={
            idValidationStart && !idValidation ? 'error' : undefined
          }
        />
        <Button
          style={styles.lastBtn}
          type={'Solid-Long'}
          label={'다음'}
          onPress={confirmIdHandler}
        />
      </View>
    );
  };

  const renderAuthentication = () => {
    return (
      <View style={styles.base}>
        <View style={styles.titleWrapper}>
          <Typo type={'Body1'} style={styles.subText}>
            {`휴대폰 번호로 본인 인증을 하면\n비밀번호를 변경할 수 있어요.`}
          </Typo>
        </View>
        <View style={styles.inputContainer}>
          <InputView
            style={styles.certificationInput}
            placeholder={'휴대폰 번호'}
          />
          <Button
            style={styles.certificationBtn}
            type={'Solid-Short-Confirm'}
            label={'인증 받기'}
            onPress={() => {}}
          />
        </View>
        <InputView placeholder={'인증번호 4자리'} />
        <Button
          style={styles.lastBtn}
          type={'Solid-Long'}
          label={'인증 완료'}
          onPress={() => setSectionIdx(3)}
        />
      </View>
    );
  };

  const renderNewPwd = () => {
    return (
      <View style={styles.base}>
        <View style={styles.titleWrapper}>
          <Typo type={'Body1'} style={styles.subText}>
            {`새로운 비밀번호를 입력해주세요.`}
          </Typo>
          <Typo type={'Body2'} style={styles.descText}>
            8-20자 이내의 영문과 숫자의 조합으로 입력해 주세요.
          </Typo>
        </View>
        <InputView style={{marginBottom: 14}} placeholder={'새 비밀번호'} />
        <InputView placeholder={'새 비밀번호 확인'} />
        <Button
          style={styles.lastBtn}
          type={'Solid-Long'}
          label={'변경 완료'}
          onPress={() => setSectionIdx(4)}
        />
      </View>
    );
  };

  const renderChangeFinish = () => {
    return (
      <View style={styles.base}>
        <Typo type={'H2'}>{`비밀번호 변경이\n완료되었어요.`}</Typo>
        <Button
          style={styles.lastBtn}
          type={'Solid-Long'}
          label={'로그인으로 돌아가기'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  };

  const renderContent = () => {
    if (sectionIdx === 2) return renderAuthentication();
    if (sectionIdx === 3) return renderNewPwd();
    if (sectionIdx === 4) return renderChangeFinish();
    return renderInputId();
  };

  return renderContent();
};
export default PwdSection;

const styles = StyleSheet.create({
  base: {
    paddingTop: 38,
    paddingHorizontal: 30,
  },
  titleWrapper: {
    marginBottom: 38,
  },
  mainText: {
    color: colors.DARK_GREY4,
  },
  subText: {
    color: colors.DARK_GREY3,
  },
  descText: {
    color: colors.GREY3,
  },
  lastBtn: {
    marginTop: 48,
  },
  certificationInput: {
    marginBottom: 14,
    marginRight: 10,
    flex: 1,
  },
  certificationBtn: {},
  inputContainer: {
    flexDirection: 'row',
  },
});
