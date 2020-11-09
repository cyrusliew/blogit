import React from 'react';
import moment from 'moment';
import useForm from '../../hooks/useForm';
import GenericForm from '../Form/GenericForm';
import {
    FormWrapper,
    Input,
    TextArea
} from '../formStyles';
import StarRating from './StarRating';


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
    } = useForm('movie');
    const {
        title,
        rating,
        review,
        link,
        date,
    } = formData;

    if (!isEditMode && !rating) {
        handleChange({target: {name: 'rating', value: 1}});
    }

    return (
        <FormWrapper>
            <h1>{isEditMode ? `Edit Movie - ${title}` : 'New Movie'}</h1>
            <GenericForm
                discard={discard}
                handleDiscard={handleDiscard}
                handleDiscardConfirm={handleDiscardConfirm}
                handleSubmit={handleSubmit}
                setDiscard={setDiscard}
            >
                <Input
                    placeholder="Title *"
                    name="title"
                    required
                    defaultValue={title}
                    onChange={handleChange}
                />
                <div
                    onChange={handleChange}
                    name="rating"
                    role="radiogroup"
                    required
                >
                    {[...Array(5)].map((e, index) => (
                        <StarRating
                            key={`rating-${index}`}
                            index={index}
                            checked={rating ? index + 1 === parseInt(rating) : index === 0}
                            filled={index + 1 <= parseInt(rating) ? 1 : 0}
                            required={index === 0}
                        />
                    ))}
                    *
                </div>
                <Input
                    placeholder="IMDB Link"
                    name="link"
                    type="url"
                    onChange={handleChange}
                    defaultValue={link}
                />
                <Input
                    placeholder="Release date"
                    type="date"
                    name="date"
                    defaultValue={moment(date).format('YYYY-MM-DD')}
                    onChange={handleChange}
                />
                <TextArea
                    placeholder="Review *"
                    rows={20}
                    required
                    name="review"
                    defaultValue={review}
                    onChange={handleChange}
                />
            </GenericForm>
        </FormWrapper>
    )
}

export default Form;