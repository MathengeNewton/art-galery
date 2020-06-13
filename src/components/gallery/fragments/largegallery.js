import React from 'react';
import './largeframe.css';
import Smallframe from '../smallframe';
import Mediumframe from '../mediumframe';

let Lgallery =()=>{
    return(
        <div className="gallery-large">
                <div className="g-header">
                  <div className="page-links">
                    <div className="l-home">
                        <a href="/">Home</a>
                    </div>
                    <div className="l-mag">
                        <a href="/magazine">magazine</a>
                    </div>
                  </div>                  
                  <header>
                    Welcome to our arts gallery
                  </header>
                  <p className="content-description">
                    The art work bellow is from local artists.
                  </p>                  
                </div>
                <div className="pagetitle">
                  <header>
                    SOME AWESOME ART
                  </header>
                </div>
                <div className="g-body">
                  <div className="icns">
                  </div> 
                  <div className="gimages">                 
                  <div className="gbody">
                      <Smallframe src="/gallery/image1.jpg"/>
                      <Mediumframe src="/gallery/image1.jpg"/>
                      <Mediumframe src="/gallery/image1.jpg"/>
                      <Smallframe src="/gallery/image1.jpg"/>
                  </div>
                  <div className="gbody">
                      <Mediumframe src="/gallery/image.jpg"/>
                      <Smallframe src="/gallery/image.jpg"/> 
                      <Smallframe src="/gallery/image.jpg"/>
                      <Mediumframe src="/gallery/image.jpg"/>                    
                  </div>
                  <div className="gbody">
                      <Smallframe src="/gallery/image3.png"/>
                      <Mediumframe src="/gallery/image3.png"/>
                      <Mediumframe src="/gallery/image3.png"/>
                      <Smallframe src="/gallery/image3.png"/>
                  </div>
                  <div className="gbody">
                      <Mediumframe src="/gallery/image5.jpg"/>
                      <Smallframe src="/gallery/image5.jpg"/>
                      <Smallframe src="/gallery/image5.jpg"/>
                      <Mediumframe src="/gallery/image5.jpg"/>                      
                  </div>
                  <div className="gbody">
                      <Smallframe src="/gallery/image4.png"/>
                      <Mediumframe src="/gallery/image4.png"/>
                      <Mediumframe src="/gallery/image4.png"/>
                      <Smallframe src="/gallery/image4.png"/>                      
                  </div>  
                  </div>            
                </div>
              </div>
    )
}
export default Lgallery