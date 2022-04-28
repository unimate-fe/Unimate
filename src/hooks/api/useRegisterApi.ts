import {useMutation, useQuery} from 'react-query';
import {fetchCollege, fetchMajor, fetchUniversity} from '@src/apis/fetchSchool';
import {MajorType} from '@src/apis/fetchSchool/types';

export const useFetchUniversity = () => {
  return useQuery('university', fetchUniversity, {retry: false});
};

export const useFetchMajor = (id?: number) => {
  return useQuery('major', () => fetchMajor(id), {
    enabled: !!id,
    retry: false,
  });
};

export const useFetchCollege = (body?: MajorType) => {
  return useMutation('college', () => fetchCollege(body), {
    retry: false,
  });
};
