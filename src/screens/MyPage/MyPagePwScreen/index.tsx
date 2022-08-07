// 내정보 - 계정관리 - 비밀번호
import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import Icon from 'react-native-vector-icons/AntDesign';
import {strings} from '@screens/MyPage/MyPagePwScreen/string';
import InputView from '@src/components/Input';
import {FeedbackType} from '@components/Input/types';

interface Props {}
const MyPagePwScreen: FunctionComponent<Props> = function MyPagePwScreen() {
  const navigation = useScreenNavigation();
  const [oldpassword, setoldPassword] = useState<string>('');
  const [newpassword, setnewPassword] = useState<string>('');
  const [newpasswordConfirm, setnewPasswordConfirm] = useState<string>('');
  // 8자 이상이 아닐 경우
  const [err1, setErr1] = useState(false);
  // 비밀번호 불일치
  const [err2, setErr2] = useState(false);
  const [idFeedbackType, setIdFeedbackType] = useState<FeedbackType>();
  const [idFeedbackText, setIdFeedbackText] = useState<string>();
  return (
    <SafeContainer style={styles.wrapper}>
      <Text style={styles.maintext}>{strings.MAIN}</Text>
      <Text style={styles.subtext}>{strings.TEXT1}</Text>
      <View style={{paddingTop: 44}}>
        <Text style={styles.headertext}>{strings.TEXT2}</Text>
        <InputView
          value={oldpassword}
          onChangeText={value => {
            setoldPassword(oldpassword);
          }}
          feedbackText={idFeedbackText}
          feedbackType={idFeedbackType}
          style={styles.input}
          placeholder={'비밀번호'}
        />
      </View>
      <View style={{paddingTop: 32}}>
        <Text style={styles.headertext}>{strings.TEXT3}</Text>
        <InputView
          value={newpassword}
          onChangeText={value => {
            setnewPassword(newpassword);
            if (value.length < 8) {
              setErr1(true);
            } else {
              setErr1(false);
            }
          }}
          feedbackText={idFeedbackText}
          feedbackType={idFeedbackType}
          style={styles.input}
          placeholder={'새 비밀번호'}
        />
        <Text
          style={[
            styles.errtext,
            err1
              ? {
                  color: colors.ERROR,
                  fontSize: 14,
                  fontWeight: '400',
                  paddingTop: 8,
                }
              : {
                  color: '#FFFFFF',
                },
          ]}>
          {strings.ERR1}
        </Text>
        <InputView
          value={newpasswordConfirm}
          onChangeText={value => {
            setnewPasswordConfirm(newpasswordConfirm);
            if (value.toString() === newpassword) {
                setErr2(false);
              } else {
                setErr2(true);
              }
          }}
          feedbackText={idFeedbackText}
          feedbackType={idFeedbackType}
          style={styles.input}
          placeholder={'새 비밀번호 확인'}
        />
      </View>
      <View style={{paddingTop: 8}}/>
      <Text
        style={[
          styles.errtext,
          err2
            ? {
                color: colors.ERROR,
                fontSize: 14,
                fontWeight: '400',
                paddingTop: 8,
              }
            : {
                color: '#FFFFFF',
              },
        ]}>
        {strings.ERR2}
      </Text>
      <View style={styles.buttonArea}>
        <Button type={'Solid-Long'} label={strings.BTN1} onPress={() => {}} />
      </View>
    </SafeContainer>
  );
};
export default MyPagePwScreen;

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
    fontSize: 14,
    fontWeight: '400',
    paddingTop: 13,
  },
  headertext: {
    color: colors.DARK_GREY4,
    fontWeight: '400',
    fontSize: 16,
  },
  errtext: {
    color: colors.ERROR,
    fontSize: 14,
    fontWeight: '400',
  },
  input: {
    paddingTop: 7,
    width: 315,
    height: 56,
  },
  buttonArea: {
    paddingLeft: 30,
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  },
});
