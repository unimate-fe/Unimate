import React from "react";
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

//type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

function Search({navigation}) {

  return(
    <View>
      <Text>아이디 비번 찾기</Text>
    </View>
  );
}
export default Search;
