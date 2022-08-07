import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import {strings} from '@screens/MyPage/MyPageAccountScreen/string';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {}
const MyPageAccountScreen: FunctionComponent<Props> =
  function MyPageAccountScreen() {
    const navigation = useScreenNavigation();
    const isregisterd = useState(false);
    return (
      <SafeContainer style={styles.wrapper}>
        <View style={styles.menuwrapper}>
          <Pressable
            style={styles.buttonwrapper}
            onPress={() => navigation.navigate('MyPageSchool')}>
            <Text style={styles.menutext}>{strings.MENU1}</Text>
            <Icon name="right" size={20} color="#212529" />
          </Pressable>
          <Pressable
            style={styles.buttonwrapper}
            onPress={() => navigation.navigate('MyPagePassword')}>
            <Text style={styles.menutext}>{strings.MENU2}</Text>
            <Icon name="right" size={20} color="#212529" />
          </Pressable>
          <Pressable
            style={styles.buttonwrapper}
            onPress={() => navigation.navigate('MyPageEmail')}>
            <Text style={styles.menutext}>{strings.MENU3}</Text>
            <Icon name="right" size={20} color="#212529" />
          </Pressable>

        </View>
      </SafeContainer>
    );
  };
export default MyPageAccountScreen;

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
