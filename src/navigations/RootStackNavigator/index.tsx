import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '@src/navigations/RootStackNavigator/types';
import HomeScreen from '@screens/HomeScreen';
import RegisterTermsScreen from '@screens/RegisterTermsScreen';
import RegisterPhoneScreen from '@screens/RegisterPhoneScreen';
import RegisterEmailScreen from '@screens/RegisterEmailScreen';
import RegisterMbtiScreen from '@screens/RegisterMbtiScreen';
import RegisterNickScreen from '@screens/RegisterNickScreen';
import RegisterInterestScreen from '@screens/RegisterInterestScreen';
import RegisterSchoolScreen from '@screens/RegisterSchoolScreen';
import HeaderPrev from '@components/HeaderPrev';
import useScreenNavigation from '@hooks/useScreenNavigation';
import LoginScreen from '@screens/LoginScreen';
import FindAccountScreen from '@screens/FindAccountScreen';
import RegisterIdPwd from '@screens/RegisterIdPwdScreen';
import RegisterIdPwdScreen from '@screens/RegisterIdPwdScreen';
import RegisterTosScreen from '@src/screens/RegisterTosScreen';
import RegisterInfoScreen from '@screens/RegisterInfoScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

// 유저 인증 전
const UnauthorizedGroup = (
  <Stack.Group>
    <Stack.Screen
      name={'Home'}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={'RegisterSchool'}
      component={RegisterSchoolScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RegisterTos'}
      component={RegisterTosScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RegisterIdPwd'}
      component={RegisterIdPwdScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RegisterPhone'}
      component={RegisterPhoneScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RegisterEmail'}
      component={RegisterEmailScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RegisterNick'}
      component={RegisterNickScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RegisterMbti'}
      component={RegisterMbtiScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RegisterInterest'}
      component={RegisterInterestScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RegisterInfo'}
      component={RegisterInfoScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'Login'}
      component={LoginScreen}
      options={{headerTitle: '로그인'}}
    />
    <Stack.Screen
      name={'FindAccount'}
      component={FindAccountScreen}
      options={{headerTitle: '아이디 / 비밀번호 찾기'}}
    />
  </Stack.Group>
);

// 유저 인증 이후
// const AuthorizedGroup;

const RootStackNavigator = function RootStackNavigator() {
  const navigation = useScreenNavigation();
  const headerLeft = () => <HeaderPrev onPress={() => navigation.goBack()} />;

  return (
    <Stack.Navigator
      // initialRouteName={'RegisterInfo'}
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerLeft,
      }}>
      {UnauthorizedGroup}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
