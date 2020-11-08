import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { themeColors } from '../../colors';
import { Actions } from '../ViewActions/styles';

export const Wrapper = styled.div`
    background: #f2f2f2;
    border: 1px solid ${themeColors.shadowColor};
    box-shadow: 0.5rem 0.5rem 0 0 ${themeColors.shadowColor};
    overflow: hidden;;
    padding: 2rem;
    position: relative;
    width: calc(100% - 4rem);

    &:hover {
        ${Actions} {
            opacity: 1 !important;
        }
    }
`;

export const InnerWrapper = styled.div`
    cursor: pointer;

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
