import React, { useState, useEffect, useReducer } from 'react';
import {
    ContentWrapper, LoadMore,
} from './styles';
import Header from './Header/Header';
import Recipe from './Recipe/Teaser';
import Movie from './Movie/Teaser';
import Blog from './Blog/Teaser';
import AddEntry from './AddEntry/AddEntry';
import { getData } from '../Helpers/helpers';
import EmptyView from './EmptyView/EmptyView';
import { Btn } from './formStyles';

const getContent = (props) => ({
    movie: <Movie {...props} />,
    blog: <Blog {...props} />,
    recipe: <Recipe {...props} />,
});

const Landing = () => {
    const [data, setData] = useState(null);
    const [filters, setFilters] = useState({})
    const [listCount, setListCount] = useState(10);
    const [__, forceUpdate] = useReducer(x => x + 1, 0);
    const hasFilters = Object.keys(filters).length !== 0;

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
                    && data.map((node, index) => {
                        if (index + 1 > listCount){
                            return null;
                        }

                        return (
                            getContent({
                                ...node,
                                key: node.id,
                                forceUpdate,
                            })[node.contentType]
                        )
                    })
                }
                {
                    data && data.length === 0 && !hasFilters && (
                        <EmptyView
                            title="This space is empty"
                            message="Start filling this place up by creating new content."
                        />
                    )
                }
                {
                    data && data.length === 0 && hasFilters && (
                        <EmptyView
                            title="No result found"
                            message="Please try a different search."
                        />
                    )
                }
                {
                    data && data.length > listCount && (
                        <LoadMore>
                            <Btn theme="primary" onClick={() => setListCount(listCount + 10)}>
                                Load more
                            </Btn>
                        </LoadMore>
                    )
                }
            </ContentWrapper>
            <AddEntry />
        </>
    )
}

export default Landing;