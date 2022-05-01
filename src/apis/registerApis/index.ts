import {request} from '@src/apis';
import {HttpMethod} from '@src/apis/types';
import {MajorType, UniversityType} from '@src/apis/fetchSchoolApis/types';
import {CheckDuplicateType, RegisterType} from '@src/apis/registerApis/types';

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

    return res.data;
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};

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
    const res = await request<RegisterType>({
      method: HttpMethod.POST,
      url: `/accounts/register/`,
      body,
    });

    return res.data;
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};
