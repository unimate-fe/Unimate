import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParams = {
  Home: undefined;
  Register: undefined;
  RegisterTerms: undefined;
  RegisterInfo: undefined;
  RegisterPhone: undefined;
  RegisterEmail: undefined;
  RegisterNick: undefined;
  RegisterMbti: undefined;
  RegisterInterest: undefined;
  RegisterDetail: undefined;
  RegisterFinish: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParams>;
