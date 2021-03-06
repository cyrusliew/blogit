import React from 'react';
import Truncate from 'react-truncate';
import moment from 'moment';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';
import { ReleaseDate, FontAwesomeIcon } from './styles';

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
            {
                !!date && (
                    <ReleaseDate>
                        ReleaseDate: {moment(date).format('Do MMMM yyyy')}
                    </ReleaseDate>
                )
            }
            { link && <a href={link} target="_blank" rel="noreferrer">{link}</a>}
            <div>
                
                {[...Array(5)].map((e, index) => (
                    <FontAwesomeIcon
                        key={`star-${index}`}
                        icon="star"
                        filled={index + 1 <= parseInt(rating) ? 1 : 0}
                    />
                ))}
            </div>
            <Truncate lines={1}>{review}</Truncate>
        </TeaserWrapper>
    )
}

export default Teaser;