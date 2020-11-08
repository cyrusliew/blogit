import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export const Actions = styled.div`
    display: flex;
    opacity: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: all 0.25s ease;

    > *:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const Wrapper = styled.div`
    background: #f2f2f2;
    overflow: hidden;;
    padding: 2rem;
    position: relative;
    width: calc(100% - 4rem);

    &:hover {
        ${Actions} {
            opacity: 1;
        }
    }

    > * {
        display: block;
        margin-bottom: 1rem;
    }
`;

export const BGFontAwesomeIcon = styled(FontAwesomeIcon)`
    bottom: 0;
    left: 0;
    margin: auto;
    position: absolute;
    top: 0;
    z-index: 0;

    path {
        fill: #ddd;
    }
`;

export const ContentWrapper = styled.div`
    position: relative;
`;

export const Header = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    
    > h2 {
        margin: 0 0 0 0.5rem;
    }
`;
