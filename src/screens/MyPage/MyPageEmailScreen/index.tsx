// 내정보 - 계정관리 - 이메일
import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import Icon from 'react-native-vector-icons/AntDesign';
import {strings} from '@screens/MyPage/MyPageEmailScreen/string';
import InputView from '@src/components/Input';
import {FeedbackType} from '@components/Input/types';

interface Props {}
const MyPageEmailScreen: FunctionComponent<Props> =
  function MyPageEmailScreen() {
    const navigation = useScreenNavigation();
    const [email, setemail] = useState<string>('');
    const [idFeedbackType, setIdFeedbackType] = useState<FeedbackType>();
    const [idFeedbackText, setIdFeedbackText] = useState<string>();
    return (
      <SafeContainer style={styles.wrapper}>
        <Text style={styles.maintext}>{strings.MAIN}</Text>
        <Text style={styles.subtext}>{strings.TEXT1}</Text>
        <Text style={styles.subtext}>{strings.TEXT2}</Text>
        <View style={{paddingTop: 48}}>
          <InputView
            value={email}
            onChangeText={value => {
              setemail(email);
            }}
            feedbackText={idFeedbackText}
            feedbackType={idFeedbackType}
            style={styles.input}
            placeholder={'이메일'}
          />
        </View>
        <View style={styles.buttonArea}>
          <Button type={'Solid-Long'} label={strings.BTN1} onPress={() => {}} />
        </View>
      </SafeContainer>
    );
  };
export default MyPageEmailScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 28,
    paddingLeft: 30,
  },
  maintext: {
    paddingBottom: 10,
    color: colors.DARK_GREY4,
    fontWeight: '700',
    fontSize: 24,
  },
  subtext: {
    color: colors.GREY3,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
  },
  input: {
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
