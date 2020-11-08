import React from 'react';
import { Wrapper } from './styles';

const EmptyView = ({
    title,
    message,
}) => (
    <Wrapper>
        <h2>{title}</h2>
        <p>{message}</p>
    </Wrapper>
)

export default EmptyView;