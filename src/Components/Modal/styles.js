import styled from 'styled-components';
import { themeColors } from '../../colors';

export const ModalWrapper = styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    left: 0;
    justify-content: center;
    margin: 0 !important;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;

    > div {
        background: white;
        border: 1px solid ${themeColors.shadowColor};
        box-shadow: 0.5rem 0.5rem 0 0 ${themeColors.shadowColor};
        position: relative;
        padding: 2rem;
        margin: 2rem;
        max-width: 600px;
        width: calc(100% - 4rem);
        text-align: center;

        > div {
            justify-content: center;
        }
    }

    &::before {
        align-items: center;
        background: rgba(0,0,0, 0.5);
        bottom: 0;
        content: '';
        display: flex;
        left: 0;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
    }
`;