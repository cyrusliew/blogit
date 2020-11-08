import React from 'react';
import nl2br from 'react-nl2br';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';

const Teaser = ({
    name,
    ingredients,
    steps,
    id,
    forceUpdate,
}) => {
    return (
        <TeaserWrapper
            contentType="recipe"
            title={name}
            id={id}
            forceUpdate={forceUpdate}
        >
            <div>{nl2br(steps)}</div>
            <div>{nl2br(ingredients)}</div>
        </TeaserWrapper>
    )
}

export default Teaser;