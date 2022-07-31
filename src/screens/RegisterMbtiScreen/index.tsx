import React, {
  useCallback,
  useState,
  FunctionComponent,
  useEffect,
} from 'react';
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
import {FIRST_MBTI, FOURTH_MBTI, SECOND_MBTI, THIRD_MBTI} from './types';
import useRegisterStore from '@src/hooks/useRegisterStore';

const RegisterMbtiScreen: FunctionComponent = function RegisterMbtiScreen() {
  const navigation = useScreenNavigation();

  const [submitValid, setSubmitValid] = useState(false);

  const [saveMBTI] = useRegisterStore(state => [state.saveMBTI]);

  const [firstMbti, setFirstMbti] = useState<FIRST_MBTI>();
  const [secondMbti, setSecondMbti] = useState<SECOND_MBTI>();
  const [thirdMbti, setThirdMbti] = useState<THIRD_MBTI>();
  const [fourthMbti, setFourthMbti] = useState<FOURTH_MBTI>();

  const selectFirstMbtiHandler = (item: FIRST_MBTI) => setFirstMbti(item);
  const selectSecondMbtiHandler = (item: SECOND_MBTI) => setSecondMbti(item);
  const selectThirdMbtiHandler = (item: THIRD_MBTI) => setThirdMbti(item);
  const selectFourthMbtiHandler = (item: FOURTH_MBTI) => setFourthMbti(item);

  const submitHandler = () => {
    if (firstMbti && secondMbti && thirdMbti && fourthMbti) {
      saveMBTI([
        firstMbti?.toString(),
        secondMbti?.toString(),
        thirdMbti?.toString(),
        fourthMbti?.toString(),
      ]);
      navigation.navigate('RegisterInterest');
    }
  };

  const renderCheckItem = (
    index: number,
    onPressFirst: () => void,
    onPressSecond: () => void,
    firstText: string,
    secondText: string,
    leftActive?: boolean,
    rightActive?: boolean,
  ) => {
    return (
      <View style={style.checkBase} key={index}>
        <Pressable
          style={[style.pressView, {marginRight: 40}]}
          onPress={onPressFirst}>
          <Typo type={'Body1'} style={style.itemText}>
            {firstText}
          </Typo>
          <Image
            source={leftActive ? Icons.CHECK_ON : Icons.CHECK_OFF}
            style={style.buttonCheck}
          />
        </Pressable>
        <Pressable style={style.pressView} onPress={onPressSecond}>
          <Typo type={'Body1'} style={style.itemText}>
            {secondText}
          </Typo>
          <Image
            source={rightActive ? Icons.CHECK_ON : Icons.CHECK_OFF}
            style={style.buttonCheck}
          />
        </Pressable>
      </View>
    );
  };

  useEffect(() => {
    if (firstMbti && secondMbti && thirdMbti && fourthMbti) {
      setSubmitValid(true);
    } else {
      setSubmitValid(false);
    }
  }, [firstMbti, secondMbti, thirdMbti, fourthMbti]);

  return (
    <SafeContainer>
      <View style={style.base}>
        <Typo type={'H2'}>{'MBTI를 선택해주세요.'}</Typo>
        <Typo type={'Body2'} style={style.pageTitle2}>
          {'나와 잘 맞는 친구를 찾기 위한 정보예요.\n정확하게 입력해 주세요!'}
        </Typo>
        {renderCheckItem(
          1,
          () => selectFirstMbtiHandler(FIRST_MBTI.E),
          () => selectFirstMbtiHandler(FIRST_MBTI.I),
          FIRST_MBTI.E,
          FIRST_MBTI.I,
          firstMbti === FIRST_MBTI.E,
          firstMbti === FIRST_MBTI.I,
        )}
        {renderCheckItem(
          2,
          () => selectSecondMbtiHandler(SECOND_MBTI.S),
          () => selectSecondMbtiHandler(SECOND_MBTI.N),
          SECOND_MBTI.S,
          SECOND_MBTI.N,
          secondMbti === SECOND_MBTI.S,
          secondMbti === SECOND_MBTI.N,
        )}
        {renderCheckItem(
          3,
          () => selectThirdMbtiHandler(THIRD_MBTI.T),
          () => selectThirdMbtiHandler(THIRD_MBTI.F),
          THIRD_MBTI.T,
          THIRD_MBTI.F,
          thirdMbti === THIRD_MBTI.T,
          thirdMbti === THIRD_MBTI.F,
        )}
        {renderCheckItem(
          4,
          () => selectFourthMbtiHandler(FOURTH_MBTI.J),
          () => selectFourthMbtiHandler(FOURTH_MBTI.P),
          FOURTH_MBTI.J,
          FOURTH_MBTI.P,
          fourthMbti === FOURTH_MBTI.J,
          fourthMbti === FOURTH_MBTI.P,
        )}

        {/*buttonZone*/}
        <Button
          disabled={!submitValid}
          type={'Solid-Long'}
          label={strings.NEXT}
          onPress={submitHandler}
          style={{marginTop: 24}}
        />
        <Pressable
          style={style.PassButton}
          onPress={() => navigation.navigate('RegisterInterest')}>
          <Typo type={'Body1'} style={style.PassButtonText}>
            {'잘 모르겠어요 Skip'}
          </Typo>
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
  base: {
    paddingTop: 28,
    paddingHorizontal: 30,
  },
  pageTitle1: {
    marginBottom: 10,
  },
  pageTitle2: {
    marginBottom: 48,
  },
  checkBase: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pressView: {
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {},
  buttonCheck: {
    width: 32,
    height: 32,
  },
  PassButton: {
    marginTop: 12,
    alignItems: 'center',
  },
  PassButtonText: {
    color: colors.PRIMARY.DARK,
  },
});

export default RegisterMbtiScreen;
