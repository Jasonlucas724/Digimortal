/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Button from 'react-bootstrap/lib/Button';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Menu from 'material-ui/svg-icons/navigation/Menu';
import {Link} from 'react-router';


export default class Home extends React.PureComponent {
  render() {
    const bannerStyle={
      display:"flex",
      width:"100%",
      height:"300px",
      marginTop:"70px",
      background:"url(http://www.adirectory.us/pix/tax-preparation-400.jpg)",
      backgroundSize:"cover",



    }
    const logoStyle={
      width:"350px",
      height:"100px",
      marginTop:"20px",
      background:"url(http://easiertaxes.com/wp-content/uploads/2013/07/taxslayer-logo-large.png)",
      backgroundSize:"cover",


    }
    const linkStyle={
      textDecoration:"0",
      display:"flex",
      flexDirection:"column",
      padding:"15px",
      alignSelf:"center",
      color:"#000000"


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
      display:"flex"

    }
    const boxThree={
      display:"flex"

    }
    const boxFour={
      display:"flex"

    }
    const boxOne={
      display:"flex",
      flexDirection:"column",
      width:"300px",
      height:"300px",
      background:"#000000",
      marginTop:"50px"
    }
    const mainStyle={
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
    }






    const heading={
      display:"flex",
      fontSize:"15px",
      justifyContent:"center",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",
      padding:"10px",
      marginTop:"20px"
    }
    const container2={
      display:"flex",
      fontSize:"10px",
      justifyContent:"center",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",

    }
    const boxSix={
      display:"flex",
      flexDirection:"column",
      width:"300px",
      height:"300px",
      background:"#000000",
      marginTop:"50px"


    }
    const boxSeven={
      display:"flex",
      flexDirection:"column",
      width:"300px",
      height:"300px",
      background:"#000000",
      marginTop:"50px"

    }
    const boxEight={
      display:"flex"

    }
    const parStyle={
      display:"flex",






    }
    const parStyle1={
      display:"flex",
      fontSize:"15px",
      justifyContent:"center",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",
      padding:"10px",
      marginTop:"20px"


    }
    const boxNine={
      display:"flex",
      width:"100px",
      height:"100px"

    }
    const boxTen={
      display:"flex"

    }
    const footerStyle={
      width:"100%",
      height:"50px",
      background:"#000000",
      bottom:"auto"

    }


    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>



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

          </banner>

          <div style={boxTwo}> </div>

          <div style={boxThree}>


           </div>

          <div style={boxFour}> </div>



        </header>


        <main style={mainStyle}>


          <div style={boxOne}>

              <h1 style={heading}>PREMIUM</h1>

                <p style={parStyle}>LIVE CHAT SUPPORT</p>


          </div>


          <div style={boxSix}>
              <h1 style={heading}>CLASSIC</h1>
              <div style={container2}>
              <p style={parStyle}>ALL MAJOR FORMS</p>

              </div>

           </div>

          <div style={boxSeven}>
              <div style={heading}>PROFESSIONAL</div>
              <div style={parStyle1}>BEST FOR SELF EMPLOYED</div>



          </div>


        </main>





          <div style={boxNine}> </div>

          <div style={boxTen}> </div>
          <footer style={footerStyle}>




        </footer>


      </div>
    );
  }
}
