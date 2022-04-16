import React, {FunctionComponent, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import Button from '@components/Button';
import {strings} from '@screens/RegisterSchoolScreen/string';
import CustomModal from '@components/Modal';
import SchoolSelectModalView from '@screens/RegisterSchoolScreen/components/SchoolSelectModalView';
import MajorSelectModalView from '@screens/RegisterSchoolScreen/components/MajorSelectModalView';
import InputView from '@components/Input';
import {useFetchUniversity} from '@hooks/api/useFetchSchool';
import {Icons} from '@assets/icons';

const gradeLIst = [
  {label: '1학년', value: 1},
  {label: '2학년', value: 2},
  {label: '3학년', value: 3},
  {label: '4학년', value: 4},
];

const RegisterSchoolScreen: FunctionComponent = function RegisterScreen() {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [isMajorModalOpen, setIsMajorModalOpen] = useState(false);

  const [school, setSchool] = useState<string>();
  const [grade, setGrade] = useState<number>();
  const {data: universityList, isLoading} = useFetchUniversity();

  const schoolHandler = (atr: string) => setSchool(atr);

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
          <InputView
            value={school}
            defaultValue={school}
            onPress={() => setIsSchoolModalOpen(true)}
            boxPlaceHolder={strings.PLACEHOLDER_SCHOOL}
            disabled
            style={styles.input}
            placeholder={strings.PLACEHOLDER_SCHOOL}
          />
          <InputView
            onPress={() => setIsMajorModalOpen(true)}
            boxPlaceHolder={strings.PLACEHOLDER_DEPART}
            disabled
            style={styles.input}
            placeholder={strings.PLACEHOLDER_DEPART}
          />
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{label: '학년'}}
              style={pickerSelectStyles}
              onValueChange={value => setGrade(value)}
              items={gradeLIst}
              doneText={'선택'}
            />
            <Image source={Icons.ARROW_DROP_DOWN} style={styles.downIcon} />
          </View>
        </View>
        <Button type={'Solid-Long'} label={strings.BTN} onPress={() => {}} />
      </View>
      <CustomModal visible={isSchoolModalOpen}>
        <SchoolSelectModalView
          schoolHandler={schoolHandler}
          data={universityList}
          onClose={() => {
            setIsSchoolModalOpen(false);
          }}
        />
      </CustomModal>
      <CustomModal visible={isMajorModalOpen}>
        <MajorSelectModalView
          onClose={() => {
            setIsMajorModalOpen(false);
          }}
        />
      </CustomModal>
    </SafeContainer>
  );
};
export default RegisterSchoolScreen;

const styles = StyleSheet.create({
  base: {
    paddingTop: 28,
    paddingHorizontal: 30,
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
  icon: {
    position: 'absolute',
    width: 24,
    height: 24,
  },
  pickerContainer: {},
  downIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 24,
    height: 24,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.DARK_GREY3,
    height: 56,
    width: '100%',
    backgroundColor: colors.LIGHT_GREY1,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  placeholder: {
    color: colors.GREY2,
  },
});
