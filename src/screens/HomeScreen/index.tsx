import React, {FunctionComponent, useEffect} from 'react';
import {Alert, StyleSheet, Text, View, Pressable} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Button from '@components/Button';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {strings} from '@screens/HomeScreen/string';

interface Props {}

const HomeScreen: FunctionComponent<Props> = function HomeScreen() {
  const navigation = useScreenNavigation();

  return (
    <SafeContainer style={[{backgroundColor: colors.BLACK}]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, styles.top]}>{strings.TITLE}</Text>
        <Text style={styles.title}>{strings.DESC}</Text>
        <Text style={[styles.title, styles.strong]}>{strings.DESC_STRONG}</Text>
      </View>
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
          onPress={() => navigation.navigate('RoomStart')}
        />

      </View>
    </SafeContainer>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 30,
  },
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
    width: '100%',
    paddingHorizontal: 30,
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
    fontWeight: "700",
    fontSize: 16,
    color: '#7E51FF',
  },
  button: {
    marginBottom: 16,
  },
});
