/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import Menu from 'material-ui/svg-icons/navigation/Menu';
import TextField from 'material-ui/TextField';

export default class About extends React.PureComponent {
  render() {


        const navBar={
          display:"flex",
          flexDirection:"row",
          width:"100%",
          justifyContent:"space-between",
          position:"fixed",
          top:"0",
          background:"white"
        }
        const logoStyle={
          width:"350px",
          height:"100px",
          marginTop:"10px",
          background:"url(http://easiertaxes.com/wp-content/uploads/2013/07/taxslayer-logo-large.png)",
          backgroundSize:"cover",


        }
        const navLink={
          textDecoration:"0",
          display:"flex",
          flexDirection:"column",
          padding:"15px",
          alignSelf:"center",
          color:"#000000",
          fontSize:"18px",
          fontFamily:"Roboto, sans serif"


        }
        const mainBackground={
          display:"flex",

        }
        const container={
          display:"flex",
          flexDirection:"column",
          width:"300px",
          height:"300px",
          background:"#929998",
          justifyContent:"center",
          fontFamily:"Roboto, sans serif",
          marginTop:"200px"

        }
        const item1={

          color:"ffffff",






        }
        const item2={
          color:"#ffffff",
          width:"100px",



        }
        const item3={
          color:"#000000",

          background:"#929998"



        }


    return (
        <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

          <div>
          <Responsive minDeviceWidth={1024}>
              <header>
                <div>
                  <nav style={navBar}>
                  <p style={logoStyle}></p>
                    <Link to="/Products" style={navLink}>Products</Link>
                    <Link to="/RefundCalculator" style={navLink}>Refund Calculator</Link>
                    <Link to="/About" style={navLink}>About</Link>
                    <Link to="/Support" style={navLink}>Support</Link>
                  <Menu/>
                 </nav>
                </div>
              </header>


            <main style={mainBackground}>
              <div style={container}>
                <div style={item1}>Classic</div>
                <div style={item2}>Premium</div>
                <div style={item3}>Self-Employed</div>
              </div>
            </main>



            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <header>
                <div>
                  <nav style={navBar}>
                  <p style={logoStyle}></p>
                    <Link to="/Products" style={navLink}>Products</Link>
                    <Link to="/RefundCalculator" style={navLink}>Refund Calculator</Link>
                    <Link to="/About" style={navLink}>About</Link>
                    <Link to="/Support" style={navLink}>Support</Link>
                  <Menu/>
                </nav>
                </div>


              </header>
            </Responsive>

          </div>
        </div>
    );
  }
}
