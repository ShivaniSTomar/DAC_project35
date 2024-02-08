import React from 'react'
import AboutUs from './AboutUs';
import Signin from './Signin';

export default function HomeComponent() {
  return (
    <div className="main">
        <div className="aboutus">
         <AboutUs></AboutUs>
        </div>
        <div className="signin">
          <Signin></Signin>
        </div>
    </div>
  )
}
