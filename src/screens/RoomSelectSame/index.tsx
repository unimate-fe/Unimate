import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {ProgressBar} from 'react-native-paper';
import * as Progress from 'react-native-progress';


interface Props {}

const RoomSelectSame: FunctionComponent<Props> = function RoomSelectSame() {
  const navigation = useScreenNavigation();
  const [MBTI, setMBTI] = useState(false);
  const [INTEREST, setINTEREST] = useState(false);
  const [COLLEGE, setCOLLEGE] = useState(false);
  const [NONE, setNONE] = useState(false);

  const onPress = () => {
    if (MBTI || INTEREST || COLLEGE || NONE) {
      navigation.navigate('RoomSelectName');
    }
  };
  return (
    <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>방의 공통점을 골라주세요.</Text>
      </View>

      {/* progress bar */}
      <View style={styles.textContainer2}>
        <Progress.Bar
          width={315}
          style={styles.progressBar}
          progress={0.5}
          unfilledColor={colors.LIGHT_GREY2}
          color={colors.PRIMARY.NORMAL}
        />
      </View>

      {/* MBTI */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.NextButton,
            MBTI
              ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
              : {backgroundColor: colors.LIGHT_GREY1},
          ]}
          onPress={() => {
            setMBTI(!MBTI);
            onPress();
          }}>
          <Text
            style={[
              styles.NextButtonText,
              MBTI ? {color: colors.PRIMARY.DARK} : {color: colors.GREY2},
            ]}>
            MBTI
          </Text>
        </Pressable>
      </View>

      {/* INTEREST */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.NextButton,
            INTEREST
              ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
              : {backgroundColor: colors.LIGHT_GREY1},
          ]}
          onPress={() => {
            setINTEREST(!INTEREST);
            onPress();
          }}>
          <Text
            style={[
              styles.NextButtonText,
              INTEREST ? {color: colors.PRIMARY.DARK} : {color: colors.GREY2},
            ]}>
            관심사
          </Text>
        </Pressable>
      </View>

      {/* 단과대 */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.NextButton,
            COLLEGE
              ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
              : {backgroundColor: colors.LIGHT_GREY1},
          ]}
          onPress={() => {
            setCOLLEGE(!COLLEGE);
            onPress();
          }}>
          <Text
            style={[
              styles.NextButtonText,
              COLLEGE ? {color: colors.PRIMARY.DARK} : {color: colors.GREY2},
            ]}>
            단과대
          </Text>
        </Pressable>
      </View>

      {/* 없음 */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.NextButton,
            NONE
              ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
              : {backgroundColor: colors.LIGHT_GREY1},
          ]}
          onPress={() => {
            setNONE(!NONE);
            onPress();
          }}>
          <Text
            style={[
              styles.NextButtonText,
              NONE ? {color: colors.PRIMARY.DARK} : {color: colors.GREY2},
            ]}>
            없음
          </Text>
        </Pressable>
      </View>
      <Text style={styles.subText2}>나와 MBTI가 비슷한 메이트를 만날 수 있어요.</Text>
    </SafeContainer>
  );
};
export default RoomSelectSame;

const styles = StyleSheet.create({
  textContainer: {
    // paddingHorizontal: 28,
  },
  //   top: {
  //     marginTop: 28,
  //   },
  title: {
    color: '#212529',
    fontSize: 24,
    fontWeight: '700',
    paddingLeft: 30,
  },
  textContainer2: {
    paddingLeft : 30,
    paddingTop : 20 ,
    borderColor : "#EAEBEF", 
  },
  progressBar: {
    // width:315,
    // height : 4
    borderColor: colors.LIGHT_GREY2
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
    paddingLeft : 30,
    paddingTop:16
  },
  strong: {
    color: colors.PRIMARY.NORMAL,
  },
  buttonContainer: {
    // position: 'absolute',
    // bottom: '10%',
    // width: '100%',
    paddingHorizontal: 30,
    paddingTop: 34,
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
});
