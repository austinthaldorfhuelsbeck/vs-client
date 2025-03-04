import { AxiosRequestConfig } from "axios";

import { IApiResponse } from "../interfaces/api.interface";
import { IUser } from "../interfaces/models.interface";
import { callExternalApi } from "./external.api";

const baseUrl = process.env.REACT_APP_BASE_API_URL || "";

export const fetchUser = async (id: string): Promise<IApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${baseUrl}/api/v1/users/${id}`,
    method: "GET",
  };
  return (await callExternalApi(config)) as IApiResponse;
};

export const fetchUserByEmail = async (
  email: string
): Promise<IApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${baseUrl}/api/v1/users?email=${email}`,
    method: "GET",
  };
  return (await callExternalApi(config)) as IApiResponse;
};

export const updateUser = async (
  id: string,
  user: Partial<IUser>
): Promise<IApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${baseUrl}/api/v1/users/${id}`,
    method: "PUT",
    data: user,
  };
  return (await callExternalApi(config)) as IApiResponse;
};