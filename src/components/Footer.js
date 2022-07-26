
import React, { useState } from 'react'
import '../styles/Footer.css'


function Footer() {

    const [image, setImage] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [showlinks, setShowLinks] = useState(false);
    const [showlinks2, setShowLinks2] = useState(false);
    const [showlinks3, setShowLinks3] = useState(false);



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return (

        <div className="footer">
            <div className="l-footer">
                <img src="../images/Ermin-logo.svg" alt="" />
                <h1>ERMIN AUTOMOTIVE</h1>
            </div>

            <div className="r-footer" >

                <ul className="box1" id="links1" >
                    <h2>Explore</h2>
                    <ul>

                        <li><a href="/Miles">Ermin Miles</a></li>
                        <li><a href="/Traway">Ermin Ripple</a></li>


                    </ul>

                    <img
                        className="plus1"
                        src={image ? "../images/coolicon.svg" : "../images/minus.svg"}
                        alt=""
                    />

                    <div className="rectangle_line"></div>
                </ul>
                <ul className="box2" >
                    <h2>About</h2>
                    <ul>
                        <li><a href="/AboutUs">About us</a></li>
                        <li><a href="/#">Blog</a></li>

                    </ul>

                    <img
                        className="plus2"
                        src={image2 ? "../images/coolicon.svg" : "../images/minus.svg"}
                        alt=""
                    />

                    <div className="rectangle_line"></div>
                </ul>

                <ul className="box3">
                    <h2>Help</h2>
                    <ul>
                        <li><a href="/#">Support</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/#">Privacy Policy</a></li>
                    </ul>

                    <img className="plus3"
                        src={image3 ? "../images/coolicon.svg" : "../images/minus.svg"}
                        alt=""
                    />
                    <div className="rectangle_line"></div>
                </ul>
                <img className="footer_toptobottom_logo"
                    onClick={scrollToTop}
                    alt="" src="../images/Group-40.svg" >

                </img>

            </div>
            {/* // right footer toogle */}

            <div className="r-footer_toogle" >

                <ul className="box1" id="links1" >
                    <h2>Explore</h2>
                    {
                        showlinks ?
                            <ul>
                                <li><a href="/Miles">Ermin Miles</a></li>
                                <li><a href="/Traway">Ermin Ripple</a></li>

                            </ul> : null

                    }




                    <img
                        className="plus1"
                        src={image ? " ../images/minus.svg" : "../images/coolicon.svg"}

                        onClick={() => {
                            setImage(prevMode => !prevMode)
                            setShowLinks(!showlinks)
                        }}
                        alt=""
                    />

                    <div className="rectangle_line"></div>
                </ul>
                <ul className="box2" >
                    <h2>About</h2>
                    {
                        showlinks2 ?
                            <ul>
                                <li><a href="/AboutUs">About us</a></li>
                                <li><a href="/#">Blog</a></li>

                            </ul> : null

                    }




                    <img
                        className="plus2"
                        src={image2 ? " ../images/minus.svg" : "../images/coolicon.svg"}
                        onClick={() => {
                            setImage2(prevMode => !prevMode)
                            setShowLinks2(!showlinks2)
                        }}
                        alt=""
                    />




                    <div className="rectangle_line"></div>
                </ul>

                <ul className="box3">
                    <h2>Help</h2>
                    {
                        showlinks3 ?
                            <ul>
                                <li><a href="/#">Support</a></li>
                                <li><a href="/terms">Terms & Conditions</a></li>
                                <li><a href="/#">Privacy Policy</a></li>
                            </ul> : null

                    }

                    <img className="plus3"
                        src={image3 ? " ../images/minus.svg" : "../images/coolicon.svg"}
                        onClick={() => {
                            setImage3(prevMode => !prevMode)
                            setShowLinks3(!showlinks3)
                        }}
                        alt=""
                    />
                    <div className="rectangle_line"></div>
                </ul>
                <img className="footer_toptobottom_logo"
                    onClick={scrollToTop}
                    alt="" src="../images/Group-40.svg" >

                </img>

            </div>


            <div className="socialmedia_links">
                <a href="https://www.linkedin.com/in/ermin-automotive-827334207/" rel="noopener noreferrer" target="_blank"><img className="linked_in" src="../images/Linkedin.svg" alt="" /></a>
                <a href="https://www.facebook.com/Ermin-Automotive-103133265225372" rel="noopener noreferrer"  target="_blank"><img className="facebook" src="../images/FB.svg" alt="" /></a>
                <a href="https://www.instagram.com/erminautomotive/" rel="noopener noreferrer"  target="_blank"><img className="instagram" src="../images/Instagram.svg" alt="" /></a>

            </div>
            <div className="rectangle_line2"></div>
            <div className="copyright">
                <h4>Copyright © 2021 Ermin Automotive.All rights reserved</h4>
            </div>
        </div>
    )
}

export default Footer


