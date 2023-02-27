import React from 'react'
import Search from '../search/search.js'
import ProfileCard from '../profileCard/profileCard.js'
import './leftHome.css'

const LeftHome = () => {
  return (
    <div className="profile">
        <Search/>
        <ProfileCard/>
    </div>
  );
}

export default LeftHome;
