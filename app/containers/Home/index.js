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
    const imgContainer={
      display:"flex",
      flexDirection:"column",
      border:"1px #ccc solid",
      padding:"10px"

    }

    const heading={
      display:"flex",
      width:"100px",
      height:"100px",
      backgound:"ffffff"


    }
    const boxSix={
      display:"flex"

    }
    const boxSeven={
      display:"flex"

    }
    const boxEight={
      display:"flex"

    }
    const parStyle={
      display:"flex",
      width:"100px",
      height:"100px"

    }
    const boxNine={
      display:"flex",
      width:"100px",
      height:"100px"

    }
    const boxTen={
      display:"flex"

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
        <main>


          <div style={imgContainer}>
              <h1 style={heading}>Basic</h1>
                <p style={parStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


          </div>

          <div style={boxSix}>
              <h1 style={heading}>Classic</h1>
                <p style={parStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


           </div>

          <div style={boxSeven}>
              <h1 style={heading}>Professional</h1>
                <p style={parStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


          </div>


        </main>
        <footer>

          <div style={boxEight}> </div>

          <div style={boxNine}> </div>

          <div style={boxTen}> </div>



        </footer>


      </div>
    );
  }
}
