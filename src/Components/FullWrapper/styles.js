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
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: all 0.25s ease;

    > *:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const Wrapper = styled.div`
    flex: 1;
    overflow: hidden;
    padding: 2rem;
    position: relative;
    width: calc(100% - 4rem);
`;

export const InnerWrapper = styled.div`
    margin: auto;
    max-width: 991px;

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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    > h1 {
        font-size: min(3.5rem, 6vw);
        line-height: 1.2;
        margin: 0 0 2rem 0;
    }
`;

export const TypeWrapper = styled.div`
    align-items: center;
    display: flex;

    svg {
        path {
            fill: #aaa;
        }
    }

    > h2 {
        color: #aaa;
        font-size: min(3rem, 5.5vw);
        font-weight: normal;
        line-height: 1.2;
        margin-left: 1rem;
        
        &:first-letter {
            text-transform: uppercase;
        }
    }
`;
