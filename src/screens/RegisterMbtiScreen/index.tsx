import React, {useCallback,useState, FunctionComponent} from 'react';
import {View, Text,StyleSheet,Pressable} from 'react-native';

// add
import CheckBox from '@react-native-community/checkbox';
import useScreenNavigation from '@hooks/useScreenNavigation';
import DismissKeyboardView from '@components/DismissKeyboardView'
import TextInput from '@components/Input';
import Button from '@components/Button';
import {strings} from '@screens/RegisterMbtiScreen/string';
import SafeContainer from '@components/SafeContainer';

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
  
      // const toInterest = useCallback(() => {
      //   navigation.navigate('RegisterInterest');
      // }, [navigation]);

    return (
      <SafeContainer>
        <View style={style.base}>
          <Text style={style.pageTitle1}>MBTI를 선택해주세요.</Text>
          <Text style={style.pageTitle2}>나와 잘 맞는 친구를 찾기 위한 정보예요.</Text>
          <Text style={style.pageTitle2}>정확하게 입력해 주세요!</Text>
          
          
          <Button
          type={'Solid-Long'}
          label={strings.NEXT}
          onPress={()=>navigation.navigate('RegisterInterest')}
          />
          <Pressable style={style.PassButton} onPress={()=>navigation.navigate('RegisterInterest')}>
            <Text style={style.PassButtonText}>잘 모르겠어요 Skip </Text>
          </Pressable>
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
    base: {
      paddingTop: 28,
      paddingHorizontal: 30,
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
    checkbox: {
      transform: [{scaleX: 0.8}, {scaleY: 0.8}],
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
