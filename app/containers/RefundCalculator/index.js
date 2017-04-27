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
import Person from 'material-ui/svg-icons/social/person';
import Description from 'material-ui/svg-icons/action/description';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Assignment from 'material-ui/svg-icons/action/assignment';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';




export default class RefundCalculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hover:0
    }
  }
  handleHover = (id) => {
    this.setState({
      hover:id
    })
  }
  renderBoxes = () => {
    const iconOne={
      width:"50px",
      height:"50px",
      background:"transparent",



    }
    const textFieldOne={
      fontSize:"15px",
      color:"grey",
      fontFamily:"Roboto, sans serif",

    }
    const iconTwo={
      width:"50px",
      height:"50px",
      background:"transparent",


    }
    const textFieldTwo={
      fontSize:"15px",
      color:"grey",
      fontFamily:"Roboto, sans serif",

    }
    const iconThree={
      width:"50px",
      height:"50px",
      background:"transparent",


    }
    const textFieldThree={
      fontSize:"15px",
      color:"grey",
      fontFamily:"Roboto, sans serif",

    }
    const iconFour={
      width:"50px",
      height:"50px",
      background:"transparent",


    }
    const textFieldFour={
      fontSize:"15px",
      color:"grey",
      fontFamily:"Roboto, sans serif",

    }
    const iconFive={
      width:"50px",
      height:"50px",
      background:"transparent",

    }
    const textFieldFive={
      fontSize:"15px",
      color:"grey",
      fontFamily:"Roboto, sans serif",

    }
    const iconSix={
      width:"50px",
      height:"50px",
      background:"transparent",

    }
    const textFieldSix={
      fontSize:"15px",
      color:"grey",
      fontFamily:"Roboto, sans serif",

    }
    const iconSeven={
      width:"50px",
      height:"50px",
      background:"transparent",

    }
    const textFieldSeven={
      fontSize:"15px",
      color:"grey",
      fontFamily:"Roboto, sans serif",

    }
    const container={
      display:"flex",
      width:"100%",
      maxWidth:"1000px",
      flexDirection:"row",
      justifyContent:"space-around"
    }
    const refundBox={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      border:"2px solid grey",
      width:"100px",
      height:"100px",
    }
    const hoverStyle={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      border:"2px solid grey",
      width:"100px",
      height:"100px",
      background:"#1F5899"
    }
    var boxStyle = refundBox;


    return (
      <div style={container}>
        <div style={boxStyle}>
          <Description style={iconOne}/>
          <p style={textFieldOne}>Basic Info</p>
        </div>
        <div style={boxStyle}>
          <Person style={iconTwo}/>
          <p style={textFieldTwo}>Family</p>
        </div>
        <div style={boxStyle}>
          <AccountBalance style={iconThree}/>
          <p style={textFieldThree}>income</p>
        </div>
        <div style={boxStyle}>
          <ContentCopy style={iconFour}/>
          <p style={textFieldFour}>Deductions</p>
        </div>
        <div style={boxStyle}>
          <Assignment style={iconFive}/>
          <p style={textFieldFive}>Credits</p>
        </div>
        <div style={boxStyle}>
          <AttachMoney style={iconSix}/>
          <p style={textFieldSix}>Results</p>
        </div>
        <div style={boxStyle}>
          <CheckCircle style={iconSeven}/>
          <p style={textFieldSeven}>Start</p>
        </div>
      </div>
    )
  }




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
      background:"url(http://www.techlicious.com/images/computers/woman-laptop-cash-shutterstock-510px.jpg)",
      justifyContent:"center",
      margin:"20px",
      backgroundSize:"cover",



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
      textAlign:"justify"
    }

    const TextField={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      fontFamily:"Roboto, sans serif",
      color:"red"

    }
    const moneyIcon={
      fontSize:"50px",
      color:"green",
      marginLeft:"145px"



    }
    const bannerStyle={
      display:"flex",
      flexDirection:"row",
      marginTop:"50px"


    }
    const banner2={
    width:"1000px",
    height:"500px",
    background:"url(https://cdn-az.taxslayer.com/content/images/refund_calc_image.jpg)",
    backgroundSize:"cover",



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
                    {this.renderBoxes()}


                <div style={bannerStyle}>
                  <div style={banner2}></div>
                </div>

                </main>

              </Responsive>
          </div>
        </div>
      </div>
    );
  }
}
