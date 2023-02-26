import React from 'react'
import './search.css'
import Logo from '../../img/logo.png'
import {FaSearch} from 'react-icons/fa'

const Search = () => {
  return (
    <div className="searchBar">
        <img src={Logo} alt="logo" />

        <div className="search">
            <input type="text" placeholder="Search"/>
            <div className="search-icon">
                <FaSearch />
            </div>
        </div>

    </div>
  );
}

export default Search;
