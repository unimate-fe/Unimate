import React, {FunctionComponent,useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {ProgressBar} from 'react-native-paper';
import * as Progress from 'react-native-progress';
interface Props {}

const RoomSelectGender: FunctionComponent<Props> = function RoomSelectGender() {
    const navigation = useScreenNavigation();
    const [Gender, setGender] = useState(false);
    const [sameGender, setsameGeder] = useState(false); 
    
    const onPress = () => 
    {
      if (Gender || sameGender) 
      {
        navigation.navigate('RoomSelectSame');
      }
    };
  return (
    <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>메이트들의 성별을 선택해 주세요.</Text>
      </View>

        <View style={styles.textContainer2}>
          <Progress.Bar
            width={315}
            style={styles.progressBar}
            progress={0.4}
            unfilledColor={colors.LIGHT_GREY2}
            color={colors.PRIMARY.NORMAL}
          />
        </View>
<View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.NextButton,
            Gender
              ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
              : {backgroundColor: colors.LIGHT_GREY1},
          ]}
          onPress={() => {setGender(!Gender); onPress();}}>
          <Text  style={[
            styles.NextButtonText,
            Gender
              ? {color: colors.PRIMARY.DARK}
              : {color: colors.GREY2},
          ]}>상관 없음</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.NextButton,
            sameGender
              ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
              : {backgroundColor: colors.LIGHT_GREY1},
          ]}
          onPress={() =>{ setsameGeder(!sameGender);onPress();}}>
          <Text  style={[
            styles.NextButtonText,
            sameGender
              ? {color: colors.PRIMARY.DARK}
              : {color: colors.GREY2},
          ]}>같은 성별만</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
};
export default RoomSelectGender;

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
