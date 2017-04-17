/*
 *
 * RefundCalculator
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from 'react-router';
import Carousel from 'react-bootstrap/lib/Carousel';


export default class RefundCalculator extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="RefundCalculator" meta={[ { name: 'description', content: 'Description of RefundCalculator' }]}/>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} src="https://pbs.twimg.com/media/C9D07mhXoAEUezM.jpg"/>
            <Carousel.Caption>
              <h3>first slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} src="http://wrcb.images.worldnow.com/images/9566488_G.jpg"/>
            <Carousel.Caption>
              <h3>Second slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    );
  }
}
