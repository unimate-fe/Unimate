import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';

import * as Progress from "react-native-progress";

interface Props {}

const RoomSelectScreen: FunctionComponent<Props> = function RoomSelectScreen() {
  const navigation = useScreenNavigation();
  const [chatRoom, setchatRoom] = useState(false);
  const [offRoom, setoffRoom] = useState(false);

  const onPress = () => 
  {
    if (chatRoom || offRoom) 
    {
      navigation.navigate('RoomSelectGrade');
    }
  };

  return (
    <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>어떤 방을 만들고 싶으세요?</Text>
      </View>

      {/* progress bar */}

      <View style={styles.buttonContainer}>
        <Text style={styles.subText}>채팅으로 친해지고 싶다면</Text>
        <Pressable
          style={[
            styles.NextButton,
            chatRoom
              ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
              : {backgroundColor: colors.LIGHT_GREY1},
          ]}
          onPress={() => {setchatRoom(!chatRoom); onPress();}}>
          <Text  style={[
            styles.NextButtonText,
            chatRoom
              ? {color: colors.PRIMARY.DARK}
              : {color: colors.GREY2},
          ]}>채팅방</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.subText}>오프라인 약속을 잡고 싶다면</Text>
        <Pressable
          style={[
            styles.NextButton,
            offRoom
              ? {backgroundColor: colors.PRIMARY.ULTRA_LIGHT}
              : {backgroundColor: colors.LIGHT_GREY1},
          ]}
          onPress={() =>{ setoffRoom(!offRoom);onPress();}}>
          <Text  style={[
            styles.NextButtonText,
            offRoom
              ? {color: colors.PRIMARY.DARK}
              : {color: colors.GREY2},
          ]}>약속방</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
};
export default RoomSelectScreen;

const styles = StyleSheet.create({
  textContainer: {
    // paddingHorizontal: 28,
  },
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
