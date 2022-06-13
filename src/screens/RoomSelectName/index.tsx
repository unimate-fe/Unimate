import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {ProgressBar} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import InputView from '@components/Input';
import {FeedbackType} from '@components/Input/types';

interface Props {}

const RoomSelectName: FunctionComponent<Props> = function RoomSelectName() {
  const navigation = useScreenNavigation();
  const [NAME, setNAME] = useState<string>();
  const [NAMEText, setNAMEText] = useState<string>();
  const [NAMETextType, setNAMETextType] = useState<FeedbackType>();

  const onPress = () => {
    if (NAME) {
      navigation.navigate('RoomSelectGrade');
    }
  };
  return (
    <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
      <View>
        <Text style={styles.title}>방의 이름을 지어주세요.</Text>
      </View>

      {/* progress bar */}
      <View style={styles.textContainer2}>
        <Progress.Bar
          width={315}
          style={styles.progressBar}
          progress={0.6}
          unfilledColor={colors.LIGHT_GREY2}
          color={colors.PRIMARY.NORMAL}
        />
      </View>

      <View style={styles.textContainer} />

      <View style={styles.inputContainer}>
        <InputView
          value={NAME}
          onChangeText={value => {
            setNAME(value);
          }}
          style={styles.input}
          placeholder={'방 이름'}
          feedbackText={NAMEText}
          feedbackType={NAMETextType}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          type={'Solid-Long'}
          label="다음"
          style={styles.button}
          onPress={() => navigation.navigate('RoomSelectDetail')}
        />
      </View>
    </SafeContainer>
  );
};
export default RoomSelectName;

const styles = StyleSheet.create({
  textContainer: {
    // paddingHorizontal: 28,
    paddingTop: 48,
  },
  title: {
    color: '#212529',
    fontSize: 24,
    fontWeight: '700',
    paddingLeft: 30,
  },
  inputContainer: {
    paddingLeft: 30,
    paddingRight : 30,
  },
  textContainer2: {
    paddingLeft: 30,
    paddingTop: 48,
    borderColor: '#EAEBEF',
  },
  progressBar: {
    // width:315,
    // height : 4
    borderColor: colors.LIGHT_GREY2,
  },
  subText: {
    color: '#656E75',
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 16,
  },
  subText2: {
    color: '#9678FE',
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 16,
    paddingLeft: 30,
    paddingTop: 16,
  },
  strong: {
    color: colors.PRIMARY.NORMAL,
  },
  buttonContainer: {
    // position: 'absolute',
    // bottom: '10%',
    // width: '100%',
    paddingHorizontal: 30,
    paddingTop: 44,
  },
  button: {
    marginBottom: 16,
  },
  NextButton: {
    width: 315,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F2F4F8',
    padding: 18,
    alignItems: 'center',
  },
  NextButtonText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#A4ACB3',
  },
  input: {
    marginBottom: 44,
  },
});
