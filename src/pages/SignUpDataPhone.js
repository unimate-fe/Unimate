// import React, {useCallback, useState} from 'react';
// import {Alert,View, StyleSheet, Text, Pressable, Image, TextInput} from 'react-native';
//
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../../App';
//
// import DismissKeyboardView from '../components/DismissKeyboardView.js';
// import axios, {AxiosError} from 'axios';
// import Config from 'react-native-config';
//
// //type SignUpDataScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpData'>;
//
// function SignUpDataPhone({navigation}){
//   const [phone, setPhone] = useState('');
//   const [phoneCheck, setPhoneCheck] = useState('');
//   const [checkIdFontText, setCheckIdFontText] = useState('이미 사용중인 아이디예요.');
//   const [checkIdFontColor, setCheckIdFontColor] = useState('#F25D53');
//   const [checkPwFontText, setCheckPwFontText] = useState('');
//   const [checkPwFontColor, setCheckPwFontColor] = useState('');
//   const [checkPwCheckFontText, setCheckPwCheckFontText] = useState('');
//   const [checkPwCheckFontColor, setCheckPwCheckFontColor] = useState('');
//
//     const toEmail = useCallback(() => {
//       navigation.navigate('SignUpDataEmail');
//     }, [navigation]);
//
//     const toPhoneCheck = useCallback(() => {
//         if(phoneCheck!='1111'){
//           setCheckPwFontText('휴대폰 인증에 실패했어요.');
//           setCheckPwFontColor('#F25D53');
//         }
//         if(phoneCheck=='1111'){
//           setCheckPwFontText('');
//           toEmail()
//         }
//     });
//
//     const toSendPhone = useCallback(() => {
//       Alert.alert('알림', '인증번호 : 1111');
//   });
//     const onChangePhone = useCallback(text => {
//       setPhone(text.trim());
//     }, []);
//
//     const onChangePhoneCheck = useCallback(text => {
//       setPhoneCheck(text.trim());
//     }, []);
//
//   return (
//     <DismissKeyboardView style={{backgroundColor: 'white'}}>
//       <View style={{paddingLeft: 30}}>
//             <Text style={@styles.pageTitle1}>번호를 입력해 주세요.</Text>
//       </View>
//       {/* 휴대폰번호------------ */}
//       <View style={@styles.inputTopWrapper}>
//         <TextInput
//           style={@styles.textInputTop}
//           placeholder="휴대폰 번호"
//           placeholderTextColor="#666"
//           onChangeText={onChangePhone}
//           autoComplete="phone"
//           textContentType="telephoneNumber"
//           value={phone}
//           returnKeyType="next"
//           clearButtonMode="while-editing"
//           keyboardType={'phone-pad'}
//         />
//         <View style={{paddingLeft:10}}>
//           <Pressable style={@styles.CheckButton} onPress={toSendPhone}>
//             <Text style={@styles.CheckButtonText}>인증 받기</Text>
//           </Pressable>
//         </View>
//       </View>
//       {/* 인증번호------------ */}
//       <View style={@styles.inputWrapper}>
//         <TextInput
//           style={@styles.textInputBottom}
//           placeholder="인증번호 4자리"
//           placeholderTextColor="#666"
//           onChangeText={onChangePhoneCheck}
//           importantForAutofill="yes"
//           value={phoneCheck}
//           textContentType="telephoneNumber"
//           secureTextEntry
//           returnKeyType="send"
//           clearButtonMode="while-editing"
//           onBlur={toPhoneCheck}
//         />
//       </View>
//       <View style={@styles.checkTextContainer}>
//         <TextInput
//             style={{fontSize: 10}}
//             placeholder= {checkPwFontText}
//             placeholderTextColor= {checkPwFontColor}
//             editable={false}
//           />
//       </View>
//       <View style={@styles.buttonZone}>
//         <Pressable style={@styles.loginButton} onPress={toPhoneCheck}>
//           <Text style={@styles.loginButtonText}>인증 완료</Text>
//         </Pressable>
//       </View>
//     </DismissKeyboardView>
//   );
// }
//
// const @styles = StyleSheet.create({
//   pageTitle1: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     color: '#212529',
//     padding: 5,
// },
// CheckButton: {
//   width: 80,
//   height: 56,
//   borderRadius: 12,
//   backgroundColor: '#9678FE',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// CheckButtonText: {
//   fontWeight: 'bold',
//   fontSize: 14,
//   color: '#fff',
// },
// NextButton: {
//   width: 315,
//   height: 56,
//   borderRadius: 12,
//   backgroundColor: '#9678FE',
//   padding: 20,
//   alignItems: 'center',
// },
// NextButtonText: {
//   fontWeight: 'bold',
//   fontSize: 15,
//   color: '#fff',
// },
// textInputTop: {
//     width: 225,
//     height: 56,
//     padding: 15,
//     borderRadius: 12,
//     backgroundColor: '#F2F4F8',
//   },
//   textInputBottom: {
//     width: 315,
//     height: 56,
//     padding: 15,
//     borderRadius: 12,
//     backgroundColor: '#F2F4F8',
//   },
//   inputWrapper: {
//     padding: 7,
//     alignItems: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputTopWrapper: {
//     padding: 7,
//     paddingTop: 41,
//     alignItems: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkTextContainer: {
//     padding: 7,
//     paddingLeft: 40,
//     justifyContent: 'center',
//   },
//   buttonZone: {
//     padding: 37,
//     alignItems: 'center',
//   },
//   loginButton: {
//     width: 315,
//     height: 56,
//     borderRadius: 12,
//     backgroundColor: '#9678FE',
//     padding: 20,
//     alignItems: 'center',
//   },
//   loginButtonText: {
//     fontWeight: 'bold',
//     fontSize: 15,
//     color: '#fff',
//   },
//   search: {
//     fontSize: 14,
//     color: '#A4ACB3',
//     padding: 16,
//   },
// });
//
// export default SignUpDataPhone;
