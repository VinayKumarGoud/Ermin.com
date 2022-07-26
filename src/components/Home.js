import React, { useState } from 'react'
import '../styles/Home.css'

function Home() {
  const [showdiv, setShowDiv] = useState(false);
  return (
    <div>


      <div className="table1">
        <img src="../images/Video.png"  alt=""></img>

        <div className="home_navbar">
          <div className="home_navbar_logo">
            <a href="/">ERMIN</a>
          </div>

          <div className="home_navbar_links1">
            <ul className="home_navlinks">
              <li><a href="/Miles">Classic</a></li>
              <li><a href="/Miles">Concrete</a></li>
              <li><a href="/Miles">Endless</a></li>
            </ul>
          </div>
          <div className="home_navbar_links2">
            <ul  >
              <li><a href="/AboutUs">About</a></li>
              <li><a href="/Traway">Ripple</a></li>
              <li><a href="/ContactUs">Contact</a></li>

              
              <div>
                <img src="../images/coolicon.png"
                className="home_navbar_toggle_img"

                onClick={() => {

                  setShowDiv(!showdiv)
                }}
                alt="" /></div>
              
            </ul>

          </div>




        </div>

        {
          showdiv ?
            <div className="navlinks_toggle">
              <div><img className="navlinks_toggle_img"
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

        <div className="text">
          <h1>Ermin Miles </h1>
          <p>To inspire your next Adventure</p>
        </div>

      </div>


      <div className="table2">

        <h1>Why Ermin Miles?</h1>

        <div className="partners">
          <div className="partner1">
            {/* <img className="partner_img" src="../images/bicycle.png" alt="" /> */}

            <h3>Exceptional  yet Reliable</h3>
          </div>
          <div className="partner2">
            {/* <img className="partner_img" src="../images/bicycle.png" alt="" /> */}
            <h3>Sophisticated yet Simple</h3>
          </div>
          <div className="partner3">
            {/* <img className="partner_img" src="../images/bicycle.png" alt="" /> */}
            <h3>Intuitive yet traditional</h3>
          </div>
          <div className="partner4">
            {/* <img className="partner_img" src="../images/bicycle.png" alt="" /> */}
            <h3>Sturdy  yet Comfortable</h3>
          </div>

        </div>
      </div>

      <div className="table3">
        <img src="../images/MaskGroup(1).png" className="img-fluid" alt=""></img>
        <img className="table3_480" src="../images/table3_480.png" alt="" />
        <img className="overlay" src="../images/Overlay.png" alt="" />

        <div className="card-body">
          <h1 className="card-title">Ermin Miles</h1>
          <h4 className="card-text">Classic. Concrete. Endless</h4>
          <div className="specials">
            <div className="spec">
              <img src="../images/speedometer.png" alt="" />
              <h3>25 kmph</h3>
            </div>
            <div className="spec">
              <img src="../images/spec_distance.png" alt="" />
              <h3>10 km</h3>
            </div>
            <div className="spec">
              <img src="../images/clock.png" alt="" />
              <h3>25 kmph</h3>
            </div>

            <div className="spec">
              <img src="../images/settings.png" alt="" />
              <h3>7 Gear</h3>
            </div>
          </div>
          <a href="/preorder" id="home_table3_btn" className="btn btn-primary">Pre-Order</a>
          <a href="/#" id="Learn_btn" >Learn More</a>


        </div>

      </div>





      <div className="home_table4">
        <div className="home_table4_contents">
          <div className="home_img">
            <img className="TrawayImage_1" src="../images/TrawayImage.png" alt="" />
            <img src="../images/TrawayImage_2.png" alt="" className="TrawayImage_2" />
          </div>
          <div className="home_content">
            <h1>Ermin Ripple</h1>
            <p>Re-defining the way we travel with the people in our circles </p>
            <div className="specials">
              <div className="spec">
                <img src="../images/Cipher.png" alt="" />
                <h3>Ciphers</h3>
              </div>
              <div className="spec">
                <img src="../images/Circles.png" alt="" />
                <h3>Circles</h3>
              </div>
              <div className="spec">
                <img src="../images/Navigate.png" alt="" />
                <h3>Navigate</h3>
              </div>

              <div id="spec4" className="spec">
                <img src="../images/Connect.png" alt="" />
                <h3>Connect</h3>
              </div>
            </div>
            <button id="home_content_btn" className="btn btn-primary" type="submit">Learn More</button>
          </div>
        </div>
      </div>






      <div className="table6">
        <div className="text-center ">
          <h1>Stories Rippled by Ermin</h1>
          {/* <h2>500+ Friends   |   7000+ Trips   |   10,000+ Stories</h2> */}
        </div>



        <div className="carousel"
          data-flickity='{ "wrapAround": true }'>
          <div className="carousel-cell">
            <h1>“</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            <img className="profile" src="../images/Group55.svg" alt="" />
            <h2>Venkat</h2>
            <h4>Happy Customer</h4>
          </div>
          <div className="carousel-cell">
            <h1>“</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            <img className="profile" src="../images/Group55.svg" alt="" />
            <h2>Jayadeep</h2>
            <h4>Happy Customer</h4>
          </div>
          <div className="carousel-cell">
            <h1>“</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            <img className="profile" src="../images/Group55.svg" alt="" />
            <h2>Ashish</h2>
            <h4>Happy Customer</h4>
          </div>
          <div className="carousel-cell">
            <h1>“</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            <img className="profile" src="../images/Group55.svg" alt="" />
            <h2>Rohith</h2>
            <h4>Happy Customer</h4>
          </div>
          <div className="carousel-cell">
            <h1>“</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            <img className="profile" src="../images/Group55.svg" alt="" />
            <h2>Nitish</h2>
            <h4>Happy Customer</h4>
          </div>


        </div>




      </div>

      {/* <div className="table7">
        <figure className="text-center  text-white">
          <h1>News Coverage</h1>
          <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </h2>
        </figure>

        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-4">
              <img className="img-fluid rounded-start" src="../images/box1-img1.svg" alt="" />
            </div>
            <div id="box1" className="col-md-8">
              <h3 className="card-text">One for all and all for one, Muskehounds are always ready.</h3>
              <p className="card-text"><small className="text-muted">News Paper Name • July 16, 2021</small></p>
            </div>
          </div>
        </div>


        <div className="carousel" data-flickity='{ "autoPlay": true }'>
          <div className="carousel-cell" id="carousel-cell1">
            <img src="../images/box2-img.svg" alt="" className="card1_img" />
            <h1>One for all and all for one, Muskehounds are always ready.</h1>
            <h2>News Paper Name • July 16, 2021</h2>
            <img className="share" src="../images/share.svg" alt="" />
          </div>
          <div className="carousel-cell" id="carousel-cell2">
            <img src="../images/card3_img.svg" alt="" className="card2_img" />
            <h1>80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</h1>
            <h2>News Paper Name • July 16, 2021</h2>
            <img className="share" src="../images/share.svg" alt="" />
          </div>
          <div className="carousel-cell" id="carousel-cell3">
            <img src="../images/box4-img.svg" alt="" className="card3_img" />
            <h1>Thundercats are on the move.</h1>
            <h2>News Paper Name • July 16, 2021</h2>
            <img className="share" src="../images/share.svg" alt="" />
          </div>
          <div className="carousel-cell" id="carousel-cell4">
            <img src="../images/card3_img.svg" alt="" className="card4_img" />
            <h1>One for all and all for one, Muskehounds are always ready.</h1>
            <h2>News Paper Name • July 16, 2021</h2>
            <img className="share" src="../images/share.svg" alt="" />

          </div>
          <div className="carousel-cell" id="carousel-cell5">
            <img src="../images/box2-img.svg" alt="" className="card5_img" />
            <h1>One for all and all for one, Muskehounds are always ready.</h1>
            <h2>News Paper Name • July 16, 2021</h2>
            <img className="share" src="../images/share.svg" alt="" />
          </div>
        </div>
      </div> */}
    </div>





  )



}




export default Home