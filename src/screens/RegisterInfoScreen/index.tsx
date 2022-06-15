import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {colors} from '@components/Styles/colors';
import RNPickerSelect from 'react-native-picker-select';
import {Icons} from '@assets/icons';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import InputView from '@components/Input';
import Button from '@components/Button';
import {useRegisterProfile} from '@src/hooks/api/useRegisterApi';
import useScreenNavigation from '@src/hooks/useScreenNavigation';
import useRegisterStore from '@src/hooks/useRegisterStore';
interface RegisterInfoScreenProps {}

const gradeLIst = [
  {label: '1학년', value: 1},
  {label: '2학년', value: 2},
  {label: '3학년', value: 3},
  {label: '4학년', value: 4},
];

const RegisterInfoScreen: FunctionComponent<RegisterInfoScreenProps> =
  function RegisterInfoScreen() {
    const navigation = useScreenNavigation();

    const [grade, setGrade] = useState<number>();

    const [name, setName] = useState<string>('');
    const [entranceYear, setEntranceYear] = useState<string>();
    const [body, setBody] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const [submitValid, setSubmitValid] = useState(false);

    const {user} = useRegisterStore();

    const {mutate: registerProfile, isSuccess} = useRegisterProfile();

    const submitHandler = () => {
      if (grade) {
        registerProfile({
          birth_of_date: '2022-05-04',
          gender,
          entrance_year: Number(entranceYear),
          grade,
          nickname: '닉네임',
          introducing: body,
          mbti: ['i', 's'],
          interest_list: '[1, 4, 7, 10]',
        });
      }
    };

    useEffect(() => {
      if (name && entranceYear && body && grade && gender) {
        setSubmitValid(true);
      } else {
        setSubmitValid(false);
      }
    }, [name, entranceYear, body, grade, gender]);

    useEffect(() => {
      if (isSuccess) {
        navigation.replace('Login');
      }
    });

    return (
      <SafeContainer isKeyboard>
        <View style={styles.base}>
          <Typo style={styles.mainText} type={'H2'}>
            {'가입이 거의 다 끝났어요!'}
          </Typo>
          <InputView
            placeholder={'이름'}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <InputView placeholder={'생년월일'} style={styles.input} />
          <InputView
            placeholder={'입학년도'}
            style={styles.input}
            value={entranceYear}
            onChangeText={setEntranceYear}
          />
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
            style={[styles.input, {height: 80}]}
            value={body}
            onChangeText={setBody}
            placeholder={'자기소개 (선택, 30자 이하)'}
            numberOfLines={2}
            maxLength={30}
            multiline
          />
          <View style={styles.genderView}>
            <Button
              type={
                gender === 'M' ? 'Solid-Short-Cancel' : 'Solid-Short-Confirm'
              }
              label={'여성'}
              onPress={() => {
                setGender('F');
              }}
              style={[{marginRight: 16}, styles.button]}
            />
            <Button
              type={
                gender === 'M' ? 'Solid-Short-Confirm' : 'Solid-Short-Cancel'
              }
              label={'남성'}
              onPress={() => {
                setGender('M');
              }}
              style={styles.button}
            />
          </View>
          <Button
            type={'Solid-Long'}
            label={'로그인'}
            onPress={submitHandler}
            disabled={!submitValid}
          />
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
