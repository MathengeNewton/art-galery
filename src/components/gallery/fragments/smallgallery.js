import React from 'react';
import './smallgallery.css';

let LongFrame =({src})=>{
  const imgstyle ={
      height: '150px',
      width: '200px',
      margin: '3px'
  }
  let listen=()=>{
      alert('clicked')
  }
  return(
      <div onClick={listen}>
          <img src={src} alt="." class="lazy" style={imgstyle}/>            
      </div>
  )
}

let Sgallery =()=>{
    return(
        <div className="gallery">
                <div className="g-header">
                  <div className="page-links">                    
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
                  <div className="gimages">                 
                  <div className="gbody">
                        <LongFrame src="/gallery/image1.jpg"/>
                        <LongFrame src="/gallery/image1.jpg"/>
                  </div>
                  <div className="gbody">
                      <LongFrame src="/gallery/image.jpg"/>
                      <LongFrame src="/gallery/image.jpg"/>                   
                  </div>
                  <div className="gbody">
                      <LongFrame src="/gallery/image3.png"/>
                      <LongFrame src="/gallery/image3.png"/>
                  </div>
                  <div className="gbody">
                      <LongFrame src="/gallery/image5.jpg"/>
                      <LongFrame src="/gallery/image5.jpg"/>                      
                  </div>
                  <div className="gbody">
                      <LongFrame src="/gallery/image4.png"/>
                      <LongFrame src="/gallery/image4.png"/>                     
                  </div>  
                  </div>            
                </div>
              </div>
    )
}
export default Sgallery