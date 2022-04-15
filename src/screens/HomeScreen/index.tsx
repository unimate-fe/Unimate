import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import useScreenNavigation from '@hooks/useScreenNavigation';

interface Props {}

const HomeScreen: FunctionComponent<Props> = function HomeScreen() {
  const navigation = useScreenNavigation();
  return (
    <View style={styles.Container}>
      <Text style={[styles.Title, styles.Top]}>대학 친구를</Text>
      <Text style={styles.Title}>만나는 새로운 방법,</Text>
      <Text style={[styles.Title, styles.Strong]}>유니메이트!</Text>
      <View style={styles.ButtonContainer}>
        <Button
          type={'Solid-Long'}
          label={'회원가입'}
          style={styles.Button}
          onPress={() => navigation.navigate('RegisterSchool')}
        />
        <Button
          type={'Solid-Long-White'}
          label={'로그인'}
          onPress={() => Alert.alert('아직 구현되지 않은 화면입니다.')}
        />
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  Top: {
    marginTop: '30%',
  },
  Title: {
    color: colors.WHITE,
    fontSize: 34,
    fontWeight: '700',
  },
  Strong: {
    color: colors.PRIMARY.NORMAL,
  },
  ButtonContainer: {
    position: 'absolute',
    bottom: '10%',
    left: 30,
    width: '100%',
  },
  Button: {
    marginBottom: 16,
  },
});
