import axios, {AxiosError, AxiosResponse} from "axios";
import {SERVER_API} from "@/shared/constants";

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response
};
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

export const axiosInstance = axios.create({
    baseURL: SERVER_API,
    timeout: 1000,
    headers: {
        'accept': 'application/json',
    }
});

axiosInstance.interceptors.response.use(onResponse, onResponseError);
