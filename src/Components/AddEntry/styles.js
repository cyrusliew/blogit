import styled from 'styled-components';
import { colors, themeColors } from '../../colors';

export const AddButton = styled.button`
    align-items: center;
    background: ${colors.norway};
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    height: 4rem;
    font-size: 2rem;
    justify-content: center;
    outline: none;
    width: 4rem;

    + div {
        opacity: 0;
        transition: all 0.25s ease;
    }
`;

export const ButtonsWrapper = styled.div`
    bottom: 0;
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    > a {
        align-items: center;
        background: ${themeColors.primary};
        border: 0;
        border-radius: 100%;
        bottom: 0;
        color: ${colors.charade};
        display: inline-flex;;
        height: 3rem;
        left: 0;
        justify-content: center;
        margin: auto;
        position: absolute;
        right: 0;
        top: 0;
        transition: all 0.25s ease;
        width: 3rem;
    }
`;

export const Wrapper = styled.div`
    bottom: 1rem;
    position: fixed;
    right: 1rem;
    transition: all 0.25s ease;

    &:hover,
    &:focus-within {
        padding: 3rem 0 0 3rem;

        ${ButtonsWrapper} {
            opacity: 1;

            > a {
                pointer-events: auto;

                &:first-child {
                    transform: translate(1.5rem, -2.5rem);
                }

                &:nth-child(2) {
                    transform: translate(-1.5rem, -1.5rem);
                }

                &:nth-child(3) {
                    transform: translate(-2.5rem, 1.5rem);
                }
            }
        }
    }
        
`;
