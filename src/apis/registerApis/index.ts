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
    console.log(res.data);

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
    const err = error as AxiosError<CheckDuplicateType>;

    console.log('error: ', err.response?.data);
    return err.response?.data.message;
  }
};

export const checkDuplicatePwd = async (params: {pw1: string; pw2: string}) => {
  try {
    const res = await request<CheckDuplicateType>({
      method: HttpMethod.POST,
      url: `/accounts/pw_validate/`,
      body: params,
    });

    return res.data.message;
  } catch (error) {
    const err = error as AxiosError<CheckDuplicateType>;

    return err.response?.data.message;
  }
};

export const checkDuplicateNickname = async (nickname?: string) => {
  try {
    const res = await request<CheckDuplicateType>({
      method: HttpMethod.POST,
      url: `/accounts/nickname_duplicate/`,
      body: {nickname},
    });

    return res.data.message;
  } catch (error) {
    const err = error as AxiosError<CheckDuplicateType>;

    return err.response?.data.message;
  }
};

export const registerRequest = async (body?: RegisterType) => {
  try {
    const res = await request<RegisterType | string>({
      method: HttpMethod.POST,
      url: `/accounts/register/`,
      body,
    });

    return res.data;
  } catch (error) {
    const err = error as AxiosError<{email: string[]}>;

    return err.response?.data?.email[0];
  }
};
