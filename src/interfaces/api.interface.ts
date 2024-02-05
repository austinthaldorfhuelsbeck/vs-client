export interface IAppError {
	status?: number;
	message: string;
}

export interface IApiResponse {
	data: any;
	error: IAppError | null;
}
