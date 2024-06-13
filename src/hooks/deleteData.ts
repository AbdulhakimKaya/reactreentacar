import {notification} from 'antd';
import axios, {AxiosError} from 'axios';

// import {LocalStorageHelper} from 'db';

interface ApiResponse<T = any> {
    data: T;
    isSuccess: boolean;
    isFailed: boolean;
    status: number;
    errors: string[];
    errorMessage: string;
}

export const deleteData = async (
    tempUrl?: string,
    values?: any
): Promise<ApiResponse> => {
    // const accessToken = LocalStorageHelper.getAccessToken();
    // const clientId = LocalStorageHelper.getClientId();
    // const clientKeyId = LocalStorageHelper.getClientKeyId();
    // const headers = {
    //     'x-client-id': clientId,
    //     'x-client-key': clientKeyId,
    //     Authorization: `Bearer ${accessToken?.accessToken}`,
    // };
    try {
        const response = await axios.delete(tempUrl!, {
            // headers,
            data: values,
            withCredentials: true,
        });
        notification.success({
            message: 'Success',
            description: 'İşlem başarılı.',
        });
        return {
            data: response.data,
            isSuccess: true,
            isFailed: false,
            status: response.status,
            errors: [],
            errorMessage: '',
        };
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<any>;
            if (
                axiosError.response &&
                axiosError.response.data &&
                axiosError.response.data.errors &&
                axiosError.response.data.errors.length > 0
            ) {
                const errorDescription =
                    axiosError.response.data.errors[0].errorMessage;
                notification.error({
                    message: 'Hata',
                    description: axiosError.response.data.errorMessage,
                });
                return {
                    data: {},
                    isSuccess: false,
                    isFailed: true,
                    status: axiosError.response.status || 500,
                    errors: [errorDescription],
                    errorMessage: errorDescription,
                };
            } else if (axiosError.response) {
                const statusText = axiosError.response.statusText;
                notification.error({
                    message: 'Hatalı',
                    description: axiosError.response.data.errorMessage,
                });
                return {
                    data: {},
                    isSuccess: false,
                    isFailed: true,
                    status: axiosError.response.status || 500,
                    errors: [statusText],
                    errorMessage: axiosError.response.data.errorMessage,
                };
            } else {
                notification.error({
                    message: 'Error',
                    description: 'Bir hata oluştu.',
                });
                return {
                    data: {},
                    isSuccess: false,
                    isFailed: true,
                    status: 500,
                    errors: ['Bir hata oluştu.'],
                    errorMessage: 'Bir hata oluştu.',
                };
            }
        } else {
            notification.error({
                message: 'Bilinmeyen Hata',
                description: 'Bilinmeyen bir hata oluştu.',
            });
            throw error;
        }
    }
};
