import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '@src/navigations/RootStackNavigator/types';
import HomeScreen from '@screens/HomeScreen';
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
import RegisterIdPwdScreen from '@screens/RegisterIdPwdScreen';
import RegisterTosScreen from '@src/screens/RegisterTosScreen';
import RegisterInfoScreen from '@screens/RegisterInfoScreen';
import RoomStartScreen from '@src/screens/RoomStartScreen';
import RoomSelectScreen from '@src/screens/RoomSelectScreen';
import RoomSelectGradeScreen from '@src/screens/RoomSelectGradeScreen';
import RoomSelectCntScreen from '@src/screens/RoomSelectCntScreen';
import RoomSelectGenderScreen from '@src/screens/RoomSelectGender';
import useRegisterStore from '@src/hooks/useRegisterStore';


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
      name={'Login'}
      component={LoginScreen}
      options={{headerTitle: '로그인'}}
    />
    <Stack.Screen
      name={'FindAccount'}
      component={FindAccountScreen}
      options={{headerTitle: '아이디 / 비밀번호 찾기'}}
    />
    <Stack.Screen
      name={'RoomStart'}
      component={RoomStartScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RoomSelect'}
      component={RoomSelectScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RoomSelectGrade'}
      component={RoomSelectGradeScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RoomSelectCnt'}
      component={RoomSelectCntScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RoomSelectGender'}
      component={RoomSelectGenderScreen}
      options={{headerTitle: ''}}
    />
  </Stack.Group>
);

// 유저 인증 이후
const AuthorizedGroup = (
  <Stack.Group>
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
      name={'RoomStart'}
      component={RoomStartScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RoomSelect'}
      component={RoomSelectScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RoomSelectGrade'}
      component={RoomSelectGradeScreen}
      options={{headerTitle: ''}}
    />
    <Stack.Screen
      name={'RoomSelectCnt'}
      component={RoomSelectCntScreen}
      options={{headerTitle: ''}}
    />
  </Stack.Group>
);

const RootStackNavigator = function RootStackNavigator() {
  const navigation = useScreenNavigation();
  const headerLeft = () => <HeaderPrev onPress={() => navigation.goBack()} />;

  const {user} = useRegisterStore();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerLeft,
      }}>
      {!!user ? AuthorizedGroup : UnauthorizedGroup}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
