import React from 'react'
import LeftHome from '../../components/leftHome/leftHome.js'
import MiddleHome from '../../components/middleHome/middleHome.js'
import './home.css'

const Home = () => {
  return (
    <div className="homePage">
        <LeftHome/>
        <MiddleHome/>
        <div>Suggestion</div>
    </div>
  );
}

export default Home;
