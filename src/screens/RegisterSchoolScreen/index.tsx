import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import Input from '@components/Input';
import Button from '@components/Button';
import {strings} from '@screens/RegisterSchoolScreen/string';
import CustomModal from '@components/Modal';
import SchoolSelectModalView from '@screens/RegisterSchoolScreen/components/SchoolSelectModalView';
import DepartSelectModalView from '@screens/RegisterSchoolScreen/components/DepartSelectModalView';

interface Props {}

const RegisterSchoolScreen: FunctionComponent<Props> =
  function RegisterScreen() {
    return (
      <SafeContainer isKeyboard>
        <View style={styles.base}>
          <Typo type={'H2'}>{strings.TITLE}</Typo>
          <View style={styles.strongContainer}>
            <Typo type={'H2'}>{strings.DESC}</Typo>
            <Typo type={'H2'} style={styles.strong}>
              {strings.DESC_STRONG}
            </Typo>
          </View>
          <View style={styles.inputContainer}>
            <Input
              disabled
              style={styles.input}
              placeholder={strings.PLACEHOLDER_SCHOOL}
            />
            <Input
              disabled
              style={styles.input}
              placeholder={strings.PLACEHOLDER_DEPART}
            />
            <Input placeholder={strings.PLACEHOLDER_GRADE} />
          </View>
          <Button type={'Solid-Long'} label={strings.BTN} onPress={() => {}} />
        </View>
        <CustomModal visible={true} onClose={() => {}}>
          <DepartSelectModalView />
        </CustomModal>
      </SafeContainer>
    );
  };
export default RegisterSchoolScreen;

const styles = StyleSheet.create({
  base: {
    paddingTop: 28,
  },
  strongContainer: {
    flexDirection: 'row',
    marginBottom: 48,
  },
  strong: {
    color: colors.PRIMARY.NORMAL,
  },
  inputContainer: {
    marginBottom: 44,
  },
  input: {
    marginBottom: 14,
  },
});
