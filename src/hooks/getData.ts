import axios from 'axios';
import {notification} from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';

dayjs.locale('tr');
export const fetchDataDetail = async (
    tempUrl?: string,
) => {
    try {
        const response = await axios.get(tempUrl!);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        notification.error({
            message: 'Veri getirme hatası',
            description: 'Veriler getirilirken bir hata oluştu. Lütfen tekrar deneyin.'
        });
        return null;
    }

};
