import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import Input from '@components/Input';
import Button from '@components/Button';
import {strings} from '@screens/RegisterSchoolScreen/string';
import CustomModal from '@components/Modal';
import SchoolSelectModalView from '@screens/RegisterSchoolScreen/components/SchoolSelectModalView';
import MajorSelectModalView from '@screens/RegisterSchoolScreen/components/MajorSelectModalView';
import InputView from '@components/Input';
import {useQuery} from 'react-query';
import {UniversityType} from '@screens/RegisterSchoolScreen/api/types';
import {fetchUniversity} from '@screens/RegisterSchoolScreen/api/fetchSchool';
import {useFetchUniversity} from '@hooks/api/useFetchSchool';

const RegisterSchoolScreen: FunctionComponent = function RegisterScreen() {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [isMajorModalOpen, setIsMajorModalOpen] = useState(false);

  const [filterUniversityList, setFilterUniversityList] =
    useState<UniversityType[]>();

  const {data: universityList, isLoading} = useFetchUniversity();

  console.log(typeof universityList);

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
          <InputView placeholder={strings.PLACEHOLDER_GRADE} />
        </View>
        <Button type={'Solid-Long'} label={strings.BTN} onPress={() => {}} />
      </View>
      <CustomModal visible={isSchoolModalOpen}>
        <SchoolSelectModalView
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
});
