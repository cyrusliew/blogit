import React, { useEffect } from 'react';
import { Btn, FormActionsWrapper } from '../formStyles'
import { ModalWrapper } from './styles';

const Modal = ({
    children,
    handleOk,
    handleCancel,
}) => {
    useEffect(() => {
        const body = document.querySelector('body');

        if (body !== null) {
            body.style.overflow = 'hidden';
    
            return () => {
                body.style.overflow = 'auto';
            }
        }
    }, [])

    return (
        <ModalWrapper>
            <div>
                {children}
                <FormActionsWrapper>
                    <Btn
                        theme="danger"
                        onClick={handleOk}
                    >
                        Yes
                    </Btn>
                    <Btn
                        theme="primary"
                        onClick={handleCancel}
                    >
                        No
                    </Btn>
                </FormActionsWrapper>
            </div>
        </ModalWrapper>
    )
}

export default Modal;