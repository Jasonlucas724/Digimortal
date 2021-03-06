/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import injectTapEventPlugin from 'react-tap-event-plugin';


import {Link} from 'react-router';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Products from 'containers/Products';
import RefundCalculator from 'containers/RefundCalculator';
import About from 'containers/About';
import Support from 'containers/Support';




export default class Home extends React.PureComponent {
  render() {

    /*End Footer*/


    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>



        <Header/>
        <Main/>
        <Footer/>

      </div>




    );
  }
}
