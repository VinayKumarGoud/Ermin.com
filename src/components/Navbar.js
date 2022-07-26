

import React, { useState } from 'react'
import '../styles/Navbar.css'


function Navbar() {

  const [showdiv, setShowDiv] = useState(false);



  return (
    <nav >
      <div className="navbar ">
        <div className="navbar_logo">
          <a href="/">ERMIN</a>
        </div>

        <div className="navbar_links1">
          <ul className="navlinks">
            <li><a href="/Miles">Classic</a></li>
            <li><a href="/Miles">Concrete</a></li>
            <li><a href="/Miles">Endless</a></li>
          </ul>
        </div>
        <div className="navbar_links2">
          <ul  >
            <li><a href="/AboutUs">About</a></li>
            <li><a href="/Traway">Ripple</a></li>
            <li><a href="/ContactUs">Contact</a></li>

            <div >
              <img className="add-to-cart" src="../images/add_to_cart.png" alt="" />
            </div>
            <img src="../images/navbar_toggle_img.svg"
              className="navbar_toggle_img"

              onClick={() => {

                setShowDiv(!showdiv)
              }}
              alt="" />
          </ul>

        </div>




      </div>

      {
        showdiv ?
          <div className="navbar_navlinks_toggle">
            <div><img className="navbar_navlinks_toggle_img"
              src="../images/close.svg"
              onClick={() => {
                setShowDiv(!showdiv)
              }}
              alt="" /></div>
            <div>
              <ul>
                <li><a href="/Miles">Classic</a></li>
                <li><a href="/Miles">Concrete</a></li>
                <li><a href="/Miles">Endless</a></li>
                <li><a href="/AboutUs">About</a></li>
                <li><a href="/Traway">Ripple</a></li>
                <li><a href="/ContactUs">Contact</a></li>
              </ul>
            </div>

          </div>
          : null
      }
    </nav>

  )

}




export default Navbar
