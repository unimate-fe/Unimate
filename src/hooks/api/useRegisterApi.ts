import {useQuery} from 'react-query';
import {fetchMajor, fetchUniversity} from '@src/apis/fetchSchool';

export const useFetchUniversity = () => {
  return useQuery('university', fetchUniversity, {retry: false});
};

export const useFetchMajor = (id?: number) => {
  return useQuery('major', () => fetchMajor(id), {
    retry: false,
  });
};
