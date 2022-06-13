import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {ProgressBar} from 'react-native-paper';
import * as Progress from 'react-native-progress';
interface Props {}

const RoomSelectGradeScreen: FunctionComponent<Props> =
  function RoomSelectGradeScreen() {
    const navigation = useScreenNavigation();
    const [NONE, setNONE] = useState(false);
    const [GRADE, setGRADE] = useState(false);
    const onPress = () => {
      if (NONE || GRADE) {
        navigation.navigate('RoomSelectCnt');
      }
    };
    return (
      <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>메이트들의 학년을 선택해 주세요.</Text>
        </View>

        {/* progress bar */}
        <View style={styles.textContainer2}>
          <Progress.Bar
            width={315}
            style={styles.progressBar}
            progress={0.2}
            unfilledColor={colors.LIGHT_GREY2}
            color={colors.PRIMARY.NORMAL}
          />
        </View>

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
              상관 없음
            </Text>
          </Pressable>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={[
              styles.NextButton,
              GRADE
                ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
                : {backgroundColor: colors.LIGHT_GREY1},
            ]}
            onPress={() => {
              setGRADE(!GRADE);
              onPress();
            }}>
            <Text
              style={[
                styles.NextButtonText,
                GRADE ? {color: colors.PRIMARY.DARK} : {color: colors.GREY2},
              ]}>
              0학년만 입장 가능
            </Text>
          </Pressable>
        </View>
      </SafeContainer>
    );
  };
export default RoomSelectGradeScreen;

const styles = StyleSheet.create({
  textContainer: {},
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
