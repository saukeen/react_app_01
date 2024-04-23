import React from 'react';

function Video() {
    return ( 
        <div style={{
            border:"1px solid red",
            margin:"10px",
            padding:"5px"
        }}>
            <h3>My earth video</h3>
            <iframe width="250" src="https://www.youtube.com/embed/YrUwPR9DSuw?si=QmPlwkWC7_4qjQy6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            
        </div>
     );
}

export default Video;