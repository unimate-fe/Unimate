import React, {FunctionComponent, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Toast from 'react-native-easy-toast';
import SafeContainer from '@components/SafeContainer';
import InputView from '@components/Input';
import Button from '@components/Button';
import Typo from '@components/Typo';
import {colors} from '@components/Styles/colors';
import Pressable from '@components/Pressable';
import {strings} from '@screens/LoginScreen/strings';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {useLogin} from '@hooks/api/useAccountApis';
interface Props {}

const LoginScreen: FunctionComponent<Props> = function LoginScreen() {
  const navigation = useScreenNavigation();
  const toastRef = useRef<Toast>(null);

  const {mutate: login} = useLogin({username: 'gon2', password: '1234567890'});

  const showToast = () =>
    toastRef?.current?.show('아이디 혹은 비밀번호가 맞지 않아요');

  const submitHandler = () => login();

  return (
    <SafeContainer>
      <View style={styles.base}>
        <InputView style={{marginBottom: 14}} placeholder={strings.ID} />
        <InputView style={{marginBottom: 44}} placeholder={strings.PWD} />
        <Button
          type={'Solid-Long'}
          label={strings.LOGIN}
          onPress={submitHandler}
        />
        <Pressable onPress={() => navigation.navigate('FindAccount')}>
          <Typo type={'Body2'} style={styles.desc}>
            {strings.FIND}
          </Typo>
        </Pressable>
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
export default LoginScreen;

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 30,
    paddingTop: 68,
  },
  desc: {
    textAlign: 'center',
    marginTop: 16,
    color: colors.GREY2,
  },
});
