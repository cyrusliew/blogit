import styled from 'styled-components';
import { FontAwesomeIcon as OriginalFAIcon } from '@fortawesome/react-fontawesome';

export const FontAwesomeIcon = styled(OriginalFAIcon)`
    path {
        fill: ${props => props.filled ? 'orange' : 'inherit' };
    }
`;

export const ReleaseDate = styled.span`
    font-size: 1rem;
    font-weight: normal;
`;
