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
        setDiscard,
        handleDiscard,
        formData,
        handleChange,
        handleDiscardConfirm,
        handleSubmit,
        isEditMode,
    } = useForm('blog');
    const {
        title,
        body,
    } = formData;

    return (
        <FormWrapper>
            <h1>{isEditMode ? `Edit Blog - ${title}` : 'New Blog'}</h1>
            <GenericForm
                discard={discard}
                handleDiscard={handleDiscard}
                handleDiscardConfirm={handleDiscardConfirm}
                handleSubmit={handleSubmit}
                setDiscard={setDiscard}
            >
                <Input
                    placeholder="Title *"
                    required
                    name="title"
                    defaultValue={title}
                    onChange={handleChange}
                />
                <TextArea
                    placeholder="Body *"
                    rows={20}
                    required
                    name="body"
                    defaultValue={body}
                    onChange={handleChange}
                />
            </GenericForm>
        </FormWrapper>
    )
}

export default Form;