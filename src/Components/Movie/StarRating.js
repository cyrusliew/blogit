import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from './styles';

const Wrapper = styled.label`
    position: relative;

    input {
        opacity: 0;
        position: absolute;
        z-index: -1;

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
                defaultChecked={checked}
                required={required}
            />
            <FontAwesomeIcon icon="star" filled={filled} />
        </Wrapper>
    )
}

export default StarRating;