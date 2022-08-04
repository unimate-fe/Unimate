import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SafeContainer from '@components/SafeContainer';
import useScreenNavigation from '@hooks/useScreenNavigation';
import Typo from '@src/components/Typo';
import {colors} from '@src/components/Styles/colors';
import Button from '@src/components/Button';
import InterestLabel from './components/InterestLabel';
import useRegisterStore from '@src/hooks/useRegisterStore';
import {useQuery} from 'react-query';
import {getInterestList} from '@src/apis/registerApis';
import {Interest} from '@src/apis/registerApis/types';

const RegisterInterestScreen: FunctionComponent =
  function RegisterInterestScreen() {
    const navigation = useScreenNavigation();

    const [interestList, setInterestList] = useState<Interest[]>([]);
    const [selectedIdList, setSelectedIdList] = useState<number[]>([]);
    const [submitValid, setSubmitValid] = useState(false);

    const [saveInterestList] = useRegisterStore(state => [
      state.saveInterestList,
    ]);

    useQuery(['getInterestList'], getInterestList, {
      retry: false,
      onSuccess: data => {
        setInterestList(data);
      },
    });

    const submitHandler = () => {
      saveInterestList(interestList.map(item => item.id));
      navigation.navigate('RegisterInfo');
    };

    const setInterestListHandler = (interestItem: Interest) => {
      setSelectedIdList(prev => {
        if (prev.find(id => id === interestItem.id)) {
          return prev.filter(id => id !== interestItem.id);
        } else {
          return [...prev, interestItem.id];
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
        <ScrollView style={style.base}>
          <View style={style.headerView}>
            <Typo type={'H2'} style={style.titleStyle}>
              {'관심사를 선택해주세요.'}
            </Typo>
            <Typo type={'Body2'} style={style.errorText}>
              {'*최대 7개 선택'}
            </Typo>
          </View>
          <Typo type={'Body2'} style={style.descText}>
            {'나와 잘 맞는 친구를 찾기 위한 정보예요.\n정확하게 입력해 주세요!'}
          </Typo>

          <View style={style.interestView}>
            {interestList.map(item => (
              <InterestLabel
                label={item.interest}
                key={item.id}
                onPress={() => {
                  setInterestListHandler(item);
                }}
                selected={selectedIdList.includes(item.id)}
              />
            ))}
          </View>

          <Button
            label={'다음'}
            disabled={!submitValid}
            type={'Solid-Long'}
            onPress={submitHandler}
            style={style.buttonStyle}
          />
        </ScrollView>
      </SafeContainer>
    );
  };
const style = StyleSheet.create({
  base: {
    paddingHorizontal: 30,
  },
  titleStyle: {
    marginRight: 4,
    color: colors.DARK_GREY4,
  },
  errorText: {
    color: colors.ERROR,
  },
  descText: {
    color: colors.GREY4,
    marginBottom: 44,
  },
  headerView: {
    paddingTop: 28,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  interestView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonStyle: {
    marginTop: 44,
    paddingBottom: 32,
  },
});

export default RegisterInterestScreen;
