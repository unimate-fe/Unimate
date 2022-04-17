import {request} from '@src/apis/client';
import {UniversityType} from '@screens/RegisterSchoolScreen/api/types';
import {HttpMethod} from '@src/apis/client/types';

export const fetchUniversity = async () => {
  try {
    const res = await request<UniversityType[]>({
      method: HttpMethod.GET,
      url: '/accounts/university',
    });
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchMajor = () => {
  try {
  } catch (e) {
    throw new Error(e);
  }
};
