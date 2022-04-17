import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParams = {
  // 홈
  Home: undefined;
  // 회원가입
  RegisterSchool: undefined;
  // 이용약관
  RegisterTerms: undefined;
  // 회원정보 - 아이디 & 비밀번호
  RegisterInfo: undefined;
  // 회원정보 - 핸드폰 번호
  RegisterPhone: undefined;
  // 회원정보 - 이메일
  RegisterEmail: undefined;
  // 회원정보 - 닉네임
  RegisterNick: undefined;
  // 회원정보 - Mbti
  RegisterMbti: undefined;
  // 회원정보 - 관심사
  RegisterInterest: undefined;
  // 회원정보 - 이름 & 생년월일
  RegisterDetail: undefined;
  // 회원가입 완료
  RegisterFinish: undefined;
  // 로그인
  Login: undefined;
  // 아이디 비밀번호 찾기
  FindAccount: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParams>;
