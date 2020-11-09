import styled from 'styled-components';

export const ContentWrapper = styled.div`
    padding: 2rem;

    > *:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

export const LoadMore = styled.div`
    display: flex;
    justify-content: center;
`;
