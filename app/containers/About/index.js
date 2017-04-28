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
          flexDirection:"column",

        }
        const container={
          display:"flex",
          flexDirection:"column",
          width:"100%",
          height:"100px",
          background:"#ea081d",
          justifyContent:"center",
          fontFamily:"Roboto, sans serif",
          marginTop:"150px"

        }
        const item1={
        color:"#ffffff",
        fontSize:"30px",
        fontFamily:"Roboto, sans serif",
        marginLeft:"10px"


        }
        const imageContainer={
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          width:"1050px",
          height:"500px",
          background:"url(http://cbarchitectspc.com/wp-content/uploads/2016/08/tax-slayer-9.jpg)",
          backgroundSize:"cover",
          alignSelf:"center"



        }
        const image={
          display:"flex",

        }
        const paragraphStyle1={
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          width:"100%",
          marginTop:"150px"


        }
        const item2={
          color:"#000000",
          fontFamily:"Roboto, sans serif",
          fontSize:"25px",
          width:"700px",
          height:"350px"

        }
        const footerContainer={
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          width:"100%",
          height:"100px",
          background:"#FF170D",

        }
        const h1={
          color:"#ffffff",
          fontSize:"30px",
          fontFamily:"Roboto, sans serif",
          marginTop:"30px"
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
                <div style={item1}>Why choose Taxslayer?</div>
              </div>
              <div style={imageContainer}>
                <div style={image}></div>
              </div>
              <div style={paragraphStyle1}>
                <div style={item2}>Have you ever wondered how TaxSlayer
                  can be so much easier to use than other tax software?
                   If so, let us explain. TaxSlayer has spent countless hours analyzing the wants and needs of customers just like you. Because of that, we know and understand exactly what you are looking for when
                   preparing your taxes. Simple. No surprises.</div>
              </div>
              <div style={footerContainer}>
                <div style={h1}>Start Your Federal Tax Return Today</div>
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
