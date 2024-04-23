import React from 'react';
import Logo from '../app/logo';
import VideoContainer from '../app/videocontainer';

function MyRootComponent() {
    return (
        <div>
          <div style={{color:"red"}}>
          <Logo></Logo> 
          </div>
        
        <VideoContainer></VideoContainer>
        </div>
      );
}

export default MyRootComponent;