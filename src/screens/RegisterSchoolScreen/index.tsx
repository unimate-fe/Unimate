import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Toast from 'react-native-easy-toast';
import {colors} from '@components/Styles/colors';
import SafeContainer from '@components/SafeContainer';
import Typo from '@components/Typo';
import Button from '@components/Button';
import {strings} from '@screens/RegisterSchoolScreen/string';
import CustomModal from '@components/Modal';
import SchoolSelectModalView from '@screens/RegisterSchoolScreen/components/SchoolSelectModalView';
import MajorSelectModalView from '@screens/RegisterSchoolScreen/components/MajorSelectModalView';
import InputView from '@components/Input';
import useScreenNavigation from '@hooks/useScreenNavigation';
import {useFetchMajor, useFetchUniversity} from '@hooks/api/useRegisterApi';
import {MajorType} from '@src/apis/fetchSchoolApis/types';
import useRegisterStore from '@hooks/useRegisterStore';

const RegisterSchoolScreen: FunctionComponent = function RegisterScreen() {
  const navigation = useScreenNavigation();
  const toastRef = useRef<Toast>(null);

  const {saveSchool} = useRegisterStore();

  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [isMajorModalOpen, setIsMajorModalOpen] = useState(false);

  const [schoolLabel, setSchoolLabel] = useState<string>();
  const [schoolIdx, setSchoolIdx] = useState<number>();
  const [majorLabel, setMajorLabel] = useState<string>();
  const [majorState, setMajorState] = useState<MajorType>();

  const [validation, setValidation] = useState(false);

  const {data: universityList} = useFetchUniversity();
  const {data: majorList} = useFetchMajor(schoolIdx);

  const showToast = () => toastRef?.current?.show('학교를 먼저 선택해주세요.');

  const schoolHandler = (label: string) => {
    setSchoolLabel(label);
    setSchoolIdx(universityList?.find(univ => univ.university === label)?.id);
  };
  const majorHandler = (data: MajorType, label: string) => {
    setMajorLabel(label);
    setMajorState(data);
  };

  const submitHandler = () => {
    if (schoolLabel && majorLabel) {
      saveSchool({
        university: schoolLabel,
        major: majorLabel,
      });
      navigation.navigate('RegisterTos');
    }
  };

  // validation check
  useEffect(() => {
    if (schoolLabel && majorLabel) setValidation(true);
    else setValidation(false);
  }, [schoolLabel, majorLabel]);

  return (
    <SafeContainer isKeyboard>
      <View style={styles.base}>
        <Typo type={'H2'}>{strings.TITLE}</Typo>
        <View style={styles.strongContainer}>
          <Typo type={'H2'}>{strings.DESC} </Typo>
          <Typo type={'H2'} style={styles.strong}>
            {strings.DESC_STRONG}
          </Typo>
        </View>
        <View style={styles.inputContainer}>
          <InputView
            value={schoolLabel}
            defaultValue={schoolLabel}
            onPress={() => setIsSchoolModalOpen(true)}
            boxPlaceHolder={strings.PLACEHOLDER_SCHOOL}
            style={styles.input}
            placeholder={strings.PLACEHOLDER_SCHOOL}
            disabled
          />
          <InputView
            value={majorLabel}
            defaultValue={majorLabel}
            onPress={schoolLabel ? () => setIsMajorModalOpen(true) : showToast}
            boxPlaceHolder={strings.PLACEHOLDER_DEPART}
            style={styles.input}
            placeholder={strings.PLACEHOLDER_DEPART}
            disabled
          />
        </View>
        <Button
          type={'Solid-Long'}
          label={strings.BTN}
          onPress={submitHandler}
          disabled={!validation}
        />
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
          majorState={majorState}
          majorHandler={majorHandler}
          data={majorList}
          onClose={() => {
            setIsMajorModalOpen(false);
          }}
        />
      </CustomModal>
      <Toast
        ref={toastRef}
        positionValue={200}
        fadeInDuration={400}
        fadeOutDuration={400}
      />
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
