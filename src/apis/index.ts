import axios, {AxiosResponse} from 'axios';
import qs from 'qs';
import {get, set} from 'lodash';
import Config from 'react-native-config';
import {HttpMethod, RequestParams} from '@src/apis/types';
import useRegisterStore from '@src/hooks/useRegisterStore';

const instance = axios.create({
  // 3초뒤 요청 타임아웃
  timeout: 3000,
  // 배열 파라미터 전송 시 [] 제외하고 전송
  paramsSerializer: (params: unknown) =>
    qs.stringify(params, {arrayFormat: 'brackets'}),
  // cors error handling
  withCredentials: true,
  // baseURL: 'https://virtserver.swaggerhub.com/Unimate/Unimate_API/1.0.0',
  // baseURL: 'http://13.125.90.202:8000',
  // baseURL: 'https://5bd3-220-117-137-15.ngrok.io',
  baseURL: 'https://9d6d-49-165-186-117.ngrok.io',
});

instance.interceptors.request.use(
  request => {
    const url = `${request.baseURL}${request.url}`;
    console.log(`>> REQUEST [${request.method}]: ${url}`);

    const queryStrings = request.params;
    if (queryStrings) {
      console.log('>> queryStrings: ', JSON.stringify(queryStrings));
    }
    const requestBody = request.data;
    if (requestBody) {
      console.log('>> requestBody: ', JSON.stringify(requestBody));
    }
    const {authorization} = useRegisterStore.getState();
    if (authorization) {
      console.log('>> authorization: ', authorization);
      set(config, 'headers.authorization', authorization);
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export const request = async <T>({
  method,
  url,
  params,
  body,
}: RequestParams): Promise<AxiosResponse<T>> => {
  switch (method) {
    case HttpMethod.GET:
      return instance.get(url, {params: params});
    case HttpMethod.POST:
      return instance.post(url, body, {params: params});
    case HttpMethod.PUT:
      return instance.put(url, body, {params: params});
    case HttpMethod.DELETE:
      return instance.delete(url);
    default:
      return Promise.reject(new Error('Invalid HttpMethod'));
  }
};
