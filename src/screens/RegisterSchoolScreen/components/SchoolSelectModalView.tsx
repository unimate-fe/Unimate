import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '@components/Input';
import {strings} from '@screens/RegisterSchoolScreen/string';
import Button from '@components/Button';

interface Props {}
const SchoolSelectModalView: FunctionComponent<Props> =
  function SchoolSelectModalView() {
    return (
      <View style={styles.base}>
        <Input placeholder={strings.PLACEHOLDER_SCHOOL} />
        <View style={styles.btnContainer}>
          <Button
            type={'Solid-Short-Cancel'}
            label={strings.CANCEL}
            onPress={() => {}}
            style={styles.cancelBtn}
          />
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
