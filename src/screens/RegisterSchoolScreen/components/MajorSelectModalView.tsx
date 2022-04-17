import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Input from '@components/Input';
import {strings} from '@screens/RegisterSchoolScreen/string';
import Button from '@components/Button';
import {MajorType} from '@src/apis/fetchSchool/types';
import Pressable from '@components/Pressable';
import Typo from '@components/Typo';
import {colors} from '@components/Styles/colors';

interface Props {
  data?: MajorType[];
  onClose: () => void;
  majorHandler: (atr: string) => void;
}
const MajorSelectModalView: FunctionComponent<Props> =
  function MajorSelectModalView({data, onClose, majorHandler}) {
    const [text, setText] = useState<string>();
    const [filterList, setFilterList] = useState<MajorType[]>();
    const [listShow, setListShow] = useState(true);

    const selectItemHandler = (item: string) => {
      setText(item);
      setListShow(false);
    };

    const selectConfirmHandler = () => {
      if (text && !listShow) {
        majorHandler(text);
        onClose();
      }
    };

    useEffect(() => {
      setFilterList(
        data?.filter(item => {
          if (text) return item.major.includes(text);
          return false;
        }),
      );
    }, [text]);

    const renderMajor: FunctionComponent<{item: MajorType}> = ({item}) => {
      return (
        <Pressable
          style={styles.itemWrapper}
          onPress={() => selectItemHandler(item.major)}>
          <Typo type={'Body1'} style={styles.item}>
            {item.major}
          </Typo>
        </Pressable>
      );
    };

    return (
      <View style={styles.base}>
        <Input
          value={text}
          defaultValue={text}
          placeholder={strings.PLACEHOLDER_DEPART}
          onChangeText={value => {
            setText(value);
            setListShow(true);
          }}
        />
        {filterList && listShow && (
          <FlatList<MajorType>
            data={filterList}
            renderItem={renderMajor}
            style={styles.contentContainer}
            keyExtractor={item => `${item.id}`}
          />
        )}
        <View style={styles.btnContainer}>
          <Button
            type={'Solid-Short-Cancel'}
            label={strings.CANCEL}
            onPress={onClose}
            style={styles.cancelBtn}
          />

          <Button
            type={'Solid-Short-Confirm'}
            label={strings.CONFIRM}
            onPress={selectConfirmHandler}
            style={styles.confirmBtn}
          />
        </View>
      </View>
    );
  };
export default MajorSelectModalView;

const styles = StyleSheet.create({
  base: {
    height: 480,
    paddingHorizontal: 20,
    paddingVertical: 35,
    justifyContent: 'space-between',
  },
  contentContainer: {
    borderWidth: 1,
    flex: 1,
    padding: 24,
  },
  itemWrapper: {
    borderWidth: 1,
    paddingBottom: 18,
  },
  item: {
    color: colors.DARK_GREY3,
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  cancelBtn: {
    flex: 1,
    marginRight: 12,
  },
  confirmBtn: {
    flex: 1,
  },
});
