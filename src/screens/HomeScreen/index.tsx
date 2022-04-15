import React, {FunctionComponent, useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {strings} from '@screens/HomeScreen/string';
import {request} from '@src/apis/client';
import {HttpMethod} from '@src/apis/client/types';

interface Props {}

const HomeScreen: FunctionComponent<Props> = function HomeScreen() {
  const navigation = useScreenNavigation();

  return (
    <SafeContainer style={[{backgroundColor: colors.BLACK}, styles.base]}>
      <Text style={[styles.title, styles.top]}>{strings.TITLE}</Text>
      <Text style={styles.title}>{strings.DESC}</Text>
      <Text style={[styles.title, styles.strong]}>{strings.DESC_STRONG}</Text>
      <View style={styles.buttonContainer}>
        <Button
          type={'Solid-Long'}
          label={strings.REGISTER}
          style={styles.button}
          onPress={() => navigation.navigate('RegisterSchool')}
        />
        <Button
          type={'Solid-Long-White'}
          label={strings.LOGIN}
          onPress={() => Alert.alert('아직 구현되지 않은 화면입니다.')}
        />
      </View>
    </SafeContainer>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  base: {},
  top: {
    marginTop: '30%',
  },
  title: {
    color: colors.WHITE,
    fontSize: 34,
    fontWeight: '700',
  },
  strong: {
    color: colors.PRIMARY.NORMAL,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '10%',
    left: 30,
    width: '100%',
  },
  button: {
    marginBottom: 16,
  },
});
