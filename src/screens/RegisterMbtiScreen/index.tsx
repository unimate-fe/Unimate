import React, {useCallback, useState, FunctionComponent} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import useScreenNavigation from '@hooks/useScreenNavigation';
import DismissKeyboardView from '@components/DismissKeyboardView';
import Button from '@components/Button';
import {strings} from '@screens/RegisterMbtiScreen/string';
import SafeContainer from '@components/SafeContainer';
import {Icons} from '@assets/icons';
import Typo from '@components/Typo';
import {colors} from '@components/Styles/colors';

interface Props {}

const RegisterMbtiScreen: FunctionComponent<Props> =
  function RegisterMbtiScreen() {
    const navigation = useScreenNavigation();

    const submitHandler = () => {
      // if (allSelect || (selectFirst && selectSecond)) {
      //   saveTos();
      // navigation.navigate('RegisterInterest');
      // }
    };

    const [selectE, setSelectE] = useState(false);
    const [selectI, setSelectI] = useState(false);
    const [selectS, setSelectS] = useState(false);
    const [selectN, setSelectN] = useState(false);
    const [selectT, setSelectT] = useState(false);
    const [selectF, setSelectF] = useState(false);
    const [selectJ, setSelectJ] = useState(false);
    const [selectP, setSelectP] = useState(false);

    const toSelectE = () => {
      setSelectE(!selectE);
    };
    const toSelectI = () => {
      setSelectI(!selectI);
    };
    const toSelectS = () => {
      setSelectS(!selectS);
    };
    const toSelectN = () => {
      setSelectN(!selectN);
    };
    const toSelectT = () => {
      setSelectT(!selectT);
    };
    const toSelectF = () => {
      setSelectF(!selectF);
    };
    const toSelectP = () => {
      setSelectP(!selectP);
    };
    const toSelectJ = () => {
      setSelectJ(!selectJ);
    };

    return (
      <SafeContainer style={style.safeView}>
        <View style={style.base}>
          <Text style={style.pageTitle1}>MBTI를 선택해주세요.</Text>
          <Text style={style.pageTitle2}>
            나와 잘 맞는 친구를 찾기 위한 정보예요.
          </Text>
          <Text style={style.pageTitle2}>정확하게 입력해 주세요!</Text>
          

{/* E or I */}
          <View style={style.inputWrapper}>
            <Typo type={'Body1'}>E</Typo>
            <Pressable
              onPress={toSelectE}
              style={[
                style.button,
                selectE
                  ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                  : {backgroundColor: colors.LIGHT_GREY1},
              ]}>
              <Image
                source={selectE ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={style.buttonCheck}
              />
            </Pressable>
            <View style={{padding: 51}}></View>
            <Typo type={'Body1'}>I</Typo>
            <Pressable
              onPress={toSelectI}
              style={[
                style.button,
                selectI
                  ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                  : {backgroundColor: colors.LIGHT_GREY1},
              ]}>
              <Image
                source={selectI ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={style.buttonCheck}
              />
            </Pressable>
          </View>

{/* S or N */}
          <View style={style.inputWrapper}>
            <Typo type={'Body1'}>S</Typo>
            <Pressable
              onPress={toSelectS}
              style={[
                style.button,
                selectS
                  ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                  : {backgroundColor: colors.LIGHT_GREY1},
              ]}>
              <Image
                source={selectS ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={style.buttonCheck}
              />
            </Pressable>
            <View style={{padding: 51}}></View>
            <Typo type={'Body1'}>N</Typo>
            <Pressable
              onPress={toSelectN}
              style={[
                style.button,
                selectN
                  ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                  : {backgroundColor: colors.LIGHT_GREY1},
              ]}>
              <Image
                source={selectN ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={style.buttonCheck}
              />
            </Pressable>
          </View>

{/* T or F */}
          <View style={style.inputWrapper}>
            <Typo type={'Body1'}>T</Typo>
            <Pressable
              onPress={toSelectT}
              style={[
                style.button,
                selectS
                  ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                  : {backgroundColor: colors.LIGHT_GREY1},
              ]}>
              <Image
                source={selectT ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={style.buttonCheck}
              />
            </Pressable>
            <View style={{padding: 51}}></View>
            <Typo type={'Body1'}>F</Typo>
            <Pressable
              onPress={toSelectF}
              style={[
                style.button,
                selectF
                  ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                  : {backgroundColor: colors.LIGHT_GREY1},
              ]}>
              <Image
                source={selectF ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={style.buttonCheck}
              />
            </Pressable>
          </View>

{/* P or J */}
          <View style={style.inputWrapper}>
            <Typo type={'Body1'}>J</Typo>
            <Pressable
              onPress={toSelectJ}
              style={[
                style.button,
                selectS
                  ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                  : {backgroundColor: colors.LIGHT_GREY1},
              ]}>
              <Image
                source={selectJ ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={style.buttonCheck}
              />
            </Pressable>
            <View style={{padding: 51}}></View>
            <Typo type={'Body1'}>P</Typo>
            <Pressable
              onPress={toSelectP}
              style={[
                style.button,
                selectP
                  ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                  : {backgroundColor: colors.LIGHT_GREY1},
              ]}>
              <Image
                source={selectP ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={style.buttonCheck}
              />
            </Pressable>
          </View>

{/*buttonZone*/}
          <Button
            type={'Solid-Long'}
            label={strings.NEXT}
            // onPress={() => navigation.navigate('RegisterInterest')}
            onPress={submitHandler}
          />
          <Pressable
            style={style.PassButton}
            onPress={() => navigation.navigate('RegisterInterest')}>
            <Text style={style.PassButtonText}>잘 모르겠어요 Skip </Text>
          </Pressable>

        </View>
      </SafeContainer>
    );
  };

const style = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
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
  buttonCheck: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 12,
  },
  pageTitle2: {
    fontSize: 14,
    color: '#828C94',
    padding: 5,
  },
  checkBox: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  button: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    padding: 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
