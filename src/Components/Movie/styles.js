import styled from 'styled-components';
import { FontAwesomeIcon as OriginalFAIcon } from '@fortawesome/react-fontawesome';

export const FontAwesomeIcon = styled(OriginalFAIcon)`
    path {
        fill: ${props => props.filled ? 'orange' : 'inherit' };
    }
`;
