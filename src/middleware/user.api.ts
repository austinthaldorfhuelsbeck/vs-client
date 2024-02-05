import { AxiosRequestConfig } from "axios";

import { callExternalApi } from "./external.api";
import { IUser } from "../interfaces/models.interface";
import { IApiResponse } from "../interfaces/api.interface";

export const fetchUser = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `/api/v1/users/${id}`,
		method: "GET",
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const createUser = async (
	user: Partial<IUser>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: "/api/v1/users",
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
		url: `/api/v1/users/${id}`,
		method: "PUT",
		data: user,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const deleteUser = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `/api/v1/users/${id}`,
		method: "DELETE",
	};
	return (await callExternalApi(config)) as IApiResponse;
};
