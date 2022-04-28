// 대학교
export interface UniversityType {
  id: number;
  university: string;
}

// 전공
export interface MajorType {
  id: number;
  major: string;
  college: number;
  university: number;
}

// 회원가입 request
export interface RegisterType {
  username: string;
  email: string;
  password: string;
  university: number;
  college: number;
  major: number;
  use_agree: boolean;
  information_agree: boolean;
}
