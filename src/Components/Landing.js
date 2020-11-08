import React, { useState, useEffect, useReducer } from 'react';
import {
    ContentWrapper,
} from './styles';
import Header from './Header';
import Recipe from './Recipe/Teaser';
import Movie from './Movie/Teaser';
import Blog from './Blog/Teaser';
import AddEntry from './AddEntry/AddEntry';
import { getData } from '../Helpers/helpers';

const getContent = (props) => ({
    movie: <Movie {...props} />,
    blog: <Blog {...props} />,
    recipe: <Recipe {...props} />,
});

const Landing = () => {
    const [data, setData] = useState(null);
    const [filters, setFilters] = useState({})
    const [__, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        setData(getData(filters).reverse());
    }, [filters, __])

    useEffect(() => {
        if (!data) {
            setData(getData().reverse());
        }
    }, [data])

    return (
        <>
            <Header filters={filters} setFilters={setFilters} />
            <ContentWrapper>
                {
                    data
                    && data.length > 0
                    && data.map((node) => (
                        getContent({
                            ...node,
                            key: node.id,
                            forceUpdate,
                        })[node.contentType]
                    ))
                }
            </ContentWrapper>
            <AddEntry />
        </>
    )
}

export default Landing;