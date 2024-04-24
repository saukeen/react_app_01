import React from 'react';
import Video from './video';

function VideoContainer() {
    return ( 
        <div style={{
            border:"1px solid blue",
            display:"flex",
            flexDirection:"column",
            marginTop:"10px"
        }}>
            <div style={{
                padding:"10px"
            }}>
                List of video:
            </div>
            <div style={{
                display:"flex",
                flexWrap:"wrap"
            }}>
                <Video myid="WX2e3IuV9Zs" likes="40" dislike="10"></Video>
                <Video myid="ZuVkygkSkpk" likes="31" dislike="1"></Video>
                <Video myid="BTD2cwvnhZU" likes="21" dislike="5"></Video>
                <Video myid="JFFq8xgBQZI" likes="10" dislike="2"></Video>
                <Video myid="M0lUdywLMQs" likes="5" dislike="8"></Video>
                <Video myid="n0UXA7oLc-s" likes="2" dislike="6"></Video>
                <Video myid="topBLaz4zgk" likes="1" dislike="3"></Video>

            </div>
            
        </div>
     );
}

export default VideoContainer;