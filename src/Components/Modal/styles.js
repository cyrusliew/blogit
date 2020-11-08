import styled from 'styled-components';

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
        position: relative;
        padding: 2rem;
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