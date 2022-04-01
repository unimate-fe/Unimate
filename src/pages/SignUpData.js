import React, {useCallback, useState} from 'react';
import {Alert,View, StyleSheet, Text, Pressable, Image, TextInput} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

import DismissKeyboardView from '../components/DismissKeyboardView.js';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';

//type SignUpDataScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpData'>;

function SignUpData({navigation}){
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [checkIdFontText, setCheckIdFontText] = useState('이미 사용중인 아이디예요.');
  const [checkIdFontColor, setCheckIdFontColor] = useState('#F25D53');
  const [checkPwFontText, setCheckPwFontText] = useState('');
  const [checkPwFontColor, setCheckPwFontColor] = useState('');
  const [checkPwCheckFontText, setCheckPwCheckFontText] = useState('');
  const [checkPwCheckFontColor, setCheckPwCheckFontColor] = useState('');

  const toSignUpDataPhone = useCallback(() => {
      navigation.navigate('SignUpDataPhone');
    }, [navigation]);
  
    const toIdCheck = useCallback(() => {
      if(id == 'ruri'){
        setCheckIdFontText('사용 가능해요 :)');
        setCheckIdFontColor('#9678FE');
      }
    });

    const toPwCheck = useCallback(() => {
        if(password==''){
          setCheckPwFontText('영문과 숫자 포함 8자 이상 입력해주세요.');
          setCheckPwFontColor('#F25D53');
        }
        toCheckPwCheck();
    });

    const toCheckPwCheck = useCallback(() => {
      if(passwordCheck != password){
        setCheckPwCheckFontText('비밀번호가 일치하지 않아요ㅜㅜ');
        setCheckPwCheckFontColor('#F25D53');
      }
      if(passwordCheck == password){
        setCheckPwCheckFontText('');
      }
  });

    const onChangeId = useCallback(text => {
      setId(text.trim());
    }, []);

    const onChangePassword = useCallback(text => {
      setPassword(text.trim());
    }, []);

    const onChangePasswordCheck = useCallback(text => {
      setPasswordCheck(text.trim());
    }, []);
  return (
    <DismissKeyboardView style={{backgroundColor: 'white'}}>
      <View style={{paddingLeft: 30}}>
            <Text style={styles.pageTitle1}>회원정보를</Text>
            <Text style={styles.pageTitle1}>입력해 주세요.</Text>
      </View>
      {/* 아이디------------ */}
      <View style={styles.inputTopWrapper}>
        <TextInput
          style={styles.textInputTop}
          placeholder="아이디"
          placeholderTextColor="#666"
          onChangeText={onChangeId}
          autoComplete="id"
          autoCapitalize="none"
          textContentType="id"
          value={id}
          returnKeyType="next"
          clearButtonMode="while-editing"
        />
        <View style={{paddingLeft:10}}>
          <Pressable style={styles.CheckButton} onPress={toIdCheck}>
            <Text style={styles.CheckButtonText}>중복 확인</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.checkTextContainer}>
        <TextInput
            style={{fontSize: 10}}
            placeholder= {checkIdFontText}
            placeholderTextColor= {checkIdFontColor}
            editable={false}
          />
      </View>
      {/* 새 비밀번호------------ */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInputBottom}
          placeholder="새 비밀번호"
          placeholderTextColor="#666"
          onChangeText={onChangePassword}
          importantForAutofill="yes"
          value={password}
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          onBlur={toPwCheck}
        />
      </View>
      <View style={styles.checkTextContainer}>
        <TextInput
            style={{fontSize: 10}}
            placeholder= {checkPwFontText}
            placeholderTextColor= {checkPwFontColor}
            editable={false}
          />
      </View>
        {/* 새 비밀번호 확인------------ */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInputBottom}
          placeholder="새 비밀번호 확인"
          placeholderTextColor="#666"
          onChangeText={onChangePasswordCheck}
          importantForAutofill="yes"
          value={passwordCheck}
          autoComplete="passwordCheck"
          textContentType="passwordCheck"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          onBlur={toCheckPwCheck}
        />
      </View>
      <View style={styles.checkTextContainer}>
        <TextInput
            style={{fontSize: 10}}
            placeholder= {checkPwCheckFontText}
            placeholderTextColor= {checkPwCheckFontColor}
            editable={false}
          />
      </View>
      <View style={styles.buttonZone}>
        <Pressable style={styles.loginButton} onPress={toSignUpDataPhone}>
          <Text style={styles.loginButtonText}>다음</Text>
        </Pressable>
      </View>
    </DismissKeyboardView>
  );
}

const styles = StyleSheet.create({
  pageTitle1: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#212529',
    padding: 5,
},
CheckButton: {
  width: 80,
  height: 56,
  borderRadius: 12,
  backgroundColor: '#9678FE',
  alignItems: 'center',
  justifyContent: 'center',
},
CheckButtonText: {
  fontWeight: 'bold',
  fontSize: 14,
  color: '#fff',
},
NextButton: {
  width: 315,
  height: 56,
  borderRadius: 12,
  backgroundColor: '#9678FE',
  padding: 20,
  alignItems: 'center',
},
NextButtonText: {
  fontWeight: 'bold',
  fontSize: 15,
  color: '#fff',
},
textInputTop: {
    width: 225,
    height: 56,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#F2F4F8',
  },
  textInputBottom: {
    width: 315,
    height: 56,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#F2F4F8',
  },
  inputWrapper: {
    padding: 7,
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputTopWrapper: {
    padding: 7,
    paddingTop: 41,
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkTextContainer: {
    padding: 7,
    paddingLeft: 40,
    justifyContent: 'center',
  },
  buttonZone: {
    padding: 37,
    alignItems: 'center',
  },
  loginButton: {
    width: 315,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#9678FE',
    padding: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  search: {
    fontSize: 14,
    color: '#A4ACB3',
    padding: 16,
  },
});

export default SignUpData;
