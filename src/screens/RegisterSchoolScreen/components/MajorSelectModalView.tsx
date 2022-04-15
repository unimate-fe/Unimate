import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '@components/Input';
import {strings} from '@screens/RegisterSchoolScreen/string';
import Button from '@components/Button';

interface Props {
  onClose?: () => void;
}
const MajorSelectModalView: FunctionComponent<Props> =
  function MajorSelectModalView({onClose}) {
    return (
      <View style={styles.base}>
        <Input placeholder={strings.PLACEHOLDER_DEPART} />
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
export default MajorSelectModalView;

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
