import React from 'react';
import nl2br from 'react-nl2br';
import Truncate from 'react-truncate';
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
            <Truncate lines={3}>
                <div>{nl2br(body)}</div>
            </Truncate>
        </TeaserWrapper>
    )
}

export default Teaser;