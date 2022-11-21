import React, { useState } from "react";
import { MigosSongs } from "../Song/Songs";
import { CommentForm } from "../Comments/Comments";

const Artist = ({ name , genre, desc}) => {

    const [likes, setLike] = useState(false)

    function addLike(e) {
        if (!likes) {
            e.target.textContent = "Liked"
            setLike(true)
        } else {
            e.target.textContent = "Like!"
            setLike(false)
        }

    }

    return (
        <div>
        <h1>{name}</h1>
        <h2>{genre}</h2>
        <button onClick={(e) => {addLike(e)}} value={likes}>Like!</button>
        <p>{desc}</p>
        <MigosSongs/>
        <CommentForm />
        </div>
    )
}

// const Wizkid = () => {
//     return (
//         <div>
//             <h1>Wizkid</h1>
//             <h2>Afrobeats</h2>
//             <button>Like!</button>
//             <p>Ayodeji Ibrahim Balogun, known professionally as Wizkid, is a Nigerian singer and songwriter. A prominent figure in the modern day Afrobeats music scene, Wizkid is regarded as one of the biggest and most influential African artists of all time.</p>
//             <WizkidSongs />
//         </div>
//     )
// }

export default Artist