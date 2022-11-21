import React from "react";
import OpenItUp from "../../../public/OpenItUp.png"
import Mood from "../../../public/Mood.jpg" 

export const MigosSongs = () => {
    return (
        <>
        <h2>Popular Songs:</h2>
        <ul>
            <li>
                <p>Open It Up</p>
                <p>2018</p>
                <img src={OpenItUp} alt="Open It Up cover art" width='500px' />
            </li>
        </ul>
       
        </>
    )
}

export const WizkidSongs = () => {
    return (
        <>  
        <h2>Popular Songs:</h2>
        <ul>
            <li>
                <p>Mood</p>
                <p>2020</p>
                <img src={Mood} alt="Open It Up cover art" width='500px' />
            </li>
        </ul>
        </>
    )
}
