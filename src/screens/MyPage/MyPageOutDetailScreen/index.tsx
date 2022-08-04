import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {strings} from '@screens/MyPage/MyPageOutDetailScreen/string';
import InputView from '@components/Input';
import {FeedbackType} from '@components/Input/types';

interface Props {}
const MyPageOutDetailScreen: FunctionComponent<Props> =
  function MyPageOutDetailScreen() {
    const navigation = useScreenNavigation();
    const [reason, setReason] = useState<string>('');
    const [idFeedbackType, setIdFeedbackType] = useState<FeedbackType>();
    const [idFeedbackText, setIdFeedbackText] = useState<string>();
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [isclicked, setClicked] = useState(false);
    const [isopen, setModal] = useState(false);
    const onPress = () => {};
    return (
      <SafeContainer style={styles.wrapper}>
        <Text style={styles.MAINTEXT}>{strings.MAIN}</Text>
        <View style={styles.buttonWrapper1}>
          <Pressable
            disabled={btn2}
            style={[
              styles.SUBTEXT,
              btn1
                ? {
                    backgroundColor: colors.PRIMARY.ULTRA_LIGHT,
                    borderColor: colors.PRIMARY.NORMAL,
                    borderWidth: 1,
                  }
                : {
                    backgroundColor: '#FFFFFF',
                    borderColor: colors.LIGHT_GREY3,
                    borderWidth: 1,
                  },
            ]}
            onPress={() => {
              setBtn1(!btn1);
              setClicked(true);
              onPress();
            }}>
            <Text style={[styles.SUBTEXT]}>{strings.TEXT1}</Text>
          </Pressable>
        </View>
        <View style={styles.buttonWrapper2}>
          <Pressable
            disabled={btn1}
            style={[
              styles.SUBTEXT,
              btn2
                ? {
                    backgroundColor: colors.PRIMARY.ULTRA_LIGHT,
                    borderColor: colors.PRIMARY.NORMAL,
                    borderWidth: 1,
                  }
                : {
                    backgroundColor: '#FFFFFF',
                    borderColor: colors.LIGHT_GREY3,
                    borderWidth: 1,
                  },
            ]}
            onPress={() => {
              setBtn2(!btn2);
              setClicked(true);
              onPress();
            }}>
            <Text style={[styles.SUBTEXT]}>{strings.TEXT2}</Text>
          </Pressable>
        </View>

        <View style={styles.inputWrapper}>
          <InputView
            value={reason}
            onChangeText={value => {
              setReason(reason);
            }}
            feedbackText={idFeedbackText}
            feedbackType={idFeedbackType}
            style={styles.input}
            placeholder={'기타(직접입력)'}
          />
        </View>

        <View style={styles.buttonArea}>
          <Button
            disabled={!isclicked}
            type={'Solid-Long'}
            label={'완료'}
            onPress={() => {
              setModal(true);
            }}
            // onPress={() => navigation.navigate('MyPageProfile')}
          />
        </View>
      </SafeContainer>
    );
  };
export default MyPageOutDetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    // alignItems: 'center',
  },
  MAINTEXT: {
    paddingTop: 28,
    paddingLeft: 30,
    color: colors.DARK_GREY4,
    fontWeight: '700',
    fontSize: 24,
    // lineHeight : 24,
  },
  SUBTEXT: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '400',
    color: colors.DARK_GREY4,
    lineHeight: 22.4,
    borderRadius: 12,
  },
  buttonWrapper1: {
    paddingTop: 38,
    paddingLeft: 30,
    paddingRight: 31,
  },
  buttonWrapper2: {
    paddingTop: 14,
    paddingLeft: 30,
    paddingRight: 31,
  },
  buttonArea: {
    paddingLeft: 30,
    paddingRight : 30,
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  },
  input: {
    flex: 1,
    paddingTop: 14,
    paddingBottom: 68,
  },
  inputWrapper: {
    paddingLeft: 30,
    paddingRight: 31,
  },
});
