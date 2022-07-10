import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {ProgressBar} from 'react-native-paper';
import * as Progress from 'react-native-progress';
interface Props {}

const RoomSelectCntScreen: FunctionComponent<Props> = function RoomSelectCntScreen() {
  const navigation = useScreenNavigation();
  return (
    <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>몇 명까지 들어올 수 있나요?</Text>
      </View>

        {/* progress bar */}
        <View style={styles.textContainer2}>
          <Progress.Bar
            width={315}
            style={styles.progressBar}
            progress={0.3}
            unfilledColor={colors.LIGHT_GREY2}
            color={colors.PRIMARY.NORMAL}
          />
        </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.NextButton}
          onPress={() =>navigation.navigate('RoomSelectGender')}>
          <Text style={styles.NextButtonText}>0명</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
};
export default RoomSelectCntScreen;

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
  strong: {
    color: colors.PRIMARY.NORMAL,
  },
  buttonContainer: {
    // position: 'absolute',
    // bottom: '10%',
    // width: '100%',
    paddingHorizontal: 30,
    paddingTop:34,
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
