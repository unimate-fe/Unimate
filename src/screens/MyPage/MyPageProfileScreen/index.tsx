import React, {FunctionComponent, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, FlatList} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import {strings} from '@screens/MyPage/MyPageScreen/string';
import Button from '@components/Button';
import InputView from '@components/Input';
import Input from '@components/Input';
import Typo from '@components/Typo';
import {UniversityType} from '@src/apis/registerApis/types';
import useScreenNavigation from '@hooks/useScreenNavigation';

interface Props {
  data?: UniversityType[];
  onClose: () => void;
  schoolHandler: (atr: string) => void;
}
const MyPageProfileScreen: FunctionComponent<Props> =
  function MyPageProfileScreen() {
    const navigation = useScreenNavigation();
    const [Nickname, setNickname] = useState<string>();
    const [text, setText] = useState<string>();
    const [filterList, setFilterList] = useState<UniversityType[]>();
    const [listShow, setListShow] = useState(true);

    const selectItemHandler = (item: string) => {
      setText(item);
      setListShow(false);
    };

    const renderUniversity: FunctionComponent<{item: UniversityType}> = ({
      item,
    }) => {
      return (
        <Pressable
          style={styles.itemWrapper}
          onPress={() => selectItemHandler(item.university)}>
          <Typo type={'Body1'} style={styles.item}>
            {item.university}
          </Typo>
        </Pressable>
      );
    };
    return (
      <SafeContainer style={styles.wrapper}>
        <View style={styles.wrapper1}>
          <Text style={styles.text1}>닉네임 변경</Text>
          <View style={styles.buttonwrapper}>
            <InputView
              value={Nickname}
              onChangeText={value => {
                setNickname(value);
              }}
              style={styles.input}
              placeholder={'닉네임'}
            />
            <Button
              type={'Solid-Short-Confirm'}
              label={'중복 확인 '}
              onPress={() => {}}
            />
          </View>
          <Text style={styles.errtext}>이미 사용 중인 닉네임이에요.</Text>
        </View>
        <View style={styles.wrapper2}>
          <Text style={styles.text1}>학생 정보 변경</Text>
          <View style={styles.buttonwrapper}>
            <InputView
              value={Nickname}
              onChangeText={value => {
                setNickname(value);
              }}
              style={styles.input}
              placeholder={'홍익대학교'}
            />
            <Button
              type={'Solid-Short-Confirm'}
              label={'학교 인증'}
              onPress={() => {}}
            />
          </View>
          <Input
            style={{paddingTop: 14}}
            value={text}
            defaultValue={text}
            placeholder={'select school'}
            onChangeText={value => {
              setText(value);
              setListShow(true);
            }}
          />
          {filterList && listShow && (
            <FlatList<UniversityType>
              data={filterList}
              renderItem={renderUniversity}
              style={styles.contentContainer}
              keyExtractor={item => `${item.id}`}
            />
          )}
        </View>
        <View style={styles.wrapper3}>
          <Text style={styles.text1}>개인 정보 변경</Text>
          <Input
            value={text}
            defaultValue={text}
            placeholder={'이름'}
            onChangeText={value => {}}
          />
          <Input
            style={{paddingTop: 14}}
            value={text}
            defaultValue={text}
            placeholder={'생년 월일'}
            onChangeText={value => {}}
          />
          <Input
            style={{paddingTop:14}}
            value={text}
            defaultValue={text}
            placeholder={'자기 소개'}
            onChangeText={value => {}}
          />
        </View>
        <View style={styles.buttonwrapper}>
          <Button
            type={'Solid-Confirm-Secondary'}
            label={'여성'}
            onPress={() => {}}
          />
          <Button
            type={'Solid-Confirm-LightGrey'}
            label={'남성'}
            onPress={() => {}}
          />
        </View>
      </SafeContainer>
    );
  };
export default MyPageProfileScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  item: {
    color: colors.DARK_GREY3,
  },
  itemWrapper: {
    paddingBottom: 18,
  },
  text1: {
    fontSize: 16,
    color: '#212529',
    fontWeight: '400',
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  buttonwrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // flexBasis : 10,
    // display :'flex',
  },
  errtext: {
    paddingTop: 8,
    color: colors.ERROR,
    fontSize: 14,
  },
  input: {
    paddingTop: 8,
    width: 225,
    height: 56,
  },
  wrapper1: {paddingTop: 44},
  wrapper2: {paddingTop: 44},
  wrapper3: {paddingTop: 44, paddingBottom :44},
});
