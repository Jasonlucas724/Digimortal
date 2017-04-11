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

            fetch("http://localhost:8000/api/storeArticle", {
              method:"post",
              body:data
            })
            .then(function(response) {
              return response.json();
            })
            .then(function(json) {
              if(json.success) {
                alert("Success");
              }
              else if(json.error) {
                alert("Error");
              }
            })
          }

          render() {
            return (
              <div>
                <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

                <input onChange={this.handleTitle} type="text" placeholder="Title" />
                <textarea onChange={this.handleBody} placeholder="Body"> </textarea>
                <input onChange={this.handleImage} type="file" />
                <img src={this.state.preview}/>
                <input onTouchTap={this.storeArticle} type="submit"/>
              </div>

      //Remove this line and you can start writing your code here.

    );
  }
}
