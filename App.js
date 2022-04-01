import React from 'react';
import { StyleSheet, View } from '@react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen  from './src/pages/HomeScreen'

const Stack = createNativeStackNavigator();

function App(){
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Start">
<HomeScreen></HomeScreen>
//<Stack.Screen name="Start" component={HomeScreen} options={{headerShown:false}}/>
//<Stack.Screen name = "SignUp" component={Login}options={{title: '로그인',headerBackTitle: '',headerShadowVisible: false}}/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;