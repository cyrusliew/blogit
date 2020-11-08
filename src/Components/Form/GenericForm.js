import React from 'react';
import Modal from '../Modal/Modal';
import FormActions from './FormActions';

const GenericForm = ({
    children,
    discard,
    handleDiscard,
    handleDiscardConfirm,
    handleSubmit,
    setDiscard,
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                {children}
                <FormActions handleDiscard={handleDiscard} />
            </form>
            {
                discard && (
                <Modal
                    handleOk={handleDiscardConfirm}
                    handleCancel={() => setDiscard(false)}
                >
                    <h1>Are you sure you want to discard?</h1>
                </Modal>
            )}
        </>
    )
}

export default GenericForm;
