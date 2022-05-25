export interface UniversityType {
  id: number;
  university: string;
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

export interface RegisterErrorType {
  email: string[];
}
