import React from 'react'
import '../styles/Traway.css'


function Traway() {
    return (
        <div id="traway">
            <div className="traway_table1 gradient-background">
                <div className="traway_table1_contents">
                    <div className="traway_table1_info">
                        <h1>MAKE A SMARTER MOVE</h1>
                        <p>Re-defining the way we travel with friends. An app to keep everyone truly connected before, during and after a trip. May the trip be a morning bus to school/ office or an adventure into the unknown, Ermin Ripple keeps you connected </p>
                        <div className="buttons">
                            <a href="/#" id="traway_table1_btn1" className="btn btn-primary">
                                <div><img className="buttons_img" src="../images/playstore_img.svg" alt="" /></div>
                                <div><h5>Get It On</h5>
                                    <h3>Google Play</h3></div>
                            </a>

                            <a href="/#" id="traway_table1_btn2" className="btn btn-primary">
                                <div><img className="buttons_img" src="../images/appstore_img.svg" alt="" /></div>
                                <div ><h5>Get It On</h5>
                                    <h3>App Store</h3></div>
                            </a>
                        </div>


                    </div>
                    <div className="traway_table1_imgs">

                        <img src="../images/HeroImage.svg" className="HeroImage" alt="" />
                        <img src="../images/HeroImage(1).svg" className="HeroImage_480" alt="" />

                    </div>

                </div>

            </div>
            <div className="traway_table2">
                <h1>WHY ERMIN RIPPLE?</h1>
                <div className="dotted_line"></div>
                <div className="traway_table2_reasons">
                    <div className="traway_table2_reason">
                        <img src="../images/R1Img.svg" alt="" />
                        <h2>Custom Locations</h2>
                        <p>Save your locations with custom names and emoji’s. </p>
                    </div>
                    <div className="traway_table2_reason">
                        <img src="../images/R2Img.svg" alt="" />
                        <h2>Circles</h2>
                        <p>Create a circle for people whom you meet at a location/ on a purpose. People in Gym circle are notified when you reach the location</p>
                    </div>
                    <div className="traway_table2_reason">
                        <img src="../images/R3Img.svg" alt="" />
                        <h2>True Navigation </h2>
                        <p>Going to meet a friend? Access his live location and either open a navigation to his location or book an OLA/Uber</p>
                    </div>
                </div>
            </div>
            <div className="traway_table3">
                <div className="traway_table3_contents">
                    <div className="service1">
                        <h2>Circles</h2>
                        <p>Ripple analyses your trip’s details like the schedules/ tickets and suggests starting times to reach your destinations on time. In a trip with friends, it lets you know who is running late, their location, traffic and time of arrival. </p>
                    </div>
                    <div><img className="traway_table3_img" src="../images/ServiceImg1.svg" alt="" /></div>

                </div>
                <img src="../images/circle_img.svg" alt="" className="traway_table3_circle_img1" />
                <img src="../images/direction_img.svg" alt="" className="traway_table3_direction_img" />
            </div>

            <div className="traway_table4">
                <div className="traway_table4_contents">
                    <div><img className="traway_table4_img" src="../images/ServiceImg2.svg" alt="" /></div>
                    <div className="service2">
                        <h2>Ciphers</h2>
                        <p>Save & Share the locations of your friends like never before. Access each other’s  current locations when you begin a trip together.  </p>

                    </div>
                </div>
                <img src="../images/circle_img.svg" alt="" className="traway_table4_circle_img" />
                <img src="../images/location_img.svg" alt="" className="traway_table4_location_img" />
            </div>

            <div className="traway_table5">
                <h1>All-in-one Ripple App</h1>
                <p>A single app to plan, share and experience a trip. Save your tickets of the trip, share and message your friends</p>

                <img src="../images/ServiceImg3.png" alt="" className="ServiceImg3" />
                <img src="../images/ServiceImg3_480.svg" className="ServiceImg3_480" alt="" />

            </div>

            <div className="traway_table6">
                <div className="traway_table6_contents">
                    <div className="traway_table6_contents_info">
                        <h1>DOWNLOAD ERMIN <mark> RIPPLE </mark> APP!</h1>
                        <div className="buttons">
                            <a href="/#" id="traway_table6_btn1" className="btn btn-primary">
                                <div><img className="table6_img" src="../images/playstore_img.svg" alt="" /></div>
                                <div><h5>Get It On</h5>
                                    <h3>Google Play</h3></div>
                            </a>

                            <a href="/#" id="traway_table6_btn2" className="btn btn-primary">
                                <div><img className="table6_img" src="../images/apple_img.svg" alt="" /></div>
                                <div><h5>Get It On</h5>
                                    <h3>App Store</h3></div>
                            </a>
                        </div>
                    </div>
                    <div className="traway_table6_contents_image">
                        <img className="DownloadImg" src="../images/DownloadImg.svg" alt="" />
                        <img className="DownloadImg_480" src="../images/DownloadImg(1).svg" alt="" />
                    </div>
                </div>
                <img src="../images/circle_img.svg" alt="" className="traway_table6_circle_img1" />
                <img src="../images/circle_img.svg" alt="" className="traway_table6_circle_img2" />
                <img src="../images/circle_img.svg" alt="" className="traway_table6_circle_img3" />
                <img src="../images/location_img.svg" alt="" className="traway_table6_location_img" />
                <img src="../images/direction_img.svg" alt="" className="traway_table6_direction_img" />
            </div>
        </div>
    )
}

export default Traway
