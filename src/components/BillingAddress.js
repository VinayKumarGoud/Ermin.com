import React, { useState } from 'react'


function BillingAddress() {

    const [showdiv, setShowDiv] = useState(false);
    const [showtermsbutton, setShowTermsButton] = useState(true);

    return (
        <div>
            <div className="preorder_navbar">
                <a className="preorder_logo" href="/">ERMIN</a>

                <div className="preorder_navlinks">

                    <ul className="preorder_navbar-nav">

                        <li className="preorder_nav-item">
                            <a className="preorder_nav-link " href="/preorder">1.Free Wheel</a>
                        </li>
                        <li className="preorder_nav-item">
                            <a id="active" className="preorder_nav-link " href="/Address">2.Address</a>
                        </li>
                        <li className="preorder_nav-item">
                            <a className="preorder_nav-link " href="/Payment">3.Payment</a>
                        </li>

                    </ul>

                </div>
            </div>


            <img id="Address_img" src="../images/Address_img.png" alt="" />
            <div className="preorder_table2">
                <div id="preorder_table2" className="Address_table2 ">
                    <div className="Address_table2_flex">
                        <div className="input_container">
                            <h1>Billing Address</h1>
                            <div class="Contactus_table1_inputbox">
                                <h4>Full Name*</h4><br></br>
                                <input type="text" required="required" />
                            </div>
                            <div class="Contactus_table1_inputbox">
                                <h4>Address Line*</h4><br></br>
                                <input type="text" required="required" />
                            </div>
                            <div class="Contactus_table1_inputbox">
                                <h4>Zip/Postal Code*</h4><br></br>
                                <input type="text" required="required" />
                            </div>
                            <div class="Contactus_table1_inputbox">
                                <h4>City*</h4><br></br>
                                <input type="text" required="required" />
                            </div>
                            <div class="Contactus_table1_inputbox">
                                <h4>Country</h4><br></br>
                                <select>
                                    <option className="option" value="" >India</option>

                                </select>
                            </div>
                            <div className="container">
                                <div class="Contactus_table1_inputbox">
                                    <h4>Email Address*</h4><br></br>
                                    <input type="text" required="required" />
                                </div>
                                <div id="phone_number" class="Contactus_table1_inputbox">
                                    <h4>Phone Number*</h4><br></br>
                                    <input type="text" required="required" />
                                </div>
                            </div>
                        </div>

                        <div className="cart">
                            <div className="price">
                                <h2>₹999/-</h2>
                                <img className="price_dropdown_img"

                                    src="../images/dropdown.svg"
                                    onClick={() => {

                                        setShowDiv(!showdiv)
                                    }}
                                    alt="" />
                            </div>
                            <div className="dropdown_price_info">

                                <h2>Your Cart</h2>
                                <img id="dropdown_close"
                                    src="../images/dropdown_close.svg"
                                    onClick={() => {
                                        setShowDiv(!showdiv)
                                    }}
                                    alt="" />

                                <div className="dropdown_price_item1">
                                    <h3>1x Free Wheel</h3>
                                    <h4>₹999/-</h4>
                                    <img src="../images/dropdown_img.svg" alt="" />
                                </div>

                                <div className="dropdown_price_line"></div>
                                <div className="dropdown_price_total">
                                    <h3>TOTAL</h3>
                                    <h4>₹999/-</h4>
                                </div>
                            </div>



                            {
                                showdiv ?
                                    <div className="dropdown_price_info_toggle">


                                        <h2>Your Cart</h2>
                                        <img id="dropdown_close"
                                            src="../images/dropdown_close.svg"
                                            onClick={() => {
                                                setShowDiv(!showdiv)
                                            }}
                                            alt="" />

                                        <div className="dropdown_price_item1">
                                            <h3>1x Free Wheel</h3>
                                            <h4>₹999/-</h4>
                                            <img src="../images/dropdown_img.svg" alt="" />
                                        </div>

                                        <div className="dropdown_price_line"></div>
                                        <div className="dropdown_price_total">
                                            <h3>TOTAL</h3>
                                            <h4>₹999/-</h4>
                                        </div>
                                    </div>
                                    : null
                            }
                        </div>


                    </div>
                    <div className="terms_conditions">
                        <img
                            src={showtermsbutton ? "../images/terms_unverify.svg" : "../images/terms_verify.svg"}

                            onClick={() => {
                                setShowTermsButton(prevMode => !prevMode)

                            }}
                            alt="" />
                        <h2>Same as  <mark> <u>Shipping Address </u></mark></h2>
                    </div>
                    <div className="shipping_address_btn">
                        <a href="/Payment" id="shipping_address_btn" class="btn btn-primary">Continue To Payment</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillingAddress
