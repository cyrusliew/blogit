import React from 'react';
import nl2br from 'react-nl2br';
import Truncate from 'react-truncate';
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
            <Truncate lines={3}>
                <div>{nl2br(ingredients)}</div>
                <div>{nl2br(steps)}</div>
            </Truncate>
        </TeaserWrapper>
    )
}

export default Teaser;