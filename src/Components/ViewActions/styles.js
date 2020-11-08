import styled from 'styled-components';
import { themeColors } from '../../colors';

const CircleBtn = styled.button`
    align-items: center;
    border-radius: 100%;
    border: 0;
    color: white;
    cursor: pointer;
    display: inline-flex !important;
    height: 2rem;
    justify-content: center;
    outline: none;
    transition: all 0.25s ease;
    width: 2rem;

    > * {
        position: relative;
    }
`;

export const DeleteBtn = styled(CircleBtn)`
    background: ${themeColors.danger};
`;

export const EditBtn = styled(CircleBtn)`
    background: ${themeColors.primary}
`;

export const CloseBtn = styled(CircleBtn)`
    background: ${themeColors.primary}
`;

export const Actions = styled.div`
    display: flex;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: all 0.25s ease;

    > *:not(:last-child) {
        margin-right: 1rem;
    }
`;
