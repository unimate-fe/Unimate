import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import SafeContainer from '@components/SafeContainer';
interface Props {}

const LoginScreen: FunctionComponent<Props> = function LoginScreen() {
  return (
    <SafeContainer>
      <Text>LoginScreen</Text>
    </SafeContainer>
  );
};
export default LoginScreen;
