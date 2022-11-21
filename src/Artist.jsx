import React from "react";
const { MigosSongs, WizkidSongs } = require('./Songs')

const Migos = () => {
    return (
        <div>
        <h1>Migos</h1>
        <h2>Hip-hop</h2>
        <p>Migos is an American hip hop group from Lawrenceville, Georgia, founded in 2008. The group was originally composed of Southern rappers Quavo, Takeoff, and Offset. Quavo is from Athens, Georgia; Offset and Takeoff are from Lawrenceville, Georgia.</p>
        <MigosSongs />
        </div>
    )
}

const Wizkid = () => {
    return (
        <div>
            <h1>Wizkid</h1>
            <h2>Afrobeats</h2>
            <p>Ayodeji Ibrahim Balogun, known professionally as Wizkid, is a Nigerian singer and songwriter. A prominent figure in the modern day Afrobeats music scene, Wizkid is regarded as one of the biggest and most influential African artists of all time.</p>
            <WizkidSongs />
        </div>
    )
}

const Artist = () => {
    return (
        <>
        <Migos />
        <Wizkid />
        </>
    )
}

export default Artist