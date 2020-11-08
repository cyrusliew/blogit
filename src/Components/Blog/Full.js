import React from 'react';
import nl2br from 'react-nl2br';
import { useParams } from 'react-router-dom';
import { getNodeData } from '../../Helpers/helpers';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';

const Full = () => {
    const { id } = useParams();
    const {
        title,
        body,
    } = getNodeData(id);

    return (
        <TeaserWrapper
            contentType="blog"
            title={title}
            id={id}
        >
            <div>{nl2br(body)}</div>
        </TeaserWrapper>
    )
}

export default Full;