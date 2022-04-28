import {AccountType} from '@src/apis/accountApis/types';
import {request} from '@src/apis';
import {HttpMethod} from '@src/apis/types';

export const loginRequest = async (account?: AccountType) => {
  try {
    const res = await request<AccountType>({
      method: HttpMethod.POST,
      url: `/accounts/login/`,
      body: account,
    });

    console.log('res.data: ', res.data);
    return res.data;
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};
