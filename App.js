/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from './src/pages/Start';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Search from './src/pages/Search';
import Tos from './src/pages/Tos';
import SignUpData from './src/pages/SignUpData';
import SignUpDataPhone from './src/pages/SignUpDataPhone';
import SignUpDataEmail from './src/pages/SignUpDataEmail';
import SignUpDataNickname from './src/pages/SignUpDataNickname';
import SignUpDataMbti from './src/pages/SignUpDataMbti';
import SignUpDataInterest from './src/pages/SignUpDataInterest';
import SignUpDataDetail from './src/pages/SignUpDataDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Login" component={Login} options={{title: '로그인',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{title: '회원가입',headerBackTitle: '',headerShadowVisible: false}}/>

        <Stack.Screen name="Search" component={Search} options={{title: '아이디/비밀번호 찾기',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="Tos" component={Tos} options={{title: '이용약관동의',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="SignUpData" component={SignUpData} options={{title: '회원가입',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="SignUpDataPhone" component={SignUpDataPhone} options={{title: '휴대폰 인증',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="SignUpDataEmail" component={SignUpDataEmail} options={{title: '이메일 인증',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="SignUpDataNickname" component={SignUpDataNickname} options={{title: '닉네임',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="SignUpDataMbti" component={SignUpDataMbti} options={{title: 'MBTI',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="SignUpDataInterest" component={SignUpDataInterest} options={{title: '관심사',headerBackTitle: '',headerShadowVisible: false}}/>
        <Stack.Screen name="SignUpDataDetail" component={SignUpDataDetail} options={{title: '이름',headerBackTitle: '',headerShadowVisible: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
