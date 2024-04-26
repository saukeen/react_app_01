import React, { useEffect, useState } from 'react';
import axios from "axios";

function APIComponent() {

    let [alldata, updateAllData] = useState([])

    function responseReceived(response){
        console.log(response)
        console.log(response.data)
        updateAllData(response.data)
    }
    

    function iWillCallAPI(){
        axios.get("https://amused-bee-clothes.cyclic.app/allstars")
        .then(responseReceived)
    }



    useEffect(iWillCallAPI, [])

    function iWillLoopOnAlldata(dataPoint, loopCounter){
        console.log(`singleDataPoint contains at position ${loopCounter}`)
        console.log(dataPoint)
        return(
            <li>
                {dataPoint.name} from {dataPoint.location}
            </li>
        )
    }

   

    function printAllData(){
        console.log("I will print alldata state")
        return alldata.map(iWillLoopOnAlldata)
        
    }


    return ( 
        <div>
        <h1>Make API call</h1>
        <h2>Activating allstars</h2>
        <h3>Response from the API will be rendered here!</h3>
        <div>
            length of response: {alldata.length}
        </div>
        <ol>
            {printAllData()}
        </ol>
        </div>
     );
}

export default APIComponent;