import React, {FunctionComponent,useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import SafeContainer from '@components/SafeContainer';
interface Props {}

const RegisterInterestScreen: FunctionComponent<Props> =
  function RegisterInterestScreen() {
    return (
      <SafeContainer>
      <View style={{paddingLeft: 30}}>
            <Text style={style.pageTitle1}>관심사를 선택해주세요.<Text style={style.pageTitle3}>*최대 7개 선택</Text></Text>
      </View>
      <View style={{paddingLeft: 30}}>
            <Text style={style.pageTitle2}>나와 잘 맞는 친구를 찾기 위한 정보예요.</Text>
            <Text style={style.pageTitle2}>정확하게 입력해 주세요!</Text>
      </View>
      </SafeContainer>
    );
  };
  const style = StyleSheet.create({
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
    pageTitle3: {
      fontSize: 14,
      color: '#F25D53',
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
  
export default RegisterInterestScreen;
