import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Button from '@components/Button';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {strings} from '@screens/MyPage/MyPageAuthScreen/string';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPageScreen from '@screens/MyPage/MyPageScreen';
import RoomStartScreen from '@screens/RoomStartScreen';
import HomeScreen from '@screens/HomeScreen';

interface Props {}
const MyPageAuthScreen: FunctionComponent<Props> = function MyPageAuthScreen() {
  const navigation = useScreenNavigation();
  const BottomTab = createBottomTabNavigator();
  return (
    <SafeContainer style={[{backgroundColor: colors.WHITE}]}>
      {/* <View style={styles.textContainer}>
        <Text style={[styles.title, styles.top]}>{strings.EDITPROFILE}</Text>
        <Text style={styles.title}>
          <Text style={[styles.title, styles.strong]}>{strings.MENU1}</Text>
          <Text style={styles.title}>{strings.MENU2}</Text>
        </Text>
      </View> */}

      <BottomTab.Navigator>
        <BottomTab.Screen name="홈" component={HomeScreen} options={{headerShown : false}} />
        <BottomTab.Screen name="대화중인 방" component={MyPageScreen} options={{headerShown : false}} />
        <BottomTab.Screen name="방만들기 "  component={RoomStartScreen} options={{headerShown : false}} />
        <BottomTab.Screen name="내 정보 " component={MyPageScreen} options={{headerShown : false}} />
      </BottomTab.Navigator>
    </SafeContainer>
  );
};
export default MyPageAuthScreen;

const styles = StyleSheet.create({
  imageWrapper: {
    paddingLeft: 41,
    paddingRight: 45,
    width: 242,
  },
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
