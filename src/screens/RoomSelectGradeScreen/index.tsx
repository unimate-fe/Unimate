import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';

interface Props {}

const RoomSelectGradeScreen: FunctionComponent<Props> = function RoomSelectGradeScreen() {
  const navigation = useScreenNavigation();
  return (
    <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>메이트들의 학년을 선택해 주세요.</Text>
      </View>

{/* progress bar */}

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.NextButton}
          onPress={() => navigation.navigate('RoomStart')}>
          <Text style={styles.NextButtonText}>상관없음</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.NextButton}
          onPress={() => navigation.navigate('RoomStart')}>
          <Text style={styles.NextButtonText}>0학년만 입장 가능</Text>
        </Pressable>
      </View>

    </SafeContainer>
  );
};
export default RoomSelectGradeScreen;

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
    padding: 20,
    alignItems: 'center',
  },
  NextButtonText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#A4ACB3',
  },
});
