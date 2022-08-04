import {request} from '@src/apis';
import {HttpMethod} from '@src/apis/types';
import {
  UserRegisterType,
  UniversityType,
  UserResponse,
  MajorType,
  UserProfileType,
  Interest,
} from '@src/apis/registerApis/types';
import AppError from '../error';

export const fetchUniversity = async () => {
  try {
    const res = await request<UniversityType[]>({
      method: HttpMethod.GET,
      url: '/accounts/university/',
    });
    console.log(res.data);

    return res.data;
  } catch (e) {
    throw new AppError(e);
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
    throw new AppError(e);
  }
};

export const checkDuplicateId = async (username: string) => {
  try {
    const res = await request({
      method: HttpMethod.POST,
      url: '/accounts/id_duplicate/',
      body: {username},
    });

    return res.data;
  } catch (e) {
    throw new AppError(e);
  }
};

export const checkDuplicatePwd = async (params: {pw1: string; pw2: string}) => {
  try {
    const res = await request({
      method: HttpMethod.POST,
      url: '/accounts/pw_validate/',
      body: params,
    });

    return res.data;
  } catch (e) {
    throw new AppError(e);
  }
};

export const registerRequest = async (body?: UserRegisterType) => {
  try {
    const res = await request<UserResponse>({
      method: HttpMethod.POST,
      url: '/accounts/register/',
      body,
    });

    return res.data;
  } catch (e) {
    throw new AppError(e);
  }
};

export const checkDuplicateNickname = async (nickname?: string) => {
  try {
    const res = await request({
      method: HttpMethod.POST,
      url: '/accounts/nickname_duplicate/',
      body: {nickname},
    });

    return res.data;
  } catch (e) {
    throw new AppError(e);
  }
};

export const getAuthorizationNumber = async (phoneNumber: string) => {
  try {
    const res = await request({
      method: HttpMethod.POST,
      url: '/auths/sms/',
      body: {phone_number: phoneNumber},
    });

    return res.data;
  } catch (e) {
    throw new AppError(e);
  }
};

export const checkAuthorizationNumber = async (authNumber?: string) => {
  try {
    const res = await request({
      method: HttpMethod.POST,
      url: '/auths/smsactivate/',
      body: {auth_number: authNumber},
    });

    return res.data;
  } catch (e) {
    throw new AppError(e);
  }
};

export const getInterestList = async () => {
  try {
    const res = await request<Interest[]>({
      method: HttpMethod.GET,
      url: '/accounts/interest/',
    });

    return res.data;
  } catch (e) {
    throw new AppError(e);
  }
};

export const registerProfile = async (params: UserProfileType) => {
  try {
    const res = await request<UserProfileType>({
      method: HttpMethod.POST,
      url: '/accounts/profile_register/',
      body: params,
    });

    return res.data;
  } catch (e) {
    throw new AppError(e);
  }
};
