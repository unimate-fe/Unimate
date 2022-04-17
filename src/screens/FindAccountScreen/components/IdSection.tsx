import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '@components/Styles/colors';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {Icons} from '@assets/icons';
interface Props {}

const IdSection: FunctionComponent<Props> = function IdSection() {
  const navigation = useScreenNavigation();

  const [email, setEmail] = useState<string>();
  const [validation, setValidation] = useState(false);
  const [validationStart, setValidationStart] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const findAccountHandler = () => {
    setValidationStart(true);
    if (email === '성공') {
      setValidation(true);
      setInterval(() => {
        setIsSuccess(true);
      }, 1000);
    } else {
      return setValidation(false);
    }
  };

  const renderEmailInput = () => {
    return (
      <View style={styles.base}>
        <Typo
          style={styles.subText}
          type={
            'Body1'
          }>{`등록된 이메일을 통해\n아이디를 찾을 수 있어요.`}</Typo>
        <InputView
          value={email}
          onChangeText={setEmail}
          placeholder={'이메일'}
          feedbackText={
            validationStart && !validation
              ? '이메일 정보가 존재하지 않아요.'
              : undefined
          }
          feedbackType={validationStart && !validation ? 'error' : undefined}
        />
        <Button
          style={{marginTop: 22}}
          type={'Solid-Long'}
          label={'아이디 찾기'}
          onPress={findAccountHandler}
        />
      </View>
    );
  };

  const renderAccountInfo = () => {
    return (
      <View style={styles.base}>
        <Typo
          style={styles.mainText}
          type={'H2'}>{`입력하신 이메일로\n찾은 계정 정보에요`}</Typo>
        <Typo style={styles.descText} type={'Body2'}>
          개인정보 보호를 위해 **로 표시됩니다.
        </Typo>
        <View style={styles.accountContainer}>
          <View style={styles.profile}>
            <Image source={Icons.PROFILE} style={styles.profileIcon} />
          </View>
          <Typo type={'Body1'}>ej**404</Typo>
        </View>
        <Button
          style={{marginTop: 44}}
          type={'Solid-Long'}
          label={'로그인으로 돌아가기'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  };

  return isSuccess ? renderAccountInfo() : renderEmailInput();
};
export default IdSection;

const styles = StyleSheet.create({
  base: {
    paddingTop: 38,
    paddingHorizontal: 30,
  },
  mainText: {
    color: colors.DARK_GREY4,
    marginBottom: 24,
  },
  subText: {
    color: colors.DARK_GREY3,
    marginBottom: 38,
  },
  descText: {
    color: colors.GREY3,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 42,
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 15,
    backgroundColor: colors.LIGHT_GREY1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 24,
    height: 24,
  },
  id: {
    color: colors.DARK_GREY4,
  },
});
