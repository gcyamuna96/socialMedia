import React from 'react'
import Search from '../search/search.js'
import ProfileCard from '../profileCard/profileCard.js'
import './profile.css'

const Profile = () => {
  return (
    <div className="profile">
        <Search/>
        <ProfileCard/>
    </div>
  );
}

export default Profile;
