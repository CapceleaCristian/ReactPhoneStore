import React from 'react';

import './SearchBar.scss'

const SearchBar = (props) => {
    const { setSearchInput } = props;

    const onChangeHandler = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <div className="searchbar-container">
            <input
                type="text"
                placeholder="Search something"
                onChange={onChangeHandler}
            />
        </div>
    )
}

export default SearchBar;
