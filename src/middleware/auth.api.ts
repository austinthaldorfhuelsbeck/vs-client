import { AxiosRequestConfig } from "axios";

import { callExternalApi } from "./external.api";
import { IUser } from "../interfaces/models.interface";
import { IApiResponse } from "../interfaces/api.interface";

export const login = async (cred: Partial<IUser>): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		method: "POST",
		url: "/api/v1/auth/login",
		data: cred,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const logout = async (): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		method: "POST",
		url: "/api/v1/auth/logout",
	};
	return (await callExternalApi(config)) as IApiResponse;
};
