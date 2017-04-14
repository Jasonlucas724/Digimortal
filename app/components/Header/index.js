/**
*
* Header
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import {Link} from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/Menu';
import TextField from 'material-ui/TextField';
class Header extends React.PureComponent {
  render() {
    /*This is nav properties*/
    const bannerStyle={
      display:"flex",
      width:"100%",
      height:"300px",
      marginTop:"70px",
      background:"url(http://www.adirectory.us/pix/tax-preparation-400.jpg)",
      backgroundSize:"cover",



    }
    const textField={
      marginTop:"100px",
      marginLeft:"1500px",
      background:"white",
      borderRadius:"5px"


    }
    const logoStyle={
      width:"350px",
      height:"100px",
      marginTop:"10px",
      background:"url(http://easiertaxes.com/wp-content/uploads/2013/07/taxslayer-logo-large.png)",
      backgroundSize:"cover",


    }
    const linkStyle={
      textDecoration:"0",
      display:"flex",
      flexDirection:"column",
      padding:"15px",
      alignSelf:"center",
      color:"#000000",
      fontSize:"18px",
      fontFamily:"Roboto, sans serif"


    }



    const navBar={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-between",
      position:"fixed",
      top:"0",
      background:"white"
    }
    const boxTwo={
      display:"flex",
      background:"#d90000"

    }
    const boxThree={
      display:"flex"

    }
    const boxFour={
      display:"flex"

    }
    /*End of Nav*/

    return (
      <div>
      <Responsive minDeviceWidth={1024}>
      <header>
        <div>
          <nav style={navBar}>
            <p style={logoStyle}></p>
            <Link to="/" style={linkStyle}>Products</Link>
            <Link to="/" style={linkStyle}>Refund Calculator</Link>
            <Link to="/" style={linkStyle}>About</Link>
            <Link to="/" style={linkStyle}>Support</Link>
            <Menu/>
          </nav>
        </div>

        <banner style={bannerStyle}>
          <TextField hintText="search" style={textField}/>
        </banner>


        <div style={boxTwo}> </div>
        <div style={boxThree}>
        </div>
        <div style={boxFour}> </div>
      </header>
      </Responsive>


      <Responsive maxDeviceWidth={1023}>
      <header>
        <div>
          <nav style={navBar}>
            <p style={logoStyle}></p>
            <Link to="/" style={linkStyle}>Products</Link>
            <Link to="/" style={linkStyle}>Refund Calculator</Link>
            <Link to="/" style={linkStyle}>About</Link>
            <Link to="/" style={linkStyle}>Support</Link>
            <Menu/>
          </nav>
        </div>

        <banner style={bannerStyle}>
          <TextField hintText="search" style={textField}/>
        </banner>


        <div style={boxTwo}> </div>
        <div style={boxThree}>
        </div>
        <div style={boxFour}> </div>
      </header>
      </Responsive>

      </div>
    );
  }
}

export default Header;
