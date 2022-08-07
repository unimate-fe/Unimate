// 내정보 - 계정관리 - 학교인증
import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import Icon from 'react-native-vector-icons/AntDesign';
import {strings} from '@screens/MyPage/MyPageSchoolScreen/string';
import InputView from '@src/components/Input';
import {FeedbackType} from '@components/Input/types';

interface Props {}
const MyPageSchoolScreen: FunctionComponent<Props> =
  function MyPageSchoolScreen() {
    const navigation = useScreenNavigation();
    const [email, setemail] = useState<string>('');
    const [certNum, setcertNum] = useState<string>('');
    const [idFeedbackType, setIdFeedbackType] = useState<FeedbackType>();
    const [idFeedbackText, setIdFeedbackText] = useState<string>();
    return (
      <SafeContainer style={styles.wrapper}>
        <Text style={styles.maintext}>{strings.MAIN}</Text>
        <View
          style={{paddingTop: 48, alignItems: 'center', flexDirection: 'row'}}>
          <InputView
            value={email}
            onChangeText={value => {
              setemail(email);
            }}
            feedbackText={idFeedbackText}
            feedbackType={idFeedbackType}
            style={styles.input}
            placeholder={strings.TEXT1}
          />
          <Button
            style={{paddingLeft: 10, width: 80, height: 56}}
            type={'Solid-Short-Confirm'}
            label={strings.BTN1}
            onPress={() => {}}
          />
        </View>
        <View>
          <InputView
            value={certNum}
            onChangeText={value => {
              setcertNum(certNum);
            }}
            feedbackText={idFeedbackText}
            feedbackType={idFeedbackType}
            style={styles.input2}
            placeholder={strings.TEXT2}
          />
        </View>
        <View style={{paddingTop: 44}}>
          <Button
            style={{paddingLeft: 10, width: 315}}
            type={'Solid-Long'}
            label={strings.BTN2}
            onPress={() => {}}
          />
        </View>
        <View style={{paddingTop: 22}}>
          <Text style={styles.subtext}>{strings.REF1}</Text>

          <Text style={styles.subtext}>{strings.REF2}</Text>
          <Text style={styles.subtext}>{strings.REF3}</Text>
          <Text style={styles.subtext}>{strings.REF4}</Text>
        </View>
      </SafeContainer>
    );
  };
export default MyPageSchoolScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 28,
    paddingLeft: 30,
  },
  maintext: {
    color: colors.DARK_GREY4,
    fontWeight: '700',
    fontSize: 24,
  },
  subtext: {
    color: colors.GREY3,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
    paddingBottom: 8,
  },
  input: {
    paddingTop: 7,
    width: 225,
    height: 56,
  },
  input2: {
    paddingTop: 14,
    width: 315,
    height: 56,
  },
});
