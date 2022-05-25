import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {strings} from '@screens/RoomStartScreen/string';

interface Props {}

const RoomStartScreen: FunctionComponent<Props> = function RoomStartScreen() {
  const navigation = useScreenNavigation();
  return (
    <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, styles.top]}>{strings.START}</Text>
        <Text style={styles.title}>
          <Text style={[styles.title, styles.strong]}>{strings.MATE}</Text>
          <Text style={styles.title}>{strings.END}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type={'Solid-Long'}
          label="시작하기"
          style={styles.button}
          onPress={() => navigation.navigate('RoomSelect')}
        />
      </View>
    </SafeContainer>
  );
};
export default RoomStartScreen;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 30,
  },
  top: {
    marginTop: 52,
  },
  title: {
    color: colors.BLACK,
    fontSize: 28,
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

  button: {
    marginBottom: 16,
  },
});
