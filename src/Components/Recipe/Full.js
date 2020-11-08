import React from 'react';
import nl2br from 'react-nl2br';
import { useParams } from 'react-router-dom';
import { getNodeData } from '../../Helpers/helpers';
import FullWrapper from '../FullWrapper/FullWrapper';

const Full = () => {
    const { id } = useParams();
    const {
        name,
        ingredients,
        steps,
    } = getNodeData(id);

    return (
        <FullWrapper
            contentType="recipe"
            title={name}
            id={id}
        >
            <strong>Ingredients</strong>
            <div>{nl2br(ingredients)}</div>
            <br />
            <strong>Steps:</strong>
            <div>{nl2br(steps)}</div>
        </FullWrapper>
    )
}

export default Full;