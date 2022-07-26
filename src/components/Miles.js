import React, { useState } from 'react'
import '../styles/Miles.css'



function Miles() {

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
        setModelSelected(linkModelSelected)

    };



    return (

        <div id="freewheel">
            <div className="miles_table1">
                <div className="miles_table1_img">
                    <img src="../images/img1.png" alt="" />
                </div>
                <a href="/preorder" id="miles_PreOrder_btn" className="btn btn-primary">Pre-Order</a>

            </div>

            <div className="freewheel_table2">
                <div className="freewheel_table2_contents">
                    <div><img className="freewheel_table2_img" src="../images/Ermin_micro.svg" alt="" /></div>
                    <div className="feature1">
                        <h2>Miles Smart App</h2>
                        <p>Purchase to Re-sale - everything in one app. Talk to your Miles through Siri or Ok Google about its battery, range, health, orders placed or maintenance schedules and plans. Stay up to date with Over-the-Air updates </p>

                    </div>

                </div>

            </div>



            <div className="freewheel_table3">
                <div className="freewheel_table3_contents">
                    <div className="feature2">
                        <h2>Adaptive Drive</h2>
                        <p>A cycle that truly understands you. Miles adapts to you and the terrain to deliver peak performance in the most comfortable way. Over the time, It analyses your riding behaviour and patterns to best suit you.  </p>

                    </div>
                    <div><img className="freewheel_table3_img" src="../images/Ermin_micro.svg" alt="" /></div>

                </div>


            </div>

            <div className="freewheel_table2">
                <div className="freewheel_table2_contents">
                    <div><img className="freewheel_table2_img" src="../images/cruise.jpg" alt="" /></div>
                    <div className="feature1">
                        <h2>True Cruise </h2>
                        <p>Experience cruise like you have never before. Full Cruise - let Miles do everything and brake where lever you wanna stop. Adaptive Cruise - Accelerate to the speed of your choice and let it glide.</p>
                    </div>
                </div>

            </div>
            {/* *******************  End of Table3 *********************  */}





            {/* *******************  Start of Table4 ********************* *    */}
            <div className="freewheel_table6  ">
                <h1>Specs Sheet</h1>
                <h3>Power</h3>
                <div className="freewheel_table6_line"></div>
                <div className="specs_table1">
                    <div className="specs_box">
                        <h2>Range</h2>
                        <h5>. 50 KM</h5>
                        <h5>. 75 KM</h5>
                        <h5>. 100 KM</h5>
                    </div>

                    <div className="specs_box">
                        <h2>Motor</h2>
                        <h5>. 36 V 250 W BLDC</h5>

                    </div>
                    <div className="specs_box">
                        <h2>Battery Capacity</h2>
                        <h5>. 12.5 Ah</h5>
                        <h5>. 15 Ah</h5>
                        <h5>. 18 Ah</h5>
                    </div>
                    <div className="specs_box">
                        <h2>Charger</h2>
                        <h5>. 36v  Charger</h5>

                    </div>
                </div>
                <h3>Components</h3>
                <div className="freewheel_table6_lin2"></div>
                <div className="specs_table2">
                    <div className="specs_box">
                        <h2>Frame</h2>
                        <h5>. Mono-Frame</h5>
                        <h5>. Steel Alloy</h5>

                    </div>

                    <div className="specs_box">
                        <h2>Handlebars</h2>
                        <h5>. Zero Drag Flat bars</h5>

                    </div>
                    <div className="specs_box">
                        <h2>Tires</h2>
                        <h5>. 26 x 2.125 Clinchers</h5>

                    </div>
                    <div className="specs_box">
                        <h2>Wheels</h2>
                        <h5>. Magnesium Alloys</h5>

                    </div>
                    <div className="specs_box">
                        <h2>Breaks</h2>
                        <h5>. Front - Disc</h5>
                        <h5>. Rear - Disc</h5>
                    </div>
                    <div id="specs_box6" className="specs_box">
                        <h2>Gears</h2>
                        <h5>. 7 Speed</h5>

                    </div>


                </div>
                <h3>Accessories</h3>
                <div className="freewheel_table6_line3"></div>
                <div className="specs_table1">
                    <div className="specs_box">
                        <h2>Helmet</h2>
                    </div>
                    <div className="specs_box">
                        <h2>safety stickers</h2>
                    </div>
                    <div className="specs_box">
                        <h2>mud guards</h2>
                    </div>
                    <div className="specs_box">
                        <h2>water bottle holder</h2>
                    </div>
                    <div className="specs_box">
                        <h2>rear lights </h2>
                    </div>
                    <div className="specs_box">
                        <h2>bell</h2>
                    </div>
                    <div className="specs_box">
                        <h2>Horn</h2>
                    </div>
                    <div className="specs_box">
                        <h2>Hand pump</h2>
                    </div>
                    <div className="specs_box">
                        <h2>Pressure guage</h2>
                    </div>
                    <div className="specs_box_hide">
                        <h2>Pressure guage</h2>
                    </div>


                </div>

            </div>

            {/* 
*******************  End of Table4 ********************* * */}





            {/* *******************  Start of Table5 ********************* *    */}
            <div className="freewheel_table5">

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
            {/* *******************  End of Table5 ********************* * */}








            {/* *******************  Start of Table6 *********************     */}

            <div className="freewheel_table7">
                <div className="freewheel_table7_contents">
                    <div className="freewheel_table7_contents_info">
                        <h2>Experience the Miles App</h2>
                        <p>Purchase to Re-sale - everything in one app. Talk to your Miles through Siri or Ok Google about its battery, range, health, orders placed or maintenance schedules and plans. Stay up to date with Over-the-Air updates.</p>
                    </div>
                    <div className="freewheel_table7_contents_img">
                        <img src="../images/freewheel_table6_img.png" alt="" />
                    </div>
                </div>
                <a href="/preorder" id="miles_PreOrder_btn" className="btn btn-primary">Pre-Order</a>

            </div>


        </div>

    )

};

export default Miles
