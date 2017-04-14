/**
*
* Main
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import Button from 'react-bootstrap/lib/Button';

class Main extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      boxOne:"",
      boxTwo:"",
      boxThree:"",
    }
  }
  componentWillMount(){
    fetch("http://localhost:8000/api/getArticles")
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      this.setState({
        boxOne:json[0],
        boxTwo:json[1],
        boxThree:json[2],
      })
    }.bind(this))
  }
  render() {
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


    return (
      <div>
      <Responsive minDeviceWidth={1024}>
      <main style={mainStyle}>
        <div style={boxOne}>
          <div style={heading}>{this.state.boxOne.title}</div>
          <div style={parStyle1}>{this.state.boxOne.body}</div>
          <div style={price}>$40</div>
          <Button style={buttonStyle}  bsStyle="primary">Primary</Button>
        </div>


        <div style={boxSix}>
          <div style={heading}>{this.state.boxTwo.title}</div>
          <div style={parStyle1}>{this.state.boxTwo.body}</div>
          <div style={price}>$22</div>
          <Button style={buttonStyle} bsStyle="primary">Primary</Button>
         </div>

        <div style={boxSeven}>
          <div style={heading}>{this.state.boxThree.title}</div>
          <div style={parStyle1}>{this.state.boxThree.body}</div>
          <div style={price}>$55</div>
          <Button style={buttonStyle}  bsStyle="primary">Primary</Button>
        </div>
      </main>
      </Responsive>


    <Responsive maxDeviceWidth={1023}>
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
      </Responsive>

      <div style={bannerStyle2}></div>


    </div>
    );
  }
}

export default Main;
