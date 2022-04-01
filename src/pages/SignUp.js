import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Search,
  TextInput,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';

//type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

function SignUp({navigation}) {
  
  const toTos = useCallback(() => {
    navigation.navigate('Tos');
  }, [navigation]);

  const [school, setSchool] = useState(null);
  const [major, setMajor] = useState(null);
  const [grade, setGrade] = useState(null);

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}> 
        <View style={{paddingLeft: 30}}>
            <Text style={styles.pageTitle1}>대학 친구를 만나는</Text>
            <Text style={styles.pageTitle1}>
                <Text style={styles.pageTitle1}>새로운 방법, </Text>
                <Text style={styles.pageTitle2}>유니메이트!</Text>
            </Text>
        </View>
        <View style={{paddingLeft: 30, paddingTop:45}}>
          <Dropdown
              style={{backgroundColor: '#F2F4F8',width: 315, height: 56, borderRadius: 12,padding:20}}
              placeholderStyle={{color: '#A4ACB3',fontSize: 14}}
              selectedTextStyle={{fontSize: 14, color: '#A4ACB3'}}
              inputSearchStyle={{color: '#A4ACB3',fontSize: 14}}
              data={[{label: '서울대학교', value: '서울대학교'},
              {label: '고려대학교', value: '고려대학교'},
              {label: '연세대학교', value: '연세대학교'},{label: '연세대학교', value: '연세대학교'},{label: '연세대학교', value: '연세대학교'}]}
              maxHeight={230}
              labelField="label"
              valueField="value"
              placeholder="학교 이름을 검색하세요."
              search
              value={school}
              onChange={item => {
                setSchool(item.school);
            }}
          />
        </View>
        <View style={{paddingLeft: 30,paddingTop: 14}}>
          <Dropdown
              style={{backgroundColor: '#F2F4F8',width: 315, height: 56, borderRadius: 12, padding:20}}
              placeholderStyle={{color: '#A4ACB3',fontSize: 14, }}
              selectedTextStyle={{fontSize: 14, color: '#A4ACB3',}}
              inputSearchStyle={{color: '#A4ACB3',fontSize: 14,}}
              data={[{label: '독어독문학과', value: '독어독문학과'},
              {label: 'IT미디어공학과', value: 'IT미디어공학과'},
              {label: '컴퓨터공학과', value: '컴퓨터공학과'}]}
              maxHeight={230}
              labelField="label"
              valueField="value"
              placeholder="학과를 검색하세요."
              search
              value={major}
              onChange={item => {
              setMajor(item.major);
            }}
          />
        </View>
        <View style={{paddingLeft: 30, paddingTop: 14, paddingBottom: 40,}}>
          <Dropdown
            style={{backgroundColor: '#F2F4F8',width: 315, height: 56, borderRadius: 12,padding:20}}
            placeholderStyle={{color: '#A4ACB3',fontSize: 14,}}
            selectedTextStyle={{fontSize: 14, color: '#A4ACB3',}}
            inputSearchStyle={{color: '#A4ACB3',fontSize: 14, }}
            data={[{label: '1학년', value: '1학년'},
            {label: '2학년', value: '2학년'},
            {label: '3학년', value: '3학년'},
            {label: '4학년', value: '4학년'}]}
            maxHeight={230}
            labelField="label"
            valueField="value"
            placeholder="학년"
            value={grade}
            onChange={item => {
            setGrade(item.grade);
          }}
        />
        </View>
        <View style={styles.buttonZone}>
            <Pressable style={styles.NextButton} onPress={toTos}>
            <Text style={styles.NextButtonText}>다음</Text>
            </Pressable>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    pageTitle1: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#212529',
        padding: 5,
    },
    pageTitle2: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#9678FE',
        padding: 5,
    },
    schoolButton: {
      width: 315,
      height: 56,
      padding: 20,
      borderRadius: 12,
      backgroundColor: '#F2F4F8',
    },
    
    schoolButtonFont: {
      color: '#A4ACB3',
    },
    buttonZone: {
      padding: 37,
      alignItems: 'center',
    },
    NextButton: {
      width: 315,
      height: 56,
      borderRadius: 12,
      backgroundColor: '#9678FE',
      padding: 20,
      alignItems: 'center',
    },
    NextButtonText: {
      fontWeight: 'bold',
      fontSize: 15,
      color: '#fff',
    },
  });

export default SignUp;