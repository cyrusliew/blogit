import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon, ReleaseDate } from './styles';
import { getNodeData } from '../../Helpers/helpers';
import FullWrapper from '../FullWrapper/FullWrapper';

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
        <FullWrapper
            contentType="movie"
            title={title}
            id={id}
        >
            {
                date && (
                    <ReleaseDate>
                        ReleaseDate: {moment(date).format('Do MMMM yyyy')}
                    </ReleaseDate>
                )
            }
            { link && <div>IMDb Link: <a href={link}>{link}</a></div> }
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
        </FullWrapper>
    )
}

export default Full;