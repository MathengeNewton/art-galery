import React, { Fragment } from 'react';
import Topbar from '../topbar/topbar';
import Media from 'react-media';
import BackgroundImage from '../images/bg.jpg'
import Icons from '../icons/icons'
import './landingpage.css'

let Landingpage =()=>{
    let styles ={
        backgroundImage:`url(${BackgroundImage})`
    }
    return (
      <div>        
        <Media queries={{
          small: "(max-width: 699px)",
          medium: "(min-width: 700px) and (max-width: 999px)",
          large: "(min-width: 1000px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small &&
              <div className="landing-page" style={styles}>
                    <header>
                        <Topbar />
                    </header>
                    <div className="page-small">
                      <div className="iconSection">
                        <Icons />
                      </div>                      
                      <div className="body">
                        Some content
                      </div>
                    </div>                    
              </div>
              }
              {matches.medium && 
              <div className="landing-page" style={styles}>
                    <header>
                        <Topbar />
                    </header>
                    <div className="page-medium">
                      <div className="iconSection">
                        <Icons />
                      </div>
                      <div className="body">
                        Some content
                      </div>
                    </div>
              </div>
              }
              {matches.large && 
              <div className="landing-page" style={styles}>
                    <header>
                        <Topbar />
                    </header>
                    <div className="page-large">
                      <div className="iconSection">
                        <Icons />
                      </div>
                      <div className="body">
                        Some content
                      </div>
                    </div>
               </div>
              }
            </Fragment>
          )}
        </Media>
      </div>
    )
}
export default Landingpage