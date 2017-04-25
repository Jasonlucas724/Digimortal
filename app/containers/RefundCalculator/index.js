/*
 *
 * RefundCalculator
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/Menu';
import TextField from 'material-ui/TextField';



export default class RefundCalculator extends React.PureComponent {
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
    const banner={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"50px",
      background:"#d22938"
    }
    const videoContainer={
      display:"flex",
      flexDirection:"column",
      width:"300px",
      height:"300px",
      background:"#929998",
      justifyContent:"center",
      margin:"20px"


    }

    const main1={
      display:"flex",
      fontSize:"30px",
      color:"black",
      flexDirection:"column",
      alignItems:"center"

    }
    const sectionHeader={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:"300px",
    }
    const textContainer={
      display:"flex",
      flexDirection:"column",
      width:"480px",
      fontFamily:"Roboto, sans serif",
      margin:"20px"

    }

    const box3={
      display:"flex",
      fontSize:"30px",
      color:"black",
    }
    const container={
      display:"flex",
      width:"100%",
      maxWidth:"1000px",
      flexDirection:"row",
      justifyContent:"space-around"
    }
    const refundBox={
      background:"#555555",
      width:"100px",
      height:"100px",
    }
    const TextField={
      display:"flex",
      flexDirection:"column",
      width:"400px",
      fontFamily:"Roboto, sans serif",
      color:"red"

    }
    const moneyIcon={
      fontSize:"50px",
      color:"green",
      margin:"0 auto"

    }

    return (

      <div>
        <Helmet title="RefundCalculator" meta={[ { name: 'description', content: 'Description of RefundCalculator' }]}/>

          <div>
            <Helmet title="Support" meta={[ { name: 'description', content: 'Description of Support' }]}/>
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


                <main style={main1}>
                  <div style={sectionHeader}>
                    <div style={videoContainer}>

                    </div>
                    <div style={textContainer}>Estimate Your Tax Refund for Free.
                      <h3 style={box3}>Estimate your 2016 federal tax refund with our easy and simple tax refund calculator. Choose your options, enter the
                         requested information and the calculator will do the rest. Even better – it’s free!</h3>
                    </div>
                    <div style={TextField}>Estimated Refund Amount
                      <div style={moneyIcon}>$0
                    </div>

                    </div>
                  </div>

                  <div style={container}>
                    <div style={refundBox}></div>
                    <div style={refundBox}></div>
                    <div style={refundBox}></div>
                    <div style={refundBox}></div>
                    <div style={refundBox}></div>
                    <div style={refundBox}></div>
                    <div style={refundBox}></div>
                  </div>


                </main>

              </Responsive>
          </div>
        </div>
      </div>
    );
  }
}
