export interface UniversityType {
  id: number;
  university: string;
}

export interface UserResponse {
  user: UserRegisterType;
  token: string;
}

export interface MajorType {
  id: number;
  major: string;
  college: number;
  university: number;
}
export interface CheckDuplicateType {
  message: string;
}

export interface CheckDuplicateAuthType {
  auth_status: string;
}
export interface UserRegisterType {
  username: string;
  email: string;
  password: string;
  university: number;
  college: number;
  major: number;
  use_agree: boolean;
  information_agree: boolean;
}

export interface ProfileRegisterType {
  birth_of_date: string;
  gender: string;
  entrance_year: number;
  grade: number;
  nickname: string;
  introducing: string;
  mbti: string;
  interest_list: string;
}

export interface RegisterErrorType {
  email: string[];
}

export type Gender = 'M' | 'F';
