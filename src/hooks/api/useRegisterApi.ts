import {useMutation, useQuery} from 'react-query';
import {
  checkAuthorizationNumber,
  checkDuplicateId,
  checkDuplicateNickname,
  checkDuplicatePwd,
  fetchMajor,
  fetchUniversity,
  getAuthorizationNumber,
  registerProfile,
  registerRequest,
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

export const useCheckDuplicateId = () => {
  return useMutation('idDuplicate', checkDuplicateId);
};

export const useCheckDuplicatePwd = () => {
  return useMutation('pwdDuplicate', checkDuplicatePwd);
};

export const useRegister = (apiStart: boolean) => {
  return useMutation(['register', apiStart], registerRequest, {
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
