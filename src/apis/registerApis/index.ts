import {AxiosError} from 'axios';
import {request} from '@src/apis';
import {HttpMethod} from '@src/apis/types';
import {
  CheckDuplicateType,
  MajorType,
  UserRegisterType,
  UniversityType,
  UserResponse,
  CheckDuplicateAuthType,
  ProfileRegisterType,
} from '@src/apis/registerApis/types';

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
      url: '/accounts/id_duplicate/',
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
      url: '/accounts/pw_validate/',
      body: params,
    });

    return res.data.message;
  } catch (error) {
    const err = error as AxiosError<CheckDuplicateType>;

    return err.response?.data.message;
  }
};

export const registerRequest = async (body?: UserRegisterType) => {
  try {
    const res = await request<UserResponse | string>({
      method: HttpMethod.POST,
      url: '/accounts/register/',
      body,
    });

    return res.data;
  } catch (error) {
    const err = error as AxiosError<{email: string[]}>;

    return err.response?.data?.email[0];
  }
};

export const checkDuplicateNickname = async (nickname?: string) => {
  try {
    const res = await request<CheckDuplicateType>({
      method: HttpMethod.POST,
      url: '/accounts/nickname_duplicate/',
      body: {nickname},
    });

    return res.data.message;
  } catch (error) {
    const err = error as AxiosError<CheckDuplicateType>;

    return err.response?.data.message;
  }
};

export const getAuthorizationNumber = async (phoneNumber?: string) => {
  try {
    const res = await request<CheckDuplicateType>({
      method: HttpMethod.POST,
      url: '/auths/sms/',
      body: {phone_number: phoneNumber},
    });

    return res.data.message;
  } catch (error) {
    const err = error as AxiosError<CheckDuplicateType>;

    return err.response?.data.message;
  }
};

export const checkAuthorizationNumber = async (authNumber?: string) => {
  try {
    const res = await request<CheckDuplicateAuthType>({
      method: HttpMethod.POST,
      url: '/auths/smsactivate/',
      body: {auth_number: authNumber},
    });

    return res.data.auth_status;
  } catch (error) {
    const err = error as AxiosError<CheckDuplicateType>;

    return err.response?.data.message;
  }
};

export const registerProfile = async (params: ProfileRegisterType) => {
  try {
    const res = await request<CheckDuplicateAuthType>({
      method: HttpMethod.POST,
      url: '/auths/smsactivate/',
      body: params,
    });

    return res.data.auth_status;
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};
