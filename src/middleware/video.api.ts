import { AxiosRequestConfig } from "axios";

import { IApiResponse } from "../interfaces/api.interface";
import { IVideo } from "../interfaces/models.interface";
import { callExternalApi } from "./external.api";

const baseUrl = process.env.REACT_APP_BASE_API_URL || "";

export const listVideos = async (
	galleryQ: string,
	searchQ?: string,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		method: "GET",
	};
	// can fetch by gallery or search
	if (searchQ) {
		config.url = `${baseUrl}/api/v1/videos?gallery=${galleryQ}${searchQ}`;
	} else {
		config.url = `${baseUrl}/api/v1/videos?gallery=${galleryQ}`;
	}
	return (await callExternalApi(config)) as IApiResponse;
};

export const postVideo = async (
	video: Partial<IVideo>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/videos`,
		method: "POST",
		data: video,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const fetchVideo = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/videos/${id}`,
		method: "GET",
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const updateVideo = async (
	id: string,
	video: Partial<IVideo>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/videos/${id}`,
		method: "PUT",
		data: video,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const deleteVideo = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/videos/${id}`,
		method: "DELETE",
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const addView = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/videos/view/${id}`,
		method: "PUT",
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const addDownload = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `${baseUrl}/api/v1/videos/download/${id}`,
		method: "PUT",
	};
	return (await callExternalApi(config)) as IApiResponse;
};
