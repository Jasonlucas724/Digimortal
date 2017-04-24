/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignIn extends React.PureComponent {
  render() {
    const div1={
    display:"flex",
    flexDirection:"column",
    width:"200px",
    height:"100%",
    color:"#000000",
    background:"black",
    marginTop:"100px",
    marginLeft:"40%"
    }
    const inputOne={
    display:"flex",
    height:"35px",
    color:"white",
    fontFamily:"Roboto, sans serif",
    }
    const div2={
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      width:"200px",
      height:"40px",
      marginTop:"10px",
      marginLeft:"40%"
    }

    const inputTwo={
    display:"flex",
    height:"35px",
    color:"white",
    fontFamily:"Roboto",
    background:"black",
    fontFamily:"Roboto"



    }

    const textArea={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      border:"2px solid black",
      color:"black",


    }

    return (

      <div>
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

          <div style={div1}>
            <input style={inputOne}  type="text" placeholder="Username" />
          </div>
          <div style={div2}>
            <input style={inputTwo}  type="text" placeholder="Password" />
          </div>


      </div>
    );
  }
}
