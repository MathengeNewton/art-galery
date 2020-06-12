import React, { Fragment } from 'react';
import Media from 'react-media';
import './topbar.css';
import Dropdown from '../dropdown/dropdown'

let Topbar =()=>{
    let lists=[        
        {
            title:'gallery',
            link:'/gallery'
        },
        {
            title:'magazine',
            link:'/magazine'
        },
        {
            title:'contributors',
            link:'/contributors'
        }
    ]
    return(
        <>
            <Media queries={{
          small: "(max-width: 699px)",
          medium: "(min-width: 700px) and (max-width: 999px)",
          large: "(min-width: 1000px)"
        }}>
          {matches => (
            <Fragment>
            {matches.small && 
            <div className="topbar-small">
                <div className="logo-small">
                    <a href='/'><h3>mose</h3></a>
                </div>
                <div className="dropdown">
                    <Dropdown head='Links' lists={lists} />
                </div>
            </div>
            }
              {matches.medium && 
            <div className="topbar-medium">
                <div className="logo-medium">
                    <a href='/'><h3>mose</h3></a>
                </div>
                <div className="dropdown-medium">
                    <Dropdown head='Links' lists={lists} />
                </div>
            </div>
            }
              {matches.large && 
              <div className="navbar">
                  <div className="logo-large">
                  <a href='/'><h3>mose</h3></a>
                  </div>
                  <div className="links">
                      <a href='/gallery'><h3>gallery</h3></a>
                      <a href='/magazine'><h3>magazine</h3></a>
                      <a href='/contributors'><h3>contributors</h3></a>
                  </div>
              </div>
              }
            </Fragment>
          )}
        </Media>            
        </>
    )
}
export default Topbar