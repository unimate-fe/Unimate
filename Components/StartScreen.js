
import React, {useCallback} from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Start({navigation}) {

  // const toLogin(() => {
  //   navigation.navigate('Login');
  // }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#ffffff',alignItems:'center'}}>
      <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
        <Image source={require('./assets/unimate_logo.png')} style={{marginVertical:10}} />

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{backgroundColor: '#9678FE',padding: 20, width: 315,height:56 ,borderRadius: 12,alignItems:'center',marginVertical:7}}>
            <Text style={{fontWeight:'bold',fontSize: 15,color:'#fff'}}>회원가입</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor: '#ffffff',padding: 20, width: 315,height:56 ,borderRadius: 12,alignItems:'center',borderWidth: 1,borderColor:'#9678FE',marginVertical:7}}>
            <Text style={{fontWeight:'bold',fontSize: 15,color:'#9678FE'}}>로그인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Start;
