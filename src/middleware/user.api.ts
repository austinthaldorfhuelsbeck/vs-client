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

export const createUser = async (
	user: Partial<IUser>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/users`,
		method: "POST",
		data: user,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const updateUser = async (
	id: string,
	user: Partial<IUser>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/users/${id}`,
		method: "PUT",
		data: user,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const deleteUser = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/users/${id}`,
		method: "DELETE",
	};
	return (await callExternalApi(config)) as IApiResponse;
};
