import React from 'react';
import Logo from '../app/logo';
import VideoContainer from '../app/videocontainer';

function MyRootComponent() {
    return (
        <div>
        <h1>Root component</h1>       
        <Logo></Logo> 
        <VideoContainer></VideoContainer>
        </div>
      );
}

export default MyRootComponent;