import React from 'react';
import {
    Btn,
    FormActionsWrapper,
} from '../formStyles';

const FormActions = ({
    handleDiscard,
}) => {
    return (
        <FormActionsWrapper>
            <Btn theme="danger" type="button" onClick={handleDiscard}>Discard</Btn>
            <Btn theme="primary" type="submit">Publish</Btn>
        </FormActionsWrapper>
    )
}

export default FormActions;