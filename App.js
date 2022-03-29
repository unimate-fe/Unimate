import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen  from './Components/HomeScreen'
import Login from './Components.Login'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} options={{title: '로그인',headerBackTitle: '',headerShadowVisible: false}}/>
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});