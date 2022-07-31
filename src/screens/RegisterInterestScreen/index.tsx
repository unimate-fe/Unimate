import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import SafeContainer from '@components/SafeContainer';
import useScreenNavigation from '@hooks/useScreenNavigation';
import Typo from '@src/components/Typo';
import {colors} from '@src/components/Styles/colors';
import Button from '@src/components/Button';
import {INTERESTING_DATA} from './data';
import InterestLabel from './components/InterestLabel';
import useRegisterStore from '@src/hooks/useRegisterStore';

interface Props {}

const RegisterInterestScreen: FunctionComponent<Props> =
  function RegisterInterestScreen() {
    const navigation = useScreenNavigation();

    const [interestList, setInterestList] = useState<number[]>([]);
    const [submitValid, setSubmitValid] = useState(false);

    const [mbti, saveInterestList] = useRegisterStore(state => [
      state.mbti,
      state.saveInterestList,
    ]);

    useEffect(() => {
      console.log(JSON.stringify(mbti));
    }, [mbti]);

    const submitHandler = () => {
      saveInterestList(interestList);
      navigation.navigate('RegisterInfo');
    };

    const setIntersetListHandler = (value: number) => {
      setInterestList(prev => {
        if (prev.find(item => item === value)) {
          return prev.filter(item => item !== value);
        } else {
          return [...prev, value];
        }
      });
    };

    useEffect(() => {
      if (interestList.length > 0) {
        setSubmitValid(true);
      } else {
        setSubmitValid(false);
      }
    }, [interestList]);

    return (
      <SafeContainer>
        <View style={style.base}>
          <View style={style.headerView}>
            <Typo
              type={'H2'}
              style={{marginRight: 4, color: colors.DARK_GREY4}}>
              {'관심사를 선택해주세요.'}
            </Typo>
            <Typo type={'Body2'} style={style.errorText}>
              {'*최대 7개 선택'}
            </Typo>
          </View>
          <Typo type={'Body2'} style={style.descText}>
            {'나와 잘 맞는 친구를 찾기 위한 정보예요.\n정확하게 입력해 주세요!'}
          </Typo>

          {/* interest component */}

          <View style={style.interestView}>
            {INTERESTING_DATA.map(item => (
              <InterestLabel
                label={item.label}
                key={item.value}
                onPress={() => {
                  setIntersetListHandler(item.value);
                }}
                selected={interestList.includes(item.value)}
              />
            ))}
          </View>

          <Button
            label={'다음'}
            disabled={!submitValid}
            type={'Solid-Long'}
            onPress={submitHandler}
            style={{marginTop: 44}}
          />
        </View>
      </SafeContainer>
    );
  };
const style = StyleSheet.create({
  base: {
    paddingTop: 28,
    paddingHorizontal: 30,
  },
  errorText: {
    color: colors.ERROR,
  },
  descText: {
    color: colors.GREY4,
    marginBottom: 44,
  },
  headerView: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  interestView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default RegisterInterestScreen;
