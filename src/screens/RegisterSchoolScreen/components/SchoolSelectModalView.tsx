import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Input from '@components/Input';
import {strings} from '@screens/RegisterSchoolScreen/string';
import Button from '@components/Button';
import {UniversityType} from '@screens/RegisterSchoolScreen/api/types';
import Typo from '@components/Typo';
import {colors} from '@components/Styles/colors';

interface Props {
  data?: UniversityType[];
  onClose?: () => void;
}
const SchoolSelectModalView: FunctionComponent<Props> =
  function SchoolSelectModalView({data, onClose}) {
    const renderUniversity: FunctionComponent<{item: UniversityType}> = ({
      item,
    }) => {
      return (
        <Typo type={'Body1'} style={styles.contentItem}>
          {item.university}
        </Typo>
      );
    };

    console.log('data: ', data);

    return (
      <View style={styles.base}>
        <Input placeholder={strings.PLACEHOLDER_SCHOOL} />
        <FlatList<UniversityType>
          data={data}
          renderItem={renderUniversity}
          style={styles.contentContainer}
        />
        <View style={styles.btnContainer}>
          {onClose && (
            <Button
              type={'Solid-Short-Cancel'}
              label={strings.CANCEL}
              onPress={onClose}
              style={styles.cancelBtn}
            />
          )}
          <Button
            type={'Solid-Short-Confirm'}
            label={strings.CONFIRM}
            onPress={() => {}}
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
    borderWidth: 1,
    flex: 1,
  },
  contentItem: {
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
