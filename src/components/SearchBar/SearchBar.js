import React, { useState, } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBrandName, getPhoneInfo } from '../../store/actions/fetchDataAction';
import './SearchBar.scss';

const SearchBar = (props) => {

   const { brandHandler, onFetch } = props;
   const [searchInput, setSearchInput] = useState('');

   const onChangeHandler = (e) => {
      setSearchInput(e.target.value);
   }

   const handleEnterPress = (e) => {
      if (e.which === 13) {
         brandHandler(searchInput);
         onFetch();
         setSearchInput('');
      }
   }

   return (
      <div className="searchbar-container"  >
         <input
            type="text"
            placeholder="Search something"
            onChange={onChangeHandler}
            onKeyPress={handleEnterPress}
            value={searchInput}
         />
      </div>
   )
}

const mapStateToProps = state => ({
   brandName: state.phonesData.brand
});

const mapDispatchToProps = ({
   brandHandler: getBrandName,
   onFetch: getPhoneInfo
});

SearchBar.propTypes = {
   brandHandler: PropTypes.func,
   onFetch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
