import {useMutation, useQuery} from 'react-query';
import {
  fetchMajor,
  fetchUniversity,
  registerRequest,
} from '@src/apis/registerApis';
import {MajorType, RegisterType} from '@src/apis/registerApis/types';

export const useFetchUniversity = () => {
  return useQuery('university', fetchUniversity, {retry: false});
};

export const useFetchMajor = (id?: number) => {
  return useQuery('major', () => fetchMajor(id), {
    enabled: !!id,
    retry: false,
  });
};

export const useRegister = (body?: RegisterType) => {
  return useMutation('register', () => registerRequest(body), {
    retry: false,
  });
};
