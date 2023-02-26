import React from 'react'
import Profile from '../../components/profile/profile.js'
import './home.css'

const Home = () => {
  return (
    <div className="homePage">
        <Profile/>
        <div className="">Post</div>
        <div>Suggestion</div>
    </div>
  );
}

export default Home;
