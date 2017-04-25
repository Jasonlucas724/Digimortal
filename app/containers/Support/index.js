/*
 *
 * Support
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/Menu';
import TextField from 'material-ui/TextField';

export default class Support extends React.PureComponent {
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
    return (
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
