import React, {useCallback,useState, FunctionComponent} from 'react';
import {View, Text,StyleSheet} from 'react-native';

// add
import CheckBox from '@react-native-community/checkbox';
import useScreenNavigation from '@hooks/useScreenNavigation';
import DismissKeyboardView from '@components/DismissKeyboardView'
import TextInput from '@components/Input';
import Button from '@components/Button';

interface Props {}

const RegisterMbtiScreen: FunctionComponent<Props> =
  function RegisterMbtiScreen() {

    const navigation = useScreenNavigation();

    const [selectE, setSelectE] = useState('');
    const [selectI, setSelectI] = useState('');
    const [selectS, setSelectS] = useState('');
    const [selectN, setSelectN] = useState('');
    const [selectT, setSelectT] = useState('');
    const [selectF, setSelectF] = useState('');
    const [selectJ, setSelectJ] = useState('');
    const [selectP, setSelectP] = useState('');
  
      const toInterest = useCallback(() => {
        navigation.navigate('RegisterInterest');
      }, [navigation]);

    return (
      <DismissKeyboardView style={{backgroundColor: 'white'}}>
        <View style={{paddingLeft:30}}>
          <Text style={style.pageTitle1}>MBTI를 선택해주세요.</Text>
        </View>
        <View style={{paddingLeft:30}}>
          <Text style={style.pageTitle2}>나와 잘 맞는 친구를 찾기 위한 정보예요.</Text>
          <Text style={style.pageTitle2}>정확하게 입력해 주세요!</Text>
      </View>
      {/* E ------------ */}
      <View style={style.inputTopWrapper}>
        <TextInput
            style={style.textInput}
            placeholder="E"
            value='E'
            placeholderTextColor="#666"
            editable={false}
          />
        <CheckBox
              // value={selectE}
              disabled={false}
              style={style.checkBox}
              onCheckColor={'#FFB6C7'}
              onTintColor={'#FFB6C7'}
            />
      </View>
      <View style={style.inputContainer}>
      <Button type={'Solid-Long'} label={"다음"} onPress={() => navigation.navigate('RegisterInterest')} />
      </View>
      </DismissKeyboardView>
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
  inputContainer: {
    marginTop:20,
    marginLeft:37,
    marginRight:37,
    marginBottom: 20,
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

export default RegisterMbtiScreen;
