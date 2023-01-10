import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CreateProductsForm from './CreateProductsForm';

export default function ProductCreateModal({ open, setOpen, }) {
    const [confirmLoading, setConfirmLoading] = useState(false);



    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };


    return (

        <>
            <Modal
                title="Create New Products"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <CreateProductsForm />
            </Modal>
        </>
    );
};