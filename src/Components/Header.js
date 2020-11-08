import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    HeaderWrapper,
    Filter,
    FilterButton,
    SearchInput,
} from './styles';
import { icons } from '../Helpers/helpers';

const Header = ({
    filters,
    setFilters,
}) => {
    return (
        <HeaderWrapper>
            <SearchInput
                placeholder="Search anything..."
                onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
            <Filter>
                {
                    Object.keys(icons).map(icon => (
                        <FilterButton
                            key={`filter-${icon}`}
                            active={icon === filters.contentType}
                            onClick={() => {
                                if (icon === filters.contentType) {
                                    const updatedFilters = filters;
                                    delete updatedFilters['contentType']
                                    return setFilters({...updatedFilters})
                                }

                                setFilters({...filters, contentType: icon})
                            }}
                        >
                            <FontAwesomeIcon icon={icons[icon]} size="2x" />
                        </FilterButton>
                    ))
                }
            </Filter>
        </HeaderWrapper>
    )
}

export default Header;