import { AxiosRequestConfig } from "axios";

import { IApiResponse } from "../interfaces/api.interface";
import { IUser } from "../interfaces/models.interface";
import { callExternalApi } from "./external.api";

const baseUrl = process.env.REACT_APP_BASE_API_URL || "";

export const login = async (cred: Partial<IUser>): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		method: "POST",
		url: `${baseUrl}/api/v1/auth/login`,
		data: cred,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const register = async (cred: Partial<IUser>): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		method: "POST",
		url: `${baseUrl}/api/v1/auth/register`,
		data: cred,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const logout = async (): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		method: "POST",
		url: `${baseUrl}/api/v1/auth/logout`,
	};
	return (await callExternalApi(config)) as IApiResponse;
};
