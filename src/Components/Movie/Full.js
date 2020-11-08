import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';
import { FontAwesomeIcon, ReleaseDate } from './styles';
import { getNodeData } from '../../Helpers/helpers';

const Full = () => {
    const { id } = useParams();
    const {
        title,
        date,
        link,
        review,
        rating,
    } = getNodeData(id);

    return (
        <TeaserWrapper
            contentType="movie"
            title={
                <>
                    {title}
                    {' '}
                    <ReleaseDate>
                        {moment(date).format('Do MMMM yyyy')}
                    </ReleaseDate>
                </>
            }
            id={id}
        >
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

export default Full;