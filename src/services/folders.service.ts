import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api-response";
import { callExternalApi } from "./external-api.service";
import { BaseFolder } from "src/models/folder";

const apiServerURL = process.env.REACT_APP_API_SERVER_URL;

export const getFolder = async (
  accessToken: string,
  id: number,
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerURL}/folders/${id}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error
  };
};

export const createFolder = async (
  accessToken: string,
  folder: BaseFolder
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerURL}/folders`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    data: folder
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error
  };
};