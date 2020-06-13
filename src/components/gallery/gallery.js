import React, { Fragment } from 'react';
import Media from 'react-media';
import Lgallery from './fragments/largegallery'
import './gallery.css';

let Gallery =()=>{
    return (
      <div>
        <Media queries={{
          small: "(max-width: 699px)",
          medium: "(min-width: 700px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && 
              <div className="gallery">

              </div>
              }
              {matches.medium && <p>I am medium!</p>}
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