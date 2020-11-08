import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    AddButton,
    ButtonsWrapper,
    Wrapper
} from './styles';

const AddEntry = () => {
    return (
        <Wrapper>
            <AddButton>
                +
            </AddButton>
            <ButtonsWrapper>
                <Link to="/movie/new">
                    <FontAwesomeIcon icon="film" />
                </Link>
                <Link to="/blog/new">
                    <FontAwesomeIcon icon="file-alt" />
                </Link>
                <Link to="/recipe/new">
                    <FontAwesomeIcon icon="utensils" />
                </Link>
            </ButtonsWrapper>
        </Wrapper>
    )
}

export default AddEntry;