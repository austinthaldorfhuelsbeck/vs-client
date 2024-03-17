import { AxiosRequestConfig } from "axios";

import { IApiResponse } from "../interfaces/api.interface";
import { IGallery } from "../interfaces/models.interface";
import { callExternalApi } from "./external.api";

const baseUrl = process.env.REACT_APP_BASE_API_URL || "";

export const fetchGalleries = async (userId: string): Promise<IApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${baseUrl}/api/v1/galleries?userId=${userId}`,
    method: "GET",
  };
  return (await callExternalApi(config)) as IApiResponse;
};

export const fetchGallery = async (id: string): Promise<IApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${baseUrl}/api/v1/galleries/${id}`,
    method: "GET",
  };
  return (await callExternalApi(config)) as IApiResponse;
};

export const createGallery = async (
	gallery: Partial<IGallery>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/galleries`,
		method: "POST",
		data: gallery,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const updateGallery = async (
	id: string,
	gallery: Partial<IGallery>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/galleries/${id}`,
		method: "PUT",
		data: gallery,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const deleteGallery = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/galleries/${id}`,
		method: "DELETE",
	};
	return (await callExternalApi(config)) as IApiResponse;
};
