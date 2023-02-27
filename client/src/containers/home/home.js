import React from 'react'
import LeftHome from '../../components/leftHome/leftHome.js'
import './home.css'

const Home = () => {
  return (
    <div className="homePage">
        <LeftHome/>
        <div className="">Post</div>
        <div>Suggestion</div>
    </div>
  );
}

export default Home;
