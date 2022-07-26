import React, { Component } from 'react'
import "../styles/ContactUs.css"



  export class ContactUs extends Component {
   



  // state = {
  //   fullname: '',
  //   email: '',
  //   number: '',
  //   message: '',
  // }

  // handleFullname = (e) => {
  //   this.setState({
  //     fullname: e.target.value
  //   })
  // }

  // handleEmail = (e) => {
  //   this.setState({
  //     email: e.target.value
  //   })
  // }
  // handleNumber = (e) => {
  //   this.setState({
  //     number: e.target.value
  //   })
  // }
  // handleMessage = (e) => {
  //   this.setState({
  //     message: e.target.value
  //   })
  // }

  // formSubmit = (e) => {
  //   e.preventDefault();

  //   let data = {
  //     fullname: this.state.fullname,
  //     email: this.state.email,
  //     number: this.state.number,
  //     message: this.state.message
  //   }

  //   axios.post('http://localhost:3001/api/Contactusform', data)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         sent: true,
  //       });


  //       if (res.data === 'success')
  //         this.resetForm();
  //       alert('messege sent successfully')

  //     }).catch(() => {
  //       console.log('message not sent');
  //     })

  // }

  // resetForm = () => {
  //   this.setState({
  //     fullname: '',
  //     email: '',
  //     number: '',
  //     message: ''
  //   })

  // }

  render() {
    return (
      <div className="Contactus" >
        <div className="Contactus_table1">
          <div className="Contactus_table1_info">
            <h3>We’d love to hear from you</h3>
            <div className="mail">
              <img src="../images/mail.svg" alt="" />
              <h2>contact@erminautomotive.com</h2>
            </div>
            <div className="address">
              <img src="../images/address.svg" alt="" />
              <h2>Plot NO-68,behind Q-city, Nanakramguda, Gachibowli, Hyderabad, Telangana, 500032.</h2>
            </div>
            <div className="number">
              <img src="../images/number.svg" alt="" />
              <h2>+91 8179826746</h2>
            </div>
          </div>


          <div className="Contactus_table1_input">
            <h3>Contact us</h3>

            <div className="Contactus_table1_inputbox">
              <h4>Full Name *</h4><br />
              <input type="text" required="required" name="fullname"
              // value={this.state.fullname}
              // onChange={this.handleFullname}
              />
            </div>
            <div className="input_container">
              <div className="Contactus_table1_inputbox ">
                <h4>Email *</h4><br></br>
                <input type="text" required="required" name="email"
                // value={this.state.email}
                // onChange={this.handleEmail}
                />
              </div>
              <div className="Contactus_table1_inputbox">
                <h4>Phone Number</h4><br></br>
                <input type="text" required="required" name="number"
                // value={this.state.number}
                // onChange={this.handleNumber}
                />
              </div>
            </div>
            <div className="Contactus_table1_inputbox">
              <h4>Message *</h4><br></br>
              <textarea id="Message_box" type="text" required="required" name="message"
              // value={this.state.message}
              // onChange={this.handleMessage}
              />
            </div>

            <button type="submit" id="container2_btn" className="btn btn-primary"
            // onClick={this.formSubmit}

            >Send Message</button>
          </div>


        </div>
        <div className="Contactus_table2">
          <img id="map_img" src="../images/map.png" alt="" />
          
        </div>
      </div>
    )
  }
}
export default ContactUs