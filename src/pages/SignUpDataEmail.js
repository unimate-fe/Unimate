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
// function SignUpDataEmail({navigation}){
//   const [email, setEmail] = useState('');
//   const [checkEmailFontText, setCheckEmailFontText] = useState('');
//   const [checkEmailFontColor, setCheckEmailFontColor] = useState('');
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
//             <Text style={@styles.pageTitle1}>이메일을 입력해 주세요.</Text>
//       </View>
//       <View style={{paddingLeft: 30}}>
//             <Text style={@styles.pageTitle2}>아이디찾기에 활용되는 이메일로,</Text>
//             <Text style={@styles.pageTitle2}>실제 사용 중인 이메일을 입력해 주세요.</Text>
//       </View>
//       {/* 이메일------------ */}
//       <View style={@styles.inputTopWrapper}>
//         <TextInput
//           style={@styles.textInputBottom}
//           placeholder="이메일"
//           placeholderTextColor="#666"
//           onChangeText={onChangeEmailCheck}
//           importantForAutofill="yes"
//           value={email}
//           textContentType="Email"
//           returnKeyType="send"
//           clearButtonMode="while-editing"
//           onBlur={toEmailCheck}
//         />
//       </View>
//       <View style={@styles.checkTextContainer}>
//         <TextInput
//             style={{fontSize: 10}}
//             placeholder= {checkEmailFontText}
//             placeholderTextColor= {checkEmailFontColor}
//             editable={false}
//           />
//       </View>
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
// });
//
// export default SignUpDataEmail;
