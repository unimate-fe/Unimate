import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParams = {
  // 홈
  Home: undefined;
  // 회원가입
  RegisterSchool: undefined;
  // 이용약관
  RegisterTos: undefined;
  // 회원정보 - 아이디 & 비밀번호
  RegisterIdPwd: undefined;
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
  RegisterInfo: undefined;
  // 로그인
  Login: undefined;
  // 아이디 비밀번호 찾기
  FindAccount: undefined;
  // 방 만들기 페이지1
  RoomStart: undefined;
  // 방만들기 페이지 2
  RoomSelect: undefined;
  // 방만들기 페이지 3
  RoomSelectGrade: undefined;
  // 방만들기 페이지 4
  RoomSelectCnt: undefined;
  // 방만들기 페이지 5 (성별 선택)
  RoomSelectGender:undefined;
  RoomSelectSame:undefined;
  RoomSelectName:undefined;
  RoomSelectDetail:undefined;
  MyPageAuth:undefined;
  // 프로필 수정
  MyPageProfile:undefined;
  //계정 관리
  MyPageAccount:undefined;
  //알림 설정
  MyPageAlarm : undefined;
  MyPageInfo : undefined;
  MyPageOut : undefined;
  MyPageOutDetail : undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParams>;
