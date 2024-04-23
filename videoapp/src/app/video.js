import React from 'react';

function Video() {
    return ( 
        <div>
            <h3>My earth video</h3>
            <video src="https://file-examples.com/storage/fee868065066261f19c04c3/2017/04/file_example_MP4_480_1_5MG.mp4" controls width={200}>
            </video>
        </div>
     );
}

export default Video;