import React, { useState } from 'react'
import '../styles/Preorder.css'


function Preorder() {

    var LinkModels = [
        '../Imgs/2nd_graphics_1_red.glb',
        '../Imgs/2nd_graphics_2_yellow.glb',
        '../Imgs/2nd_graphics_3_green.glb',
        '../Imgs/2nd_graphics_4_purple.glb',
        '../Imgs/1st_graphics_1_red.glb',
        '../Imgs/1st_graphics_4_yellow.glb',
        '../Imgs/1st_graphics_2_greenblue.glb',
        '../Imgs/1st_graphics_3_blue.glb',
    ]


    const [modelSelected, setModelSelected] = useState(LinkModels[0]);

    const [graphics1, setGraphics1] = useState(false);
    const [graphics2, setGraphics2] = useState(true);
    const onSelectColor = (linkModelSelected) => {
        console.log(linkModelSelected)
        setModelSelected(linkModelSelected)

    };


    return (
        <div className="preorder">
            <div className="preorder_navbar">
                <a className="preorder_logo" href="/">ERMIN</a>

                <div className="preorder_navlinks">

                    <ul className="preorder_navbar-nav">

                        <li className="preorder_nav-item">
                            <a id="active" className="preorder_nav-link " href="/#">1.Free Wheel</a>
                        </li>
                        <li className="preorder_nav-item">
                            <a className="preorder_nav-link " href="/Address">2.Address</a>
                        </li>
                        <li className="preorder_nav-item">
                            <a className="preorder_nav-link " href="/Payment">3.Payment</a>
                        </li>

                    </ul>

                </div>



            </div>

            <div className="preorder_table2">
                <h1>Customize your bike</h1>
                <div className="image_3d">
                    <model-viewer src={modelSelected} auto-rotate camera-controls alt="cube" ></model-viewer>
                </div>




                <div className="color_graphic_container">
                    <div className="color">
                        <h1>Color</h1>
                        <img id="goleft_btn" src="../images/goleft.svg" alt="" />
                        <img id="goright_btn" src="../images/goright.svg" alt="" />

                        {
                            graphics2 ?
                                <div className="color_container">
                                    <div className="color1"
                                        onClick={() => onSelectColor(LinkModels[0])}
                                    ></div>
                                    <div className="color2"
                                        onClick={() => onSelectColor(LinkModels[1])}
                                    ></div>
                                    <div className="color3"
                                        onClick={() => onSelectColor(LinkModels[2])}
                                    ></div>
                                    <div className="color4"
                                        onClick={() => onSelectColor(LinkModels[3])}
                                    ></div>
                                </div>
                                : null
                        }

                        {
                            graphics1 ?
                                <div className="Toggle_color_container">

                                    <div className="color5"
                                        onClick={() => onSelectColor(LinkModels[4])}
                                    ></div>
                                    <div className="color6"
                                        onClick={() => onSelectColor(LinkModels[5])}
                                    ></div>
                                    <div className="color7"
                                        onClick={() => onSelectColor(LinkModels[6])}
                                    ></div>
                                    <div className="color8"
                                        onClick={() => onSelectColor(LinkModels[7])}
                                    ></div>
                                </div>
                                : null
                        }


                    </div>
                    <div className="graphic">
                        <h1>Graphic</h1>
                        <img id="goleft_btn" src="../images/goleft.svg" alt="" />
                        <img id="goright_btn" src="../images/goright.svg" alt="" />
                        <div className="graphic_container">
                            <div className="graphic1"
                                onClick={() => {
                                    setGraphics1(!graphics1)
                                    setGraphics2(!graphics2)
                                }}
                            >
                                <img src="../images/2nd-graphics-1-left.png" alt="" />
                            </div>
                            <div className="graphic1"
                                onClick={() => {
                                    setGraphics2(!graphics2)
                                    setGraphics1(!graphics1)
                                }}
                            >
                                <img src="../images/1st_graphics.png" alt="" />
                            </div>

                        </div>


                    </div>
                </div>
            </div>

            <div className="preorder_table3">
                <div className="preorder_table3_container">
                    <div className="preorder_table3_box1">
                        <h2>What comes with your bike</h2>
                        <div className="extras">
                            <img className="preorder_table3_img" src="../images/preorder_table3_img.svg" alt="" />
                            <h4>Charger</h4>
                        </div>
                        <div className="extras">
                            <img className="preorder_table3_img" src="../images/preorder_table3_img.svg" alt="" />
                            <h4>Phone Mount</h4>
                        </div>
                        <div id="extras" className="extras">
                            <img className="preorder_table3_img" src="../images/preorder_table3_img.svg" alt="" />
                            <h4>2 year warranty</h4>
                        </div>


                    </div>
                    <div className="preorder_table3_box2">
                        <h2>Total</h2>
                        <h3>₹999/-</h3>
                        <a href="/Address" id="preorder_table3_box2_btn" className="btn btn-primary">Continue</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Preorder
