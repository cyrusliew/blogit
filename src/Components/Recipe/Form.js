import React from 'react';
import useForm from '../../hooks/useForm';
import GenericForm from '../Form/GenericForm';
import {
    FormWrapper,
    Input,
    TextArea
} from '../formStyles';

const Form = () => {
    const {
        discard,
        formData,
        handleChange,
        handleDiscard,
        handleDiscardConfirm,
        handleSubmit,
        isEditMode,
        setDiscard,
    } = useForm('recipe');
    const {
        name,
        ingredients,
        steps,
    } = formData;

    return (
        <FormWrapper>
            <h1>{isEditMode ? `Edit Recipe - ${name}` : 'New Recipe'}</h1>
            <GenericForm
                discard={discard}
                handleDiscard={handleDiscard}
                handleDiscardConfirm={handleDiscardConfirm}
                handleSubmit={handleSubmit}
                setDiscard={setDiscard}
            >
                <Input
                    placeholder="Name *"
                    name="name"
                    required
                    defaultValue={name}
                    onChange={handleChange}
                />
                <TextArea
                    placeholder="Ingedients *"
                    name="ingredients"
                    rows={20}
                    required
                    defaultValue={ingredients}
                    onChange={handleChange}
                />
                <TextArea
                    placeholder="Steps *"
                    name="steps"
                    rows={20}
                    required
                    defaultValue={steps}
                    onChange={handleChange}
                />
            </GenericForm>
        </FormWrapper>
    )
}

export default Form;