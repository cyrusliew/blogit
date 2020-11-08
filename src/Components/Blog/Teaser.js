import React from 'react';
import nl2br from 'react-nl2br';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';

const Teaser = ({
    title,
    body,
    id,
    forceUpdate,
}) => {
    return (
        <TeaserWrapper
            contentType="blog"
            title={title}
            id={id}
            forceUpdate={forceUpdate}
        >
            <div>{nl2br(body)}</div>
        </TeaserWrapper>
    )
}

export default Teaser;