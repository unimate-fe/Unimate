import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {}
const MyPageAlarmScreen: FunctionComponent<Props> =
  function MyPageAccountScreen() {
    const navigation = useScreenNavigation();
    const isregisterd = useState(false);
    return (
      <SafeContainer style={styles.wrapper}>
        <View style={styles.menuwrapper}>
          <Pressable
            style={styles.buttonwrapper}
            onPress={() => {}}>
            <Text style={styles.menutext}>알림 설정 바로가기</Text>
            <Icon name="right" size={20} color="#212529" />
          </Pressable>
        </View>
      </SafeContainer>
    );
  };
export default MyPageAlarmScreen;

const styles = StyleSheet.create({
  wrapper: {
    // paddingTop: 48,
    paddingLeft: 16,
    paddingRight: 15,
  },
  menuwrapper: {},
  buttonwrapper: {
    paddingTop: 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menutext: {
    fontWeight: '400',
    color: colors.DARK_GREY4,
  },
});
