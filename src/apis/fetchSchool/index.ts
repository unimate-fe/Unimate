import {request} from '@src/apis/client';
import {HttpMethod} from '@src/apis/client/types';
import {
  CollegeUtilType,
  MajorType,
  UniversityType,
} from '@src/apis/fetchSchool/types';

export const fetchUniversity = async () => {
  try {
    const res = await request<UniversityType[]>({
      method: HttpMethod.GET,
      url: '/accounts/university',
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
      url: `/accounts/major_univ/${id}`,
    });

    return res.data;
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};

export const fetchCollege = async (body?: {
  id: number;
  major: string;
  college: number;
  university: number;
}) => {
  try {
    const res = await request<CollegeUtilType>({
      method: HttpMethod.POST,
      url: `/accounts/major_detail`,
      body,
    });

    return res.data;
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};
