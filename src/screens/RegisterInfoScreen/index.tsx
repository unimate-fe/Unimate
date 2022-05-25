import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '@components/Styles/colors';
import RNPickerSelect from 'react-native-picker-select';
import {Icons} from '@assets/icons';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
interface RegisterInfoScreenProps {}

const gradeLIst = [
  {label: '1학년', value: 1},
  {label: '2학년', value: 2},
  {label: '3학년', value: 3},
  {label: '4학년', value: 4},
];

const RegisterInfoScreen: FunctionComponent<RegisterInfoScreenProps> =
  function RegisterInfoScreen() {
    const [grade, setGrade] = useState<number>();

    return (
      <SafeContainer isKeyboard>
        <View style={styles.base}>
          <Typo style={styles.mainText} type={'H2'}>
            {`번호를 입력해 주세요.`}
          </Typo>
          <InputView placeholder={'이름'} style={styles.input} />
          <InputView placeholder={'생년월일'} style={styles.input} />
          <InputView placeholder={'입학년도'} style={styles.input} />
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{label: '학년'}}
              style={pickerSelectStyles}
              onValueChange={value => setGrade(value)}
              items={gradeLIst}
              doneText={'선택'}
            />
            <Image source={Icons.ARROW_DROP_DOWN} style={styles.downIcon} />
          </View>
          <InputView
            style={styles.input}
            placeholder={'자기소개 (선택, 30자 이하)'}
            numberOfLines={2}
          />
          <View style={styles.genderView}>
            <Button
              type={'Solid-Short-Confirm'}
              label={'여성'}
              onPress={() => {}}
              style={[{marginRight: 16}, styles.button]}
            />
            <Button
              type={'Solid-Short-Confirm'}
              label={'남성'}
              onPress={() => {}}
              style={styles.button}
            />
          </View>
          <Button type={'Solid-Long'} label={'로그인'} onPress={() => {}} />
        </View>
      </SafeContainer>
    );
  };
export default RegisterInfoScreen;

const styles = StyleSheet.create({
  base: {
    paddingTop: 28,
    paddingHorizontal: 30,
  },
  mainText: {
    color: colors.DARK_GREY4,
    marginBottom: 48,
  },
  input: {
    marginBottom: 14,
  },
  pickerContainer: {
    marginBottom: 14,
  },
  downIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 24,
    height: 24,
  },
  genderView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 44,
  },
  button: {
    flex: 1,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.DARK_GREY3,
    height: 56,
    width: '100%',
    backgroundColor: colors.LIGHT_GREY1,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  placeholder: {
    color: colors.GREY2,
  },
});
