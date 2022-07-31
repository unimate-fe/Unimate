import axios, {AxiosResponse} from 'axios';
import qs from 'qs';
import {get, set} from 'lodash';
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
  baseURL: 'http://15.164.225.83:8000',
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
    const {token} = useRegisterStore.getState();
    console.log(token);
    if (token) {
      console.log('>> authorization: ', token);
      set(request, 'headers.Authorization', `Token ${token}`);
    }

    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    const {
      headers,
      config: {method, baseURL, url},
      status,
      statusText,
    } = response;

    const apiUrl = `${baseURL}${url}`;

    const authorization = get(headers, 'Authorization');
    if (authorization) {
      console.log('### save responsed authorization: ', authorization);
      useRegisterStore.getState().setToken(authorization.split('Token ')[1]);
    }

    console.log(`<< RESPONSE [${method}]: ${apiUrl}`);
    console.log(`<< RESPONSE [${status}]: ${statusText ?? ''}`);
    console.log(`<< RESPONSE HEADERS: ${JSON.stringify(headers)}`);
    console.log('<<<<<<<<<<<<<<<');

    return response;
  },
  err => {
    const method = get(err, 'config.method');
    const url = `${get(err, 'config.baseURL')}${get(err, 'config.url')}`;
    console.log(`<< ERROR [${method}]: ${url}`);
    console.log(`<< ERROR: `, JSON.stringify(get(err, 'response.data')));
    // console.log(`<< ERROR: `, err.toJSON().message);
    // console.log(`<< ERROR: `, JSON.stringify(err));
    console.log('<<<<<<<<<<<<<<<');
    return Promise.reject(err);
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
