import React from 'react';

let Mediumframe =({src})=>{
    const imgstyle ={
        height: '150px',
        width: '200px',
        margin: '20px'
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
export default Mediumframe