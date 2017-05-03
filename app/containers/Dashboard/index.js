/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';



export default class Dashboard extends React.PureComponent {
          constructor(props) {
            super(props);
            this.state = {
              title:"",
              body:"",
              image:"",
              preview:""
            }
          }

          handleTitle = (event) => {
            this.setState({
              title:event.target.value
            })
          }

          handleBody = (event) => {
            this.setState({
              body:event.target.value
            })
          }

          handleImage = (event) => {
            event.preventDefault();

            let reader = new FileReader();
            let file = event.target.files[0];

            reader.onloadend = () => {
              this.setState({
                image:file,
                preview: reader.result
              })
            }

            reader.readAsDataURL(file);
          }

          storeArticle = () => {

            var data = new FormData();
            data.append("title", this.state.title);
            data.append("body", this.state.body);
            data.append("image", this.state.image);

            fetch("http://digimortaldesigns.org/api/storeArticle", {
              method:"post",
              body:data
            })
            .then(function(response) {
              return response.json();
            })
            .then(function(json) {
              if(json.success) {
                alert(json.success);
              }
              else if(json.error) {
                alert(json.error);
              }
            })
          }

          render() {

            const divOne={
            display:"flex",
            flexDirection:"column",
            width:"200px",
            height:"100%",
            animationDirection:"normal"
            }
            const inputOne={
            display:"flex",
            height:"35px",
            border:"2px solid white",
            color:"white",
            fontFamily:"Roboto, sans serif"
            }
            const divTwo={
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between",
              width:"400px",
              height:"380px",
              marginTop:"10px",
              border:"2px solid white"
            }
            const textArea={
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
              border:"2px solid black",
              color:"white",
              fontFamily:"Roboto, sans serif"
            }
            const divThree={
              flexDirection:"row",
              marginTop:"10px",

            }
          const inputTwo={
              width:"96px",
              height:"30px",
              border:"2px solid white",

            }
            const divFour={
              flexDirection:"row",


            }
            const imageStyle={
              marginTop:"10px"

            }
            const divFive={
              flexDirection:"row",

            }
            const inputThree={
              marginTop:"10px",
              border:"2px solid white",
              color:"white",
              fontFamily:"Roboto, sans serif"
            }
            const background={
              display:"flex",
              background:"url(https://pbs.twimg.com/media/C9D07mhXoAEUezM.jpg)",
              backgroundSize:"cover",
              minHeight:"70vh",
              flexDirection:"column"
            }
            const sectionTwo={
            display:"flex",
            flexDirection:"row",
            width:"100%",
            height:"200px",
            background:"red",
            marginTop:"300px",
            }



            const row1={
            background:"red"

            }
            return (
              <div style={background}>
                <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

                <div style={divOne}>
                  <input style={inputOne} onChange={this.handleTitle} type="text" placeholder="Title" />
                </div>
                <div style={divTwo}>
                  <textarea style={textArea} onChange={this.handleBody} placeholder="Body"> </textarea>
                </div>
                <div style={divThree}>
                  <input style={inputTwo} onChange={this.handleImage} type="file" />
                </div>
                <div style={divFour}>
                  <img style={imageStyle} src={this.state.preview}/>
                </div>
                <div style={divFive}>
                  <input style={inputThree} onTouchTap={this.storeArticle} type="submit"/>
                </div>



                <main>
                <div style={sectionTwo}>
                  <div style={row1}></div>
                </div>



                </main>
              </div>

    );
  }
}
