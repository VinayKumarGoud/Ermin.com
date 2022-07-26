import React, { useState } from 'react'
import '../styles/Payment.css'

function Payment() {
    const [showcard, setShowCard] = useState(false);
    const [shownet, setShowNet] = useState(false);
    const [showupi, setShowUpi] = useState(false);
    const [showbutton, setShowButton] = useState(true);
    const [shownetbutton, setShowNetButton] = useState(true);
    const [showupibutton, setShowUpiButton] = useState(true);
    const [showtermsbutton, setShowTermsButton] = useState(true);

    const [showdiv, setShowDiv] = useState(false);
    function myClick() {
        alert("Your Order Placed Sucessfully.\nThankyou for Coming this Far.\n onClick Logo on the left to get back to Home. ");
    }
    return (
        <div className="payment">
            <div className="preorder_navbar">
                <a className="preorder_logo" href="/">ERMIN</a>

                <div className="preorder_navlinks">

                    <ul className="preorder_navbar-nav">

                        <li className="preorder_nav-item">
                            <a className="preorder_nav-link " href="/preorder">1.Free Wheel</a>
                        </li>
                        <li className="preorder_nav-item">
                            <a className="preorder_nav-link " href="/Address">2.Address</a>
                        </li>
                        <li className="preorder_nav-item">
                            <a id="active" className="preorder_nav-link " href="/#">3.Payment</a>
                        </li>

                    </ul>

                </div>



            </div>

            <img id="Address_img" src="../images/Address_img.png" alt="" />

            <div className="payment_table2 "  >
                <div className="payment_table2_container1">
                    <div className="payment_table2_box">
                        <h1>Shipping to</h1>
                        <h2>John Doe</h2>
                        <p>House no. 10, Amazing Building, Beautiful street, Near Ancient Landmark</p>
                        <h3>Hyderabad,123456</h3>
                        <h3>Telangana</h3>
                        <h3>+91 12345 78900</h3>
                        <a href="/Address" id="Learn_btn" >Edit</a>
                        <img id="edit_img" src="../images/edit_img.svg" alt="" />
                    </div>
                    <div className="payment_table2_box">
                        <h1>Billing to</h1>
                        <h2>John Doe</h2>
                        <p>House no. 10, Amazing Building, Beautiful street, Near Ancient Landmark</p>
                        <h3>Hyderabad,123456</h3>
                        <h3>Telangana</h3>
                        <h3>+91 12345 78900</h3>
                        <a href="/BillingAddress" id="Learn_btn" >Edit</a>
                        <img id="edit_img" src="../images/edit_img.svg" alt="" />
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
            </div>
            <div id="payment_table3">
                <div className="payment_table3 gradient-background ">
                    <h1>Select a Payment Method</h1>
                    <div className="payment_method">
                        <div className="payment_method_box1">
                            <img
                                src={showbutton ? "../images/button_open.svg" : "../images/button_close.svg"}

                                onClick={() => {
                                    setShowButton(prevMode => !prevMode)
                                    setShowCard(!showcard)
                                }}
                                alt="" />
                            <h2>Debit/Credit/ATM Card</h2>
                            {
                                showcard ?
                                    <div className="card_details">
                                        <div className="Contactus_table1_inputbox">
                                            <h4>Card Number*</h4><br></br>
                                            <input type="text" required="required" />
                                        </div>
                                        <div className="container">
                                            <div className="Contactus_table1_inputbox">
                                                <h4>Expiry Date*</h4><br></br>
                                                <input type="text" required="required" />
                                            </div>
                                            <div id="phone_number" className="Contactus_table1_inputbox">
                                                <h4>CVV*</h4><br></br>
                                                <input type="text" required="required" />
                                            </div>
                                        </div>
                                        <div id="card_input" className="Contactus_table1_inputbox">
                                            <h4>Name on Card*</h4><br></br>
                                            <input type="text" required="required" />
                                        </div>
                                    </div>
                                    : null
                            }
                        </div>



                        <div className="payment_method_box2">
                            <img
                                src={shownetbutton ? "../images/button_open.svg" : "../images/button_close.svg"}

                                onClick={() => {
                                    setShowNetButton(prevMode => !prevMode)
                                    setShowNet(!shownet)
                                }}
                                alt="" />
                            <h2>Net Banking</h2>
                            {
                                shownet ?
                                    <div className="net_banking_details">
                                        <div id="select_option1" className="Contactus_table1_inputbox">

                                            <select>
                                                <option className="option" value="" >Choose an option</option>
                                                <option value="" >Australia</option>
                                                <option value="" >France</option>
                                                <option value="" >Germany</option>
                                                <option value="" >Maldives</option>
                                            </select>
                                        </div>
                                        <div className="Contactus_table1_inputbox">

                                            <select>
                                                <option className="option" value="" >Choose an option</option>
                                                <option value="" >Axis Bank</option>
                                                <option value="" >HDFC Bank</option>
                                                <option value="" >ICICI Bank</option>
                                                <option value="" >Kotak Bank</option>
                                                <option value="" >State Bank of India</option>
                                            </select>
                                        </div>
                                    </div>
                                    : null
                            }
                        </div>




                        <div className="payment_method_box3">
                            <img
                                src={showupibutton ? "../images/button_open.svg" : "../images/button_close.svg"}

                                onClick={() => {
                                    setShowUpiButton(prevMode => !prevMode)
                                    setShowUpi(!showupi)
                                }}
                                alt="" />
                            <h2>UPI</h2>
                            {
                                showupi ?
                                    <div className="upi_details">
                                        <div id="card_input" className="Contactus_table1_inputbox">
                                            <h4>Please enter your UPI ID</h4><br></br>
                                            <input type="text" required="required" />
                                        </div>
                                        <a href="/#" id="upi_details_btn" className="btn btn-primary">Verify</a>
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
                        <h2>I agree with Ermin Automotive <a href="/terms">Terms and Conditions</a> </h2>
                    </div>

                    <a href="/#" id="terms_conditions_btn" className="btn btn-primary"
                        onClick={myClick}
                    >Place Order</a>
                    <div className="margin"></div>
                </div>
            </div>
        </div>
    )
}

export default Payment
