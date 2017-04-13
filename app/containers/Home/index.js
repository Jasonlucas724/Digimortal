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
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';


export default class Home extends React.PureComponent {
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

    /*Main*/
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
      fontSize:"25px",
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
      background:"#d90000",
      marginTop:"50px"


    }
    const price={
      display:"flex",
      fontSize:"30px",
      justifyContent:"center",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",
      padding:"10px",
      marginTop:"20px"

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
    const buttonStyle={
      width:"100px",
      alignSelf:"center",
      background:"green",
      marginTop:"30px"
    }
    const bannerStyle2={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      width:"100%",
      height:"1000px",
      alignSelf:"center",
      background:"url(https://cdn-az.taxslayer.com/content/images/program_screen.jpg)",
      marginTop:"50px",
      backgroundSize:"cover"



    }
    /*End of Main*/



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
    /*End Footer*/


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
            <TextField hintText="search" style={textField}/>



          </banner>


          <div style={boxTwo}> </div>

          <div style={boxThree}>


           </div>

          <div style={boxFour}> </div>



        </header>


        <main style={mainStyle}>

          <div style={boxOne}>
            <div style={heading}>PREMIUM</div>
            <div style={parStyle1}>LIVE CHAT SUPPORT</div>
            <div style={price}>$40</div>
            <Button style={buttonStyle}  bsStyle="primary">Primary</Button>
          </div>


          <div style={boxSix}>
            <div style={heading}>CLASSIC</div>
            <div style={parStyle1}>ALL MAJOR FORMS</div>
            <div style={price}>$22</div>
            <Button style={buttonStyle} bsStyle="primary">Primary</Button>
           </div>

          <div style={boxSeven}>
            <div style={heading}>PROFESSIONAL</div>
            <div style={parStyle1}>BEST FOR SELF EMPLOYED</div>
            <div style={price}>$55</div>
            <Button style={buttonStyle}  bsStyle="primary">Primary</Button>
          </div>

        </main>

        <div style={bannerStyle2}>

        </div>

        <div style={boxNine}> </div>

        <div style={boxTen}> </div>

        <footer style={footerStyle}>
          <Link to="/" style={linkStyle}>Contact</Link>
          <Link to="/" style={linkStyle}>Support</Link>
          <Link to="/" style={linkStyle}>Knowledge Base</Link>
          <Link to="/" style={linkStyle}>Efile</Link>



        </footer>


      </div>
    );
  }
}
