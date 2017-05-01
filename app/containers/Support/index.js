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
    const supportBar={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"100px",
      background:"#d22938",
      marginTop:"200px",
    }
    const textField={
      fontSize:"30px",
      fontFamily:"Roboto, sans serif",
      color:"#ffffff",
      marginLeft:"30px"
    }
    const searchContainer1={
      display:"flex",
      flexDirection:"row",
      width:"920px",
      height:"500px",
      marginTop:"100px",
      justifyContent:"center",
      background:"url(http://www.eplanusa.com/uploads/tx_eplandb/Support_01.jpg)",
      backgroundSize:"cover"
    }
    const userContainer={
      display:"flex",
      flexDirection:"row"
    }
    const image={
      width:"200px",
      height:"200px",
      background:"url(http://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg)",
    }

    const searchBar={
    }
    const Container={
      display:"flex",
      flexDirection:"column",
      alignSelf:"center",
      textAlign:"center"
    }

    const overallContainer = {
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",

    }

    const userName={
      fontSize:"20px",
      fontFamily:"Roboto"

    }

    const h1={
      display:"flex",
      flexDirection:"column",
      marginLeft:"200px",
      fontSize:"30px",


    }
    const text={
    fontFamily:"Roboto, sans serif",
    }
    const paragraphStyle={
      dISPLAY:"flex",
      flexDirection:"row",
      justifyContent:"center",
      fontFamily:"Roboto, sans serif",


    }
    const sectionTwo={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      borderColor:"#000000",


    }
    const textField2={
      width:"300px",
      height:"50px",
      borderColor:"2px black solid"


      }
      const text2={

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
              <div style={supportBar}>
                <div style={textField}>TaxSlayer Support</div>
              </div>
              <div style={overallContainer}>
                <div style={searchContainer1}>
                  <TextField hintText="Search" style={searchBar}/>
                </div>
                <div style={Container}>
                  <div style={image}></div>
                  <div style={userName}>Jane Doe</div>
                  <div style={paragraphStyle}>Please enter your question.</div>
                </div>
              </div>
                <div style={h1}>
                  <div style={text}>Welcome to our Support center, how may we help you.
                </div>
                <div style={sectionTwo}>
                  <div style={textField2}></div>
                  <div style={text}></div>
                </div>
            </div>

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
