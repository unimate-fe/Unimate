import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {strings} from '@screens/MyPage/MyPageOutScreen/string';

interface Props {}
const MyPageOutScreen: FunctionComponent<Props> = function MyPageOutScreen() {
  const navigation = useScreenNavigation();
  const isregisterd = useState(false);
  return (
    <SafeContainer style={styles.wrapper}>
      <Text style={styles.MAINTEXT}>{strings.MAIN}</Text>
      <Text style={styles.SUBTEXT}>{strings.SUB1}</Text>
      <Text style={styles.SUBTEXT}>{strings.SUB2}</Text>

      <View style={styles.buttonWrapper}>
        <Button
          type={'Solid-Long'}
          label={strings.BTN1}
          onPress={() =>{}}
        />
        <Button
          style={{paddingTop:14}}
          type={'Solid-Long-LightGrey'}
          label={strings.BTN2}
          onPress={() => navigation.navigate('MyPageOutDetail')}
        />
      </View>
    </SafeContainer>
  );
};
export default MyPageOutScreen;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    // paddingLeft: 30,
    // paddingRight : 30,
  },
  MAINTEXT: {
    color: colors.DARK_GREY4,
    fontWeight: '700',
    fontSize: 24,
    paddingBottom : 16,
    // lineHeight : 24,
  },
  SUBTEXT: {
    fontSize : 16,
    color: colors.GREY4,
    fontWeight: '400',
    lineHeight : 22.4,
  },
  buttonWrapper: {
    paddingTop : 60,
    paddingLeft: 30,
    paddingRight: 30,
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  },
});
