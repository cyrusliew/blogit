import React from 'react';
import nl2br from 'react-nl2br';
import { useParams } from 'react-router-dom';
import { getNodeData } from '../../Helpers/helpers';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';

const Full = () => {
    const { id } = useParams();
    const {
        name,
        ingredients,
        steps,
    } = getNodeData(id);

    return (
        <TeaserWrapper
            contentType="recipe"
            title={name}
            id={id}
        >
            <strong>Ingredients</strong>
            <div>{nl2br(ingredients)}</div>
            <br />
            <strong>Steps:</strong>
            <div>{nl2br(steps)}</div>
        </TeaserWrapper>
    )
}

export default Full;