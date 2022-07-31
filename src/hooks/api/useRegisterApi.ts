import {useMutation, useQuery} from 'react-query';
import {
  checkAuthorizationNumber,
  checkDuplicateNickname,
  fetchMajor,
  fetchUniversity,
  getAuthorizationNumber,
  registerProfile,
} from '@src/apis/registerApis';

export const useFetchUniversity = () => {
  return useQuery('university', fetchUniversity, {retry: false});
};

export const useFetchMajor = (id?: number) => {
  return useQuery('major', () => fetchMajor(id), {
    enabled: !!id,
    retry: false,
  });
};

export const useCheckDuplicateNickName = () => {
  return useMutation('nicknameDuplicate', checkDuplicateNickname);
};

export const useGetAuthNumber = (refetch: boolean) => {
  return useMutation(['getAuthNumber', refetch], getAuthorizationNumber);
};

export const useCheckAuthNumber = (refetch: boolean) => {
  return useMutation(['checkAuthDuplicate', refetch], checkAuthorizationNumber);
};

export const useRegisterProfile = () => {
  return useMutation(['registerProfile'], registerProfile);
};
