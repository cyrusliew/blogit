import React from 'react';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';
import { FontAwesomeIcon } from './styles';

const Teaser = ({
    title,
    date,
    link,
    review,
    rating,
    id,
    forceUpdate,
}) => {
    return (
        <TeaserWrapper
            contentType="movie"
            title={title}
            id={id}
            forceUpdate={forceUpdate}
        >
            <div>
                {date}
            </div>
            <a href={link}>{link}</a>
            <div>
                
                {[...Array(5)].map((e, index) => (
                    <FontAwesomeIcon
                        key={`star-${index}`}
                        icon="star"
                        filled={index + 1 <= parseInt(rating) ? 1 : 0}
                    />
                ))}
            </div>
            <div>{review}</div>
        </TeaserWrapper>
    )
}

export default Teaser;