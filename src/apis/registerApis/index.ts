import {request} from '@src/apis';
import {HttpMethod} from '@src/apis/types';
import {
  CheckDuplicateType,
  MajorType,
  RegisterErrorType,
  RegisterType,
  UniversityType,
} from '@src/apis/registerApis/types';
import {AxiosError} from 'axios';

export const fetchUniversity = async () => {
  try {
    const res = await request<UniversityType[]>({
      method: HttpMethod.GET,
      url: '/accounts/university/',
    });

    return res.data;
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};

export const fetchMajor = async (id?: number) => {
  try {
    const res = await request<MajorType[]>({
      method: HttpMethod.GET,
      url: `/accounts/major_univ/${id}/`,
    });

    return res.data;
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};

export const checkDuplicateId = async (username: string) => {
  try {
    const res = await request<CheckDuplicateType>({
      method: HttpMethod.POST,
      url: `/accounts/id_duplicate/`,
      body: {username},
    });

    return res.data.message;
  } catch (error) {
    const err = error as AxiosError<{message: string}>;

    return err.response?.data?.message;
  }
};

// TODO : email 중복확인

export const checkDuplicateNickname = async (nickname?: string) => {
  try {
    const res = await request<CheckDuplicateType>({
      method: HttpMethod.POST,
      url: `/accounts/nickname_duplicate/`,
      body: {nickname},
    });

    return res.data;
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};

export const registerRequest = async (body?: RegisterType) => {
  try {
    const res = await request<RegisterType | string>({
      method: HttpMethod.POST,
      url: `/accounts/register/`,
      body,
    });
    console.log('회원가입 완료:', res.data);

    return res.data;
  } catch (e) {
    // @ts-ignore
    const err = error as AxiosError<{message: RegisterErrorType}>;
    console.log(err.response?.data.message);

    return err.response?.data?.message.email[0];
  }
};
