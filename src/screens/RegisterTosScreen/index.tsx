import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {strings, termList, TermType} from '@screens/RegisterTosScreen/strings';
import useRegisterStore from '@hooks/useRegisterStore';
import {colors} from '@components/Styles/colors';
import {Icons} from '@assets/icons';
import Typo from '@components/Typo';
import SafeContainer from '@components/SafeContainer';
interface Props {}

const RegisterTosScreen: FunctionComponent<Props> =
  function RegisterTosScreen() {
    const navigation = useScreenNavigation();

    const [allSelect, setAllSelect] = useState(false);
    const [selectFirst, setSelectFirst] = useState(false);
    const [selectSecond, setSelectSecond] = useState(false);

    const [validation, setValidation] = useState(false);

    const {saveTos} = useRegisterStore();

    const submitHandler = () => {
      if (validation) {
        saveTos(selectFirst, selectSecond);
        navigation.navigate('RegisterIdPwd');
      }
    };
    const toAllSelect = () => {
      setSelectFirst(!allSelect);
      setSelectSecond(!allSelect);
      setAllSelect(prev => !prev);
    };

    const renderContent = (term: TermType, index: number) => {
      return (
        <View style={styles.content} key={index}>
          {term.id === 1 && (
            <Pressable
              style={styles.sectionTitleContainer}
              onPress={() => setSelectFirst(prev => !prev)}>
              <Image
                source={selectFirst ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={styles.checkImg}
              />
              <Typo type={'Body2'}>{term.title}</Typo>
            </Pressable>
          )}
          {term.id === 2 && (
            <Pressable
              style={styles.sectionTitleContainer}
              onPress={() => setSelectSecond(prev => !prev)}>
              <Image
                source={selectSecond ? Icons.CHECK_ON : Icons.CHECK_OFF}
                style={styles.checkImg}
              />
              <Typo type={'Body2'}>{term.title}</Typo>
            </Pressable>
          )}
          <ScrollView style={styles.scrollView}>
            <Text style={styles.contentText}>{term.content}</Text>
          </ScrollView>
        </View>
      );
    };

    useEffect(() => {
      if (allSelect) setValidation(true);
      else setValidation(false);
    }, [allSelect]);

    useEffect(() => {
      if (selectFirst && selectSecond) setAllSelect(true);
      else setAllSelect(false);
    }, [allSelect, selectFirst, selectSecond]);

    return (
      <SafeContainer style={styles.safeView}>
        <View style={styles.view}>
          <Typo type={'H2'} style={styles.pageTitle1}>
            이용 약관 동의
          </Typo>
          <Pressable
            onPress={toAllSelect}
            style={[
              styles.button,
              allSelect
                ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                : {backgroundColor: colors.LIGHT_GREY1},
            ]}>
            <Image
              source={allSelect ? Icons.CHECK_ON : Icons.CHECK_OFF}
              style={styles.buttonCheck}
            />
            <Typo type={'Label'} style={styles.buttonText}>
              {'모두 동의합니다'}
            </Typo>
          </Pressable>

          {termList.map((term, index) => renderContent(term, index))}
          <View style={styles.inputContainer}>
            <Button
              type={'Solid-Long'}
              label={strings.NEXT}
              onPress={submitHandler}
              disabled={!validation}
            />
          </View>
        </View>
      </SafeContainer>
    );
  };
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  view: {
    paddingHorizontal: 30,
  },
  pageTitle1: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
    marginBottom: 48,
    marginTop: 28,
  },
  button: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.DARK_GREY4,
  },
  scrollView: {
    borderWidth: 1,
    borderColor: colors.LIGHT_GREY2,
    borderRadius: 12,
    height: 120,
    padding: 14,
  },
  buttonCheck: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 12,
  },
  checkImg: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  sectionTitleContainer: {
    marginBottom: 8,
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 11,
    color: colors.GREY2,
  },
  label: {
    paddingLeft: 5,
    fontSize: 16,
  },
  buttonZone: {
    padding: 37,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 44,
  },
  content: {},
});

export default RegisterTosScreen;
