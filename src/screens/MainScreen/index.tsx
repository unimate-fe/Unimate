// 홈 (메인 스크린)
import React, {FunctionComponent, useEffect} from 'react';
import {Alert, StyleSheet, Text, View, Pressable} from 'react-native';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {strings} from '@screens/MainScreen/string';

interface Props {}

const MainScreen: FunctionComponent<Props> = function MainScreen() {
  const navigation = useScreenNavigation();
  return (
    <SafeContainer>
      <View style={styles.titlewrapper}>
        <Text style={styles.maintext1}>{strings.TITLE1}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.maintext1}>{strings.TITLE2}</Text>
          <Text style={styles.maintext2}>{strings.TITLE3}</Text>
        </View>
      </View>

      <View>

      </View>

    </SafeContainer>
  );
};
export default MainScreen;

const styles = StyleSheet.create({
  titlewrapper: 
  {
    paddingTop: 48,
    paddingBottom: 20,
    paddingLeft: 16,
  },
  searchwrapper:
  {
    paddingTop: 48,
  },
  maintext1: 
  {
    fontWeight: '700',
    fontSize: 24,
    color: colors.DARK_GREY4,
  },
  maintext2: 
  {
    fontWeight: '700',
    fontSize: 24,
    color: colors.PRIMARY.DARK,
  },
});
