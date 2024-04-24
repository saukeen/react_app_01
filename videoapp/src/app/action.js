import React, { useState } from 'react';

function ActionComponent(props) {

    //declare a stae variable -> dislike
    let [dislike, updateDislike] = useState(parseInt(props.passdislike))
    let [likes, updateLike] = useState(parseInt(props.passlikes) )

    /*function updateDislike(){
        console.log(dislike)
        //only iAmTheAuthority can change the value
        //of state variable -> dislike
       iAmTheAuthority(dislike +5)
       console.log(dislike);
    }*/


    function addLike(){
        console.log(likes)
        console.log(typeof likes)
        updateLike(likes +1)
    }

    function addDislike(){
        console.log(dislike)
        console.log(typeof dislikes)
        updateDislike(dislike +1)
    }

    return ( 
        <div>
            Likes:{likes}
            <button onClick={addLike}>+</button>
            <br />
            Dislike: {dislike}
            <button onClick={addDislike}>+</button>
        </div>
     );
}

export default ActionComponent;