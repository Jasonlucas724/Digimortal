/**
*
* Footer
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import {Link} from 'react-router';

class Footer extends React.PureComponent {
  render() {
    /*footer*/
    const boxNine={
      display:"flex",
      width:"100px",
      height:"100px"

    }
    const boxTen={
      display:"flex",
      flexDirection:"row"

    }
    const footerStyle={
      display:"flex",
      justifyContent:"space-around"


    }
    const listStyle={
      width:"50px",
      height:"20px",
      marginLeft:"20px",



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
    /*End Footer*/

    return (
      <div>

        <Responsive minDeviceWidth={1024}>
          <footer style={footerStyle}>
            <Link to="/" style={linkStyle}>Contact</Link>
            <Link to="/" style={linkStyle}>Support</Link>
            <Link to="/" style={linkStyle}>Knowledge Base</Link>
            <Link to="/" style={linkStyle}>Efile</Link>
          </footer>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <footer style={footerStyle}>
            <Link to="/" style={linkStyle}>Contact</Link>
            <Link to="/" style={linkStyle}>Support</Link>
            <Link to="/" style={linkStyle}>Knowledge Base</Link>
            <Link to="/" style={linkStyle}>Efile</Link>
          </footer>
          </Responsive>
        </div>
    );
  }
}

export default Footer;
