import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api-response";
import { callExternalApi } from "./external-api.service";
import { BaseGallery } from "src/models/gallery";

const apiServerURL = process.env.REACT_APP_API_SERVER_URL;

export const createGallery = async (
  accessToken: string,
  gallery: BaseGallery
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerURL}/galleries`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    data: gallery
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error
  };
};

export const updateGallery = async (
  accessToken: string,
  gallery: BaseGallery,
  id: number
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerURL}/galleries/${id}`,
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    data: gallery
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error
  };
};

export const deleteGallery = async (
  accessToken: string,
  id: number
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerURL}/galleries/${id}`,
    method: "DELETE",
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