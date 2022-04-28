import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Input from '@components/Input';
import Button from '@components/Button';
import Typo from '@components/Typo';
import {colors} from '@components/Styles/colors';
import Pressable from '@components/Pressable';
import {UniversityType} from '@src/apis/registerApis/types';
import {strings} from '@screens/RegisterSchoolScreen/string';

interface Props {
  data?: UniversityType[];
  onClose: () => void;
  schoolHandler: (atr: string) => void;
}
const SchoolSelectModalView: FunctionComponent<Props> =
  function SchoolSelectModalView({data, onClose, schoolHandler}) {
    const [text, setText] = useState<string>();
    const [filterList, setFilterList] = useState<UniversityType[]>();
    const [listShow, setListShow] = useState(true);

    const selectItemHandler = (item: string) => {
      setText(item);
      setListShow(false);
    };

    const selectConfirmHandler = () => {
      if (text && !listShow) {
        schoolHandler(text);
        onClose();
      }
    };

    useEffect(() => {
      setFilterList(
        data?.filter(item => {
          if (text) return item.university.includes(text);
          return false;
        }),
      );
    }, [text]);

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
      <View style={styles.base}>
        <Input
          value={text}
          defaultValue={text}
          placeholder={strings.PLACEHOLDER_SCHOOL}
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
            disabled={listShow}
            style={styles.confirmBtn}
          />
        </View>
      </View>
    );
  };
export default SchoolSelectModalView;

const styles = StyleSheet.create({
  base: {
    height: 480,
    paddingHorizontal: 20,
    paddingVertical: 35,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  itemWrapper: {
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
