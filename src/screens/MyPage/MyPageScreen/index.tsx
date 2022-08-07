import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import {strings} from '@screens/MyPage/MyPageScreen/string';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import Icon from 'react-native-vector-icons/AntDesign';
import MyPageProfilePng from 'assets/profile_logo.png';

interface Props {}
const MyPageAuthScreen: FunctionComponent<Props> = function MyPageAuthScreen() {
  const navigation = useScreenNavigation();
  const isregisterd = useState(false);
  return (
    <SafeContainer style={styles.wrapper}>
      <View style={styles.infowrapper}>
        <View>
          <Text style={styles.title}>개구리님</Text>
          <Text style={styles.text1}>홍익대학교</Text>
          <Text style={styles.text1}>시각디자인과 정채령</Text>
        </View>
        <View style = {{paddingLeft:116 }}/>
      <View style={styles.imageWrapper}>
        <Image source={MyPageProfilePng}/>
      </View>
      </View>

      <Button
        type={'Solid-Long-Gray'}
        label={'프로필 수정'}
        onPress={() => navigation.navigate('MyPageProfile')}
      />

      <View style={styles.menuwrapper}>
        <Pressable
          style={styles.buttonwrapper}
          onPress={() => navigation.navigate('MyPageAccount')}>
          <Text style={styles.menutext}>{strings.MENU1}</Text>
          <Icon name="right" size={20} color="#212529" />
        </Pressable>
        <Pressable
          style={styles.buttonwrapper}
          onPress={() => navigation.navigate('MyPageAlarm')}>
          <Text style={styles.menutext}>{strings.MENU2}</Text>
          <Icon name="right" size={20} color="#212529" />
        </Pressable>
        <Pressable
          style={styles.buttonwrapper}
          onPress={() => navigation.navigate('MyPageInfo')}>
          <Text style={styles.menutext}>{strings.MENU3}</Text>
          <Icon name="right" size={20} color="#212529" />
        </Pressable>
        <Pressable
          style={styles.buttonwrapper}
          onPress={() => navigation.navigate('MyPageOut')}>
          <Text style={styles.menutext}>{strings.MENU4}</Text>
          <Icon name="right" size={20} color="#212529" />
        </Pressable>
        <Pressable style={styles.buttonwrapper} onPress={() => {}}>
          <Text style={styles.menutext}>{strings.MENU5}</Text>
          <Icon name="right" size={20} color="#212529" />
        </Pressable>
      </View>
    </SafeContainer>
  );
};
export default MyPageAuthScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 38,
    paddingLeft: 16,
    paddingRight: 15,
  },
  infowrapper: 
  {
    flexDirection:'row',
    paddingBottom: 32,
  },
  menuwrapper: {
    paddingTop: 6,
  },
  buttonwrapper: {
    paddingTop: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    paddingBottom: 16,
    fontSize: 20,
    color: colors.DARK_GREY4,
  },
  text1: {
    fontWeight: '400',
  },
  menutext: {
    // paddingTop : 48,
    fontWeight: '400',
    color: colors.DARK_GREY4,
  },
  imageWrapper: {
    paddingLeft:41,
    paddingRight:45,
    width :242,
  },
  menuitem: {},
});
