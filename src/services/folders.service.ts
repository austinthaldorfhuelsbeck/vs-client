import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api-response";
import { callExternalApi } from "./external-api.service";

const apiServerURL = process.env.REACT_APP_API_SERVER_URL;

export const getFolder = async (
  accessToken: string,
  id: number,
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerURL}/folders/${id}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;
  // console.log("Data: ", data, " Err: ", error);

  return {
    data,
    error,
  };
};
