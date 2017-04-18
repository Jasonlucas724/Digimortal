/*
 *
 * Products
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from 'react-router';
import Carousel from 'react-bootstrap/lib/Carousel';

export default class Products extends React.PureComponent {
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
    const divStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignSelf:"center",
      width:"100%",
      height:"120px",
      border:"2px solid black",
      marginTop:"250px",
      background:"red"


    }
    const boxOne={
      display:"flex",
      width:"100%",
      height:"100px",
      background:"red",
      justifyContent:"flex-end"



    }
    const h2Style={
      display:"flex",
      flexDirection:"row",
      color:"white",
      fontFamily:"Roboto, sans serif",
      marginLeft:"19px",
    }
    const h6={
      display:"flex",
      flexDirection:"row",
      color:"white",
      fontFamily:"Roboto,",
      marginLeft:"19px",
      fontSize:"20px"

    }
    const sectionOne={
      display:"flex",
      flexDirection:"row",
      marginTop:"40px"

    }
    const banner={
      display:"flex",
      flexDirection:"row",
      width:"790px",
      height:"600px",
      background:"url(https://www.taxslayer.com/Content/images/free_bknd.gif)",
      backgroundSize:"cover",

    }
    const textField1={
      display:"flex",
      width:"300px",
      color:"#000000",
      fontFamily:"Roboto",
      marginLeft:"70%",
      fontSize:"30px",
      marginTop:"30px",
    }
    const textContainer={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    }


    const buttonStyle={
      display:"flex",
      width:"100px",
      height:"100px",



    }

    const carousel={
      marginTop:"1000px",
      width:"1000px",
      left:"450px"
    }


    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>

      <header>
        <div>

         <nav style={navBar}>
           <p style={logoStyle}></p>
             <Link to="/Products" style={linkStyle}>Products</Link>
             <Link to="/RefundCalculator" style={linkStyle}>Refund Calculator</Link>
             <Link to="/About" style={linkStyle}>About</Link>
             <Link to="/Support" style={linkStyle}>Support</Link>
        </nav>
        </div>
      </header>


      <main>
        <div style={divStyle}>
          <h2 style={h2Style}>Online Software Products</h2>
          <div style={boxOne}>
            <h6 style={h6}>Home</h6>
            <h6 style={h6}>Products</h6>
          </div>
        </div>

        <button style={buttonStyle}></button>
        <div style={sectionOne}>
          <banner style={banner}></banner>
          <div style={textContainer}>
            <div style={textField1}>TaxSlayer Classic</div>
            <div style={textField1}>File Federal for $22</div>
            <div style={textField1}>Easily prepare and e-file your federal return with additional forms and support. Works on all devices.</div>
          </div>
        </div>




        <Carousel style={carousel}>
          <Carousel.Item>
            <img width={900} height={500} src="http://www.budgetsavvydiva.com/wp-content/uploads/2017/01/Capture-8-760x305.png"/>
            <Carousel.Caption>
              <h3>Compare Products</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} src="http://www.maximtaxservices.com/wp-content/themes/maximtaxservices/images/slider/05.jpg"/>
            <Carousel.Caption>
              <h3>Try</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </main>

      <footer>
      </footer>
      </div>
    );
  }
}
