import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  RootStackNavigationProps,
  RootStackParams,
} from '@src/navigations/RootStackNavigator/types';
import HomeScreen from '@screens/HomeScreen';
import RegisterTermsScreen from '@screens/RegisterTermsScreen';
import RegisterInfoScreen from '@screens/RegisterInfoScreen';
import RegisterPhoneScreen from '@screens/RegisterPhoneScreen';
import RegisterEmailScreen from '@screens/RegisterEmailScreen';
import RegisterMbtiScreen from '@screens/RegisterMbtiScreen';
import RegisterNickScreen from '@screens/RegisterNickScreen';
import RegisterInterestScreen from '@screens/RegisterInterestScreen';
import RegisterDetailScreen from '@screens/RegisterDetailScreen';
import RegisterFinish from '@screens/RegisterFinish';
import RegisterSchoolScreen from '@screens/RegisterSchoolScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

// 유저 인증 전
const UnauthorizedGroup = (
  <Stack.Group>
    <Stack.Screen
      name={'Home'}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name={'RegisterSchool'} component={RegisterSchoolScreen} />
    <Stack.Screen name={'RegisterTerms'} component={RegisterTermsScreen} />
    <Stack.Screen name={'RegisterInfo'} component={RegisterInfoScreen} />
    <Stack.Screen name={'RegisterPhone'} component={RegisterPhoneScreen} />
    <Stack.Screen name={'RegisterEmail'} component={RegisterEmailScreen} />
    <Stack.Screen name={'RegisterNick'} component={RegisterNickScreen} />
    <Stack.Screen name={'RegisterMbti'} component={RegisterMbtiScreen} />
    <Stack.Screen
      name={'RegisterInterest'}
      component={RegisterInterestScreen}
    />
    <Stack.Screen name={'RegisterDetail'} component={RegisterDetailScreen} />
    <Stack.Screen name={'RegisterFinish'} component={RegisterFinish} />
  </Stack.Group>
);

// 유저 인증 이후
// const AuthorizedGroup;

const RootStackNavigator = function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTitle: ''}}>
      {UnauthorizedGroup}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
