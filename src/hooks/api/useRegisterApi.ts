import {useMutation, useQuery} from 'react-query';
import {
  checkDuplicateId,
  checkDuplicateNickname,
  checkDuplicatePwd,
  fetchMajor,
  fetchUniversity,
  registerRequest,
} from '@src/apis/registerApis';
import {RegisterType} from '@src/apis/registerApis/types';

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

export const useCheckDuplicateNickName = () => {
  return useMutation('nicknameDuplicate', checkDuplicateNickname);
};

export const useCheckDuplicatePwd = () => {
  return useMutation('pwdDuplicate', checkDuplicatePwd);
};

export const useRegister = (apiStart: boolean) => {
  return useMutation(['register', apiStart], registerRequest, {
    retry: false,
  });
};
