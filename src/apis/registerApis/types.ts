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

export interface Interest {
  id: number;
  interest: string;
}

export interface UserProfileType {
  birth_of_date: string;
  gender: string;
  entrance_year: number;
  grade: number;
  nickname: string;
  introducing: string;
  mbti: string;
  interest_list: string;
}

export type Gender = 'M' | 'F';
