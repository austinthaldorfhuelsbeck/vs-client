import { AxiosRequestConfig } from "axios";

import { IApiResponse } from "../interfaces/api.interface";
import { ISocial } from "../interfaces/models.interface";
import { callExternalApi } from "./external.api";

const baseUrl = process.env.REACT_APP_BASE_API_URL || "";

export const createSocial = async (
	user: Partial<ISocial>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/socials`,
		method: "POST",
		data: user,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const fetchSocial = async (userId: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/socials/${userId}`,
		method: "GET",
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const updateSocial = async (
	id: string,
	user: Partial<ISocial>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/socials/${id}`,
		method: "PUT",
		data: user,
	};
	return (await callExternalApi(config)) as IApiResponse;
};
