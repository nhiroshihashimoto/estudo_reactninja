'use strict'

import React from 'react'
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch }) => (
    <div className='search'>
        <input
            type='search'
            placeholder='Digite o nome de usuário do GitBub'
            disabled={isDisabled}
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search
