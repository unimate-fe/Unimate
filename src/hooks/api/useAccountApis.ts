import {useMutation} from 'react-query';
import {loginRequest} from '@src/apis/accountApis';
import {AccountType} from '@src/apis/accountApis/types';

export const useLogin = (body?: AccountType) => {
  return useMutation('login', () => loginRequest(body), {
    retry: false,
  });
};
