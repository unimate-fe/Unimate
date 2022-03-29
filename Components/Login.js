import React, {useCallback, useState} from 'react';
import {Alert,View, StyleSheet, Text, Pressable, Image, TextInput} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

import DismissKeyboardView from '../components/DismissKeyboardView.js';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

function Login({navigation}: LoginScreenProps){
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback(text => {
        setId(text.trim());
      }, []);
    const onChangePassword = useCallback(text => {
        setPassword(text.trim());
      }, []);
    const onSubmit = useCallback(async () => {
        if (!id || !id.trim()) {
            return Alert.alert('알림', '아이디를 입력해주세요.');
        }
        if (!password || !password.trim()) {
            return Alert.alert('알림', '비밀번호를 입력해주세요.');
        }
        if (id === 'Unimate' && password === '1111') {
                return Alert.alert('알림', '로그인');
            }
        else if (id === 'Unimate' || password === 1111) {
            return Alert.alert('알림', '로그인x');
        }
        // try {
        //     setLoading(true);
        //     const response = await axios.post(`${Config.API_URL}/login`, {
        //     id,
        //     password,
        //     });
        //     console.log(response.data);
        //     Alert.alert('알림', '로그인 되었습니다.');
        //     dispatch(
        //     userSlice.actions.setUser({
        //         name: response.data.data.name,
        //         id: response.data.data.id,
        //         accessToken: response.data.data.accessToken,
        //     }),
        //     );
        //     await EncryptedStorage.setItem(
        //     'refreshToken',
        //     response.data.data.refreshToken,
        //     );
        // } catch (error) {
        //     const errorResponse = (error as AxiosError).response;
        //     if (errorResponse) {
        //     Alert.alert('알림', errorResponse.data.message);
        //     }
        // } finally {
        //     setLoading(false);
        // }
    }, [id, password]);

    const toSearch = useCallback(() => {
        navigation.navigate('Search');
      }, [navigation]);

    return (
    <DismissKeyboardView style={{backgroundColor: 'white'}}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInputTop}
          onChangeText={onChangeId}
          placeholder="아이디"
          placeholderTextColor="#666"
          importantForAutofill="yes"
          autoComplete="id"
          textContentType="id"
          value={id}
          returnKeyType="next"
          clearButtonMode="while-editing"
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInputBottom}
          placeholder="비밀번호"
          placeholderTextColor="#666"
          importantForAutofill="yes"
          onChangeText={onChangePassword}
          value={password}
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          onSubmitEditing={onSubmit}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.loginButtonText}>완료</Text>
        </Pressable>
        <Pressable onPress={toSearch}>
          <Text style={styles.search}> 아이디/비밀번호 찾기</Text>
        </Pressable>
      </View>
    </DismissKeyboardView>
  );
}

const styles = StyleSheet.create({
  textInputTop: {
    width: 315,
    height: 56,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#F2F4F8',
    marginTop: 68,
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

export default Login;
