import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RootStackNavigationProps,
  RootStackParams,
} from '../../../src/navigations/RootStackNavigator/types';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../../../src/screens/HomeScreen';
import RegisterScreen from '../../../src/screens/RegisterScreen';
import RegisterTermsScreen from '../../../src/screens/RegisterTermsScreen';
import RegisterInfoScreen from '../../../src/screens/RegisterInfoScreen';
import RegisterPhoneScreen from '../../../src/screens/RegisterPhoneScreen';
import RegisterEmailScreen from '../../../src/screens/RegisterEmailScreen';
import RegisterMbtiScreen from '../../../src/screens/RegisterMbtiScreen';
import RegisterNickScreen from '../../../src/screens/RegisterNickScreen';
import RegisterInterestScreen from '../../../src/screens/RegisterInterestScreen';
import RegisterDetailScreen from '../../../src/screens/RegisterDetailScreen';
import RegisterFinish from '../../../src/screens/RegisterFinish';

const Stack = createNativeStackNavigator<RootStackParams>();

// 유저 인증 전
const UnauthorizedGroup = (
  <Stack.Group>
    <Stack.Screen
      name={'Home'}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name={'Register'} component={RegisterScreen} />
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
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <Stack.Navigator screenOptions={{headerTitle: ''}}>
      {UnauthorizedGroup}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
