import axios, {AxiosResponse} from 'axios';
import qs from 'qs';
import Config from 'react-native-config';
import {HttpMethod, RequestParams} from '@src/apis/client/types';

const instance = axios.create({
  // 3초뒤 요청 타임아웃
  timeout: 3000,
  // 배열 파라미터 전송 시 [] 제외하고 전송
  paramsSerializer: (params: unknown) =>
    qs.stringify(params, {arrayFormat: 'brackets'}),
  // cors error handling
  withCredentials: true,
  baseURL: Config.BASE_URL,
});

instance.interceptors.request.use(
  request => {
    const requestBody = request.data;
    const BaseUrl = request.url;
    console.log('>> BaseUrl: ', BaseUrl);
    if (requestBody) {
      console.log('>> requestBody: ', JSON.stringify(requestBody));
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
