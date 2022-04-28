import {AxiosError, AxiosResponse} from 'axios';

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export interface RequestParams {
  method: HttpMethod;
  url: string;
  params?: Record<string, unknown>;
  body?: FormData | string | unknown;
}

export type Res<T> = T;

export type AppResponse = AxiosResponse | AxiosError | null;
