import React, {useCallback, useState} from 'react';
import {Alert,View, StyleSheet, Text, Pressable, Image, TextInput, TouchableHighlight} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

import DismissKeyboardView from '../components/DismissKeyboardView.js';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';

import CheckBox from '@react-native-community/checkbox';

//type SignUpDataScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpData'>;

function SignUpDataMbti({navigation}){
  
  const [selectE, setSelectE] = useState('');
  const [selectI, setSelectI] = useState('');
  const [selectS, setSelectS] = useState('');
  const [selectN, setSelectN] = useState('');
  const [selectT, setSelectT] = useState('');
  const [selectF, setSelectF] = useState('');
  const [selectJ, setSelectJ] = useState('');
  const [selectP, setSelectP] = useState('');

    const toInterest = useCallback(() => {
      navigation.navigate('SignUpDataInterest');
    }, [navigation]);

  return (
    <DismissKeyboardView style={{backgroundColor: 'white'}}>
      <View style={{paddingLeft: 30}}>
            <Text style={styles.pageTitle1}>MBTI를 선택해주세요.</Text>
      </View>
      <View style={{paddingLeft: 30}}>
            <Text style={styles.pageTitle2}>나와 잘 맞는 친구를 찾기 위한 정보예요.</Text>
            <Text style={styles.pageTitle2}>정확하게 입력해 주세요!</Text>
      </View>
      {/* E ------------ */}
      <View style={styles.inputTopWrapper}>
        <CheckBox
              value={selectE}
              disabled={false}
              style={styles.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
        <View style={{padding: 15}}>
        </View>
        <TextInput
            style={styles.textInput}
            placeholder="E"
            placeholderTextColor="#666"
            editable={false}
          />
        <View style={{padding: 15}}>
        </View>
        {/* I ------------ */}
        <CheckBox
              value={selectI}
              disabled={false}
              style={styles.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
        <View style={{padding: 15}}>
        </View>
        <TextInput
            style={styles.textInput}
            placeholder="I"
            placeholderTextColor="#666"
            editable={false}
          />
      </View>
      {/* S ------------ */}
      <View style={styles.inputWrapper}>
        <CheckBox
              value={selectS}
              disabled={false}
              style={styles.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
        <View style={{padding: 15}}>
        </View>
        <TextInput
            style={styles.textInput}
            placeholder="S"
            placeholderTextColor="#666"
            editable={false}
          />
        <View style={{padding: 15}}>
        </View>
        {/* N ------------ */}
        <CheckBox
              value={selectN}
              disabled={false}
              style={styles.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
        <View style={{padding: 15}}>
        </View>
        <TextInput
            style={styles.textInput}
            placeholder="N"
            placeholderTextColor="#666"
            editable={false}
          />
      </View>
      {/* T ------------ */}
      <View style={styles.inputWrapper}>
        <CheckBox
              value={selectT}
              disabled={false}
              style={styles.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
        <View style={{padding: 15}}>
        </View>
        <TextInput
            style={styles.textInput}
            placeholder="T"
            placeholderTextColor="#666"
            editable={false}
          />
        <View style={{padding: 15}}>
        </View>
        {/* F ------------ */}
        <CheckBox
              value={selectF}
              disabled={false}
              style={styles.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
        <View style={{padding: 15}}>
        </View>
        <TextInput
            style={styles.textInput}
            placeholder="F"
            placeholderTextColor="#666"
            editable={false}
          />
      </View>
      {/* J ------------ */}
      <View style={styles.inputWrapper}>
        <CheckBox
              value={selectJ}
              disabled={false}
              style={styles.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
        <View style={{padding: 15}}>
        </View>
        <TextInput
            style={styles.textInput}
            placeholder="J"
            placeholderTextColor="#666"
            editable={false}
          />
        <View style={{padding: 15}}>
        </View>
        {/* P ------------ */}
        <CheckBox
              value={selectP}
              disabled={false}
              style={styles.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
        <View style={{padding: 15}}>
        </View>
        <TextInput
            style={styles.textInput}
            placeholder="P"
            placeholderTextColor="#666"
            editable={false}
          />
      </View>
      {/* 완료 ------------ */}
      <View style={styles.buttonZone}>
        <Pressable style={styles.NextButton} onPress={toInterest}>
          <Text style={styles.NextButtonText}>다음</Text>
        </Pressable>
        <Pressable style={styles.PassButton} onPress={toInterest}>
        <Text style={styles.PassButtonText}>잘 모르겠어요 Skip ></Text>
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
  pageTitle2: {
    fontSize: 14,
    color: '#828C94',
    padding: 5,
  },
  textInput: {
    width: 45,
    height: 45,
    padding: 17
  },
  checkBox: {
  },
  inputTopWrapper: {
    padding: 7,
    paddingTop: 48,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputWrapper: {
    padding: 7,
    paddingTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonZone: {
    padding: 37,
    alignItems: 'center',
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
  PassButton: {
    width: 315,
    height: 56,
    padding: 10,
    alignItems: 'center',
  },
  PassButtonText: {
    fontSize: 13,
    color: '#9678FE',
  },
});

export default SignUpDataMbti;
