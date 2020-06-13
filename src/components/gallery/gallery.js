import React, { Fragment } from 'react';
import Media from 'react-media';
import Lgallery from './fragments/largegallery'
import Sgallery from './fragments/smallgallery'
import './gallery.css';

let Gallery =()=>{
    return (
      <div>
        <Media queries={{
          small: "(max-width: 899px)",
          medium: "(min-width: 900px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && 
              <div>
                <Sgallery />
              </div>
              }
              {matches.medium &&
              <p>I am medium!</p>}
              {matches.large &&
              <div>
                <Lgallery />
              </div>              
              }
            </Fragment>
          )}
        </Media>
      </div>
    );
}
export default Gallery