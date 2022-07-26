import React from 'react';
import '../styles/AboutUs.css'


function AboutUs() {


    return (
        <div id="aboutus">
            <img src="../images/aboutus_img.png" alt="" />

            <div className="aboutus_table1 ">

                <h1>Our Story</h1>

                <p>Ermin automotive is a Hyderabad-based startup, established in 2019. It is an Electric mobility-based company that designs, innovates, manufactures, and sells all kinds of electric mobility solutions to the public. We at Ermin believe that innovation can transform anything, Therefore our company focuses on sustainable transportation. We aim to engineer a transportation network and landscape which makes commute reliable, comfortable, and stress-free. </p>

            </div>

            <div className="freewheel_table2">
                <div className="freewheel_table2_contents">
                    <div><img className="freewheel_table2_img" src="../images/Ermin_micro.svg" alt="" /></div>
                    <div className="feature1">
                        <h2>Our Mission</h2>
                        <p>Engineering the way we  Move</p>
                    </div>
                </div>
            </div>



            <div className="freewheel_table3">
                <div className="freewheel_table3_contents">
                    <div className="feature2">
                        <h2>Our Vision</h2>
                        <p>A sustainable transportation network and landscape</p>
                    </div>
                    <div><img className="freewheel_table3_img" src="../images/Ermin_micro.svg" alt="" /></div>

                </div>
            </div>

            <div className="freewheel_table2">
                <div className="freewheel_table2_contents">
                    <div><img className="freewheel_table2_img" src="../images/Ermin_micro.svg" alt="" /></div>
                    <div className="feature1">
                        <h2>Our Culture</h2>
                        <p>Adadptable. Reliable. Comfortable. Simple </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUs
