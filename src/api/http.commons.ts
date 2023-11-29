// src/api/httpCommons.ts
import axios, { AxiosInstance, AxiosResponse } from "axios";

interface RequestOptions {
  baseURL?: string;
}

const createApiInstance = (options: RequestOptions): AxiosInstance => {
  return axios.create({
    baseURL: options.baseURL,
  });
};

const getOptions = async () => ({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  mode: "cors",
});

const errorResponse = (error: any) => {
  const { response } = error;
  let message = error;
  if (response) {
    const { data } = response;
    message = data;
  }
  return message;
};

export const get = async <T>(
  url: string,
  options: RequestOptions,
): Promise<T> => {
  try {
    const api = createApiInstance(options);
    const optionsWithHeaders = { ...(await getOptions()), ...options };
    const response: AxiosResponse<T> = await api.get(url, optionsWithHeaders);
    return response.data;
  } catch (error: any) {
    throw errorResponse(error);
  }
};
