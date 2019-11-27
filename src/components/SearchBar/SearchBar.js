import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBrandName, getPhoneInfo } from '../../store/actions/fetchDataAction';
import './SearchBar.scss';

const SearchBar = ({ brandHandler, onFetch }) => {

   const [searchInput, setSearchInput] = useState('');

   const onChangeHandler = e => {
      setSearchInput(e.target.value);
   }

   const handleEnterPress = e => {
      e.preventDefault();
      if (!searchInput) {
         return false;
      }
      brandHandler(searchInput);
      onFetch();
      setSearchInput('');
   }

   return (
      <div className="searchbar-container" >
         <form onSubmit={handleEnterPress}>
            <input
               type="text"
               placeholder="Search something"
               onChange={onChangeHandler}
               value={searchInput}
            />
         </form>
      </div>
   )
}

const mapStateToProps = state => ({
   brandName: state.phonesData.brand
})

const mapDispatchToProps = {
   brandHandler: getBrandName,
   onFetch: getPhoneInfo
}

SearchBar.propTypes = {
   brandHandler: PropTypes.func,
   onFetch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
