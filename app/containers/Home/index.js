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


export default class Home extends React.PureComponent {
  render() {
    const bannerStyle={
      display:"flex",
      width:"100%",
      height:"300px",
      marginTop:"50px",
      background:"url(http://www.digitalplatforms.co.za/wp-content/uploads/2015/11/Website-Design-Background.png)",
      backgroundSize:"cover",
      backgroundPosition:"bottom"


    }
    const logoStyle={
      width:"60%",
      height:"5px",
      padding:"20px",
      color:"black",
      fontFamily:"Roboto, sans-serif"
    }
    const logo2={
      width:"40%",
      height:"5px",
      padding:"20px",
      color:"black",
      fontFamily:"Roboto, sans-serif"


    }
    const navBar={
      display:"flex"

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
    const boxFive={
      display:"flex"

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
    const boxNine={
      display:"flex"

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
              <Menu/>
            </nav>
              <p style={logoStyle}>Digimortal Designs</p>
              <p style={logo2}>Web Design & Photography</p>
          </div>
          <banner style={bannerStyle}>

          </banner>

          <div style={boxTwo}> </div>

          <div style={boxThree}> </div>

          <div style={boxFour}> </div>



        </header>
        <main>


          <div style={boxFive}> </div>

          <div style={boxSix}> </div>

          <div style={boxSeven}> </div>


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
