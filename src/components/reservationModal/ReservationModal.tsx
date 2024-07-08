import React from 'react';
import {Modal} from 'antd';

interface ReservationModalProps {
    isModalOpen: boolean;
    handleCancel: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({isModalOpen, handleCancel}) => {
    const phoneNumber = "+90 (123) 456 7890";
    const emailAddress = "info@rentacar.com";

    return (
        <Modal title={<div className="text-xl">Rezervasyon Bilgileri</div>} visible={isModalOpen}
               onCancel={handleCancel} footer={null}>
            <div className="text-base py-5">
                <div>
                    <b>
                        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    </b>{" "}
                    numarasını arayarak hızlı bir şekilde rezervasyon yaptırabilirsiniz.
                </div>
                <div>
                    veya{" "}
                    <b>
                        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                    </b>{" "}
                    email adresine mail atarak bizimle iletişime geçebilirsiniz.
                </div>
            </div>
        </Modal>
    );
};

export default ReservationModal;
