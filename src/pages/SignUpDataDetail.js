// import React, {useCallback, useState, Component} from 'react';
// import {Alert,View, StyleSheet, Text, Pressable, Image, TextInput, TextInputBase} from 'react-native';
// import DatePicker from 'react-native-datepicker';
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
// function SignUpDataEmail({navigation}){
//   const [email, setEmail] = useState('');
//   const [checkEmailFontText, setCheckEmailFontText] = useState('');
//   const [checkEmailFontColor, setCheckEmailFontColor] = useState('');
//   const [date, setDate] = useState('09-10-2021');
//
//
//     const toNickname = useCallback(() => {
//       navigation.navigate('SignUpDataNickname');
//     }, [navigation]);
//
//     const toEmailCheck = useCallback(() => {
//         if(email!='1111'){
//           setCheckEmailFontText('이미 사용중인 이메일이에요.');
//           setCheckEmailFontColor('#F25D53');
//         }
//         if(email=='1111'){
//           setCheckEmailFontText('');
//           toNickname()
//         }
//     });
//     const onChangeEmailCheck = useCallback(text => {
//       setEmail(text.trim());
//     }, []);
//
//   return (
//     <DismissKeyboardView style={{backgroundColor: 'white'}}>
//       <View style={{paddingLeft: 30}}>
//             <Text style={@styles.pageTitle1}>가입이 거의 다 끝났어요!</Text>
//       </View>
//       {/* 이름------------ */}
//       <View style={@styles.inputTopWrapper}>
//         <TextInput
//           style={@styles.textInputBottom}
//           placeholder="이름"
//           placeholderTextColor="#666"
//           importantForAutofill="yes"
//           value={email}
//           textContentType="name"
//           returnKeyType="send"
//           clearButtonMode="while-editing"
//         />
//       </View>
//       {/* 생년월일------------ */}
//       <View style={@styles.inputTopWrapper}>
//         <TextInput
//           style={@styles.textInputBottom}
//           placeholder="생년월일"
//           placeholderTextColor="#666"
//           importantForAutofill="yes"
//           value={email}
//           textContentType=""
//           returnKeyType="send"
//           clearButtonMode="while-editing"
//         />
//         <DatePicker
//           style={@styles.datePickerStyle}
//           date={date}
//           mode="date"
//           placeholder="select date"
//           format="DD/MM/YYYY"
//           minDate="01-01-1900"
//           maxDate="01-01-2000"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           customStyles={{
//             dateIcon: {
//               position: 'absolute',
//               right: -5,
//               top: 4,
//               marginLeft: 0,
//             },
//             dateInput: {
//               borderColor : "gray",
//               alignItems: "flex-start",
//               borderWidth: 0,
//               borderBottomWidth: 1,
//             },
//             placeholderText: {
//               fontSize: 17,
//               color: "gray"
//             },
//             dateText: {
//               fontSize: 17,
//             }
//           }}
//           onDateChange={(date) => {
//             setDate(date);
//           }}
//         />
//       </View>
//
//       <View style={@styles.buttonZone}>
//         <Pressable style={@styles.loginButton} onPress={toEmailCheck}>
//           <Text style={@styles.loginButtonText}>완료</Text>
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
//   },
//   pageTitle2: {
//     fontSize: 14,
//     color: '#828C94',
//     padding: 5,
//   },
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
//     paddingTop: 48,
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
//   datePickerStyle: {
//     width: 230,
//   }
// });
//
// export default SignUpDataEmail;
