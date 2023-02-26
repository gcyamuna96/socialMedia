import React from 'react'
import './profileCard.css'
import Profile from '../../img/profile.jpeg'
import Cover from '../../img/cover.jpeg'

const ProfileCard = () => {
  return (
    <div className="profileCard">
        <div className="profileImage">
            <img src={Cover} alt="Cover"/>
            <img src={Profile} alt="ProfilePic"/>
        </div>

        <div className="profileInfo">
            <span>Name Here</span>
            <span>Your Status here</span>
        </div>

        <div className="follow">
            <hr/>
            <div className="followers">
                <span>9504</span>
                <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="following">
                <span>855</span>
                <span>Following</span>
            </div>
            <hr/>
        </div>

        
    </div>
  );
}

export default ProfileCard;
