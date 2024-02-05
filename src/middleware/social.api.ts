import { AxiosRequestConfig } from "axios";

import { callExternalApi } from "./external.api";
import { ISocial } from "../interfaces/models.interface";
import { IApiResponse } from "../interfaces/api.interface";

export const createSocial = async (
	user: Partial<ISocial>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: "/api/v1/socials",
		method: "POST",
		data: user,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const fetchSocial = async (userId: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `/api/v1/socials/${userId}`,
		method: "GET",
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const updateSocial = async (
	id: string,
	user: Partial<ISocial>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `/api/v1/socials/${id}`,
		method: "PUT",
		data: user,
	};
	return (await callExternalApi(config)) as IApiResponse;
};
