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

        <div className="followInfo">
            <hr/>
            <div>
            <div className="follows">
                <span>9504</span>
                <span>Followers</span>
            </div>

            <div className="vl"></div>
            <div className="follows">
                <span>855</span>
                <span>Following</span>
            </div>
            </div>
            <hr/>
        </div>

        <span>My Profile</span>
        
    </div>
  );
}

export default ProfileCard;
