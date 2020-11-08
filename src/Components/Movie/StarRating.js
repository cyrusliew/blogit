import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from './styles';

const Wrapper = styled.label`
    input {
        display: none;

        &:checked {
            + svg {
                path {
                    fill: orange;
                }
            }
        }
    }
`;

const StarRating = ({
    checked,
    index,
    filled,
    required,
}) => {
    return (
        <Wrapper
            tabIndex={0}
            role="radiogroup"
        >
            <input
                type="radio"
                name="rating"
                tabIndex={0}
                value={index + 1}
                checked={checked}
                defaultValue={checked}
                required={required}
            />
            <FontAwesomeIcon icon="star" filled={filled} />
        </Wrapper>
    )
}

export default StarRating;