/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignUp extends React.PureComponent {
  render() {

    const bodyBackground={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"300px",
      border:"2px solid black",
      maxWidth:"1000px",
      margin:"0 auto",
      justifyContent:"space-between",
      marginTop:"350px"
    }
    const logo={
      display:"flex",
      flexDirection:"row",
      height:"300px",
      background:"url(https://blog.taxslayer.com/wp-content/uploads/2016/03/TaxSlayer_Logo_Red_Registered_LG.png)",
      backgroundSize:"cover",
      bottom:"10px"

    }
    const headerStyle={
      height:"40px",
      width:"100%",
      background:"red",
      width:"498px"

    }
    const inputStyle={
      display:"flex",
      flexDirection:"row",
      fontFamily:"Roboto, sans serif",
    }

    const signinBox={
      display:"flex",
      width:"50%",
      flexDirection:"column"
    }
    const signupBox={
      width:"50%"
    }
    const labelOne={
      fontFamily:"Roboto, sans serif"
    }
    const labelTwo={
      fontFamily:"Roboto, sans serif"
    }

    return (
      <div>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>


        <div style={bodyBackground}>
          <div style={logo}></div>
          <div style={signupBox}></div>

          <div style={signinBox}>
            <div style={headerStyle}></div>
            <div>
              <label style={labelOne}>Username</label>
              <input style={inputStyle} type="text" placeholder="Username" />
            </div>
            <div>
              <label style={labelTwo}>Password</label>
              <input style={inputStyle} type="text" placeholder="Password" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
