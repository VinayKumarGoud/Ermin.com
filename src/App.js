import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Miles from "./components/Miles"
import Terms from "./components/Terms";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Preorder from "./components/Preorder";
import Address from "./components/Address";
import Payment from "./components/Payment";
import BillingAddress from "./components/BillingAddress";
import Traway from "./components/Traway";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/terms">
            <Terms />
          </Route>

          <Route path="/Payment">
            <Payment />
            <Footer />
          </Route>

          <Route path="/BillingAddress">
            <BillingAddress />
            <Footer />
          </Route>

          <Route path="/Address">
            <Address />
            <Footer />
          </Route>

          <Route path="/preorder">

            <Preorder />
            <Footer />
          </Route>

          <Route path="/Traway">

            <Navbar />
            <Traway />
            <Footer />
          </Route>

          <Route path="/AboutUs">

            <Navbar />
            <AboutUs />
            <Footer />
          </Route>


          <Route path="/ContactUs">

            <Navbar />
            <ContactUs />
            <Footer />
          </Route>


          <Route path="/Miles">

            <Navbar />

            <Miles />

            <Footer />
          </Route>




          <Route path="/">
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;