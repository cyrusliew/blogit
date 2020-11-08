import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;

    form {
        margin: auto;
        width: 100%;

        > * {
            margin-bottom: 1.5rem;
        }
    }
`;

const defaultInputStyles = `
    background: #f5f5f5;
    border: 0;
    border-radius: 1rem;
    display: block;
    padding: 1rem;
    width: calc(100% - 2rem);
`;

export const Input = styled.input`
    ${defaultInputStyles}
`;

export const TextArea = styled.textarea`
    ${defaultInputStyles}
`;

export const FormActionsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: 2rem;

    > * {
        margin-bottom: 1rem;
    }

    @media (min-width: 541px) {
        > *:not(:last-child) {
            margin-right: 1rem;
        }
    }

    @media (max-width: 540px) {
        > * {
            width: 100%;
        }
    }
`;

const defaultBtnStyles = `
    align-items: center;
    border: 0;
    border-radius: 0.25rem;
    display: inline-flex;
    font-size: 16px;
    justify-content: center;
    min-width: 12rem;
    padding: 1rem 1rem;
    text-decoration: unset;
    transition: all 0.25s ease;

    &:not(:disabled) {
        cursor: pointer;
    }
`;

const primaryBtnStyles = `
    background: darkblue;
    color: white;

    &:hover {
        background: darken(darkblue, 10);
    }
`;

const dangerBtnStyles = `
    background: salmon;
    color: white;

    &:hover {
        background: darken(salmon, 10);
    }
`;

const btnStyles = {
    danger: dangerBtnStyles,
    primary: primaryBtnStyles,
}

export const LinkBtn = styled(Link)`
    ${defaultBtnStyles}
    ${props => btnStyles[props.theme]}
`;

export const Btn = styled.button`
    ${defaultBtnStyles}
    ${props => btnStyles[props.theme]}
`;
