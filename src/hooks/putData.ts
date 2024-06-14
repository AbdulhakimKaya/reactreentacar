import axios, {AxiosError} from 'axios';
import {notification} from 'antd';
import {GenericDataItem} from "./Generic";

interface PostDataProps {
    tempUrl?: string;
    tempFilter?: boolean;
    purchaseFilter?: boolean;
    values?: GenericDataItem | string | undefined;
    valuesProduct?: { recipeId: number; products: string[] } | undefined;
    valuesPurchase?: { limitId: number; products: string[] } | undefined;
    params?: { [key: string]: string | number };
    includeMultipartHeader?: boolean;
}

export const putData = async ({
                                  tempUrl,
                                  valuesProduct,
                                  valuesPurchase,
                                  tempFilter,
                                  purchaseFilter,
                                  values,
                                  params,
                                  includeMultipartHeader = false
                              }: PostDataProps) => {
    // const accessToken = LocalStorageHelper.getAccessToken();
    // const clientId = LocalStorageHelper.getClientId();
    // const clientKeyId = LocalStorageHelper.getClientKeyId();
    // const headers: { [key: string]: string } = {
    //   'x-client-id': clientId,
    //   'x-client-key': clientKeyId,
    //   // 'x-api-key': '64c6f44f-bf5b-40e2-9aeb-ea2c9088511d',
    //   Authorization: `Bearer ${accessToken?.accessToken}`,
    // };
    // if (includeMultipartHeader) {
    //   headers['Content-Type'] = 'multipart/form-data';
    // }
    try {
        // if (tempFilter) {
        // const jsonString = `[${valuesProduct?.products[0] || ''}]`.trim();
        //   const parsedValues = JSON.parse(jsonString);
        //   values = { products: parsedValues, recipeId: valuesProduct?.recipeId };
        // }
        // if (purchaseFilter) {
        //   const jsonString = `[${valuesPurchase?.products[0] || ''}]`.trim();
        //   const parsedValues = JSON.parse(jsonString);
        //   values = { products: parsedValues, limitId: valuesPurchase?.limitId };
        // }
        const response = await axios.put(tempUrl!, values);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<any>;
            console.log(axiosError);
            if (axiosError.response && axiosError.response.data && axiosError.response.data.errors) {
                if (axiosError.response.data.errors.length === 0 && axiosError.response.data.errorMessage) {
                    notification.error({
                        message: 'Hata',
                        description: axiosError.response.data.errorMessage
                    });
                } else {
                    axiosError.response.data.errors.forEach((errorItem: any) => {
                        const errorDescription = errorItem.attemptedValue ? `${errorItem.description} (${errorItem.attemptedValue})` : errorItem.description;
                        notification.error({
                            message: 'Hata',
                            description: errorDescription
                        });
                    });
                }
            } else {
                notification.error({
                    message: 'Error',
                    description: 'Hatalı işlem.'
                });
            }
        } else {
            notification.error({
                message: 'Unknown Error',
                description: 'Bilinmeyen hata.'
            });
        }
        throw error;
    }
};
