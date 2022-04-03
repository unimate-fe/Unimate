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
// function SignUpDataNickname({navigation}){
//   const [nickname, setNickname] = useState('');
//   const [checkNicknameFontText, setCheckNicknameFontText] = useState('');
//   const [checkNicknameFontColor, setCheckNicknameFontColor] = useState('');
//
//     const toMbti = useCallback(() => {
//       navigation.navigate('SignUpDataMbti');
//     }, [navigation]);
//
//     const toNicknameCheck = useCallback(() => {
//         if(nickname!='1111'){
//           setCheckNicknameFontText('이미 사용중인 닉네임이에요.');
//           setCheckNicknameFontColor('#F25D53');
//         }
//         if(nickname=='1111'){
//           setCheckNicknameFontText('');
//           toMbti()
//         }
//     });
//     const onChangeNicknameCheck = useCallback(text => {
//       setNickname(text.trim());
//     }, []);
//
//   return (
//     <DismissKeyboardView style={{backgroundColor: 'white'}}>
//       <View style={{paddingLeft: 30}}>
//             <Text style={@styles.pageTitle1}>닉네임을 지어주세요.</Text>
//       </View>
//       {/* 닉네임------------ */}
//       <View style={@styles.inputTopWrapper}>
//         <TextInput
//           style={@styles.textInputTop}
//           placeholder="닉네임"
//           placeholderTextColor="#666"
//           onChangeText={onChangeNicknameCheck}
//           value={nickname}
//           textContentType="Nickname"
//           returnKeyType="next"
//           clearButtonMode="while-editing"
//         />
//         <View style={{paddingLeft:10}}>
//           <Pressable style={@styles.CheckButton} onPress={toNicknameCheck}>
//             <Text style={@styles.CheckButtonText}>중복 확인</Text>
//           </Pressable>
//         </View>
//       </View>
//       <View style={@styles.checkTextContainer}>
//         <TextInput
//             style={{fontSize: 10}}
//             placeholder= {checkNicknameFontText}
//             placeholderTextColor= {checkNicknameFontColor}
//             editable={false}
//           />
//       </View>
//       <View style={@styles.buttonZone}>
//         <Pressable style={@styles.loginButton} onPress={toNicknameCheck}>
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
// export default SignUpDataNickname;
