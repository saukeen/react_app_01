import React, { useState } from 'react';


function AddVideo() {
    let [id, updateId] = useState("")

    //let videourl = "https://www.youtube.com/embed/"+id
    let videourl = `https://www.youtube.com/embed/${id}`

    function captureId(event){
        console.log(event)
        console.log(event.target.value)
        updateId(event.target.value)
    }



    
    return (
        <div>
            <h2>Add new video: {id}</h2>

            Video id:
            <input type="text" onChange={captureId}/>
            <br />
            <button>Add</button>
            <br /><br />
            <iframe width="250" src={videourl} 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>

        </div>
      );
}

export default AddVideo;