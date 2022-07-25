import { useState, useEffect } from "react";

const Card = (props) => {
    

    return(
        <div className="w-60 h-60 text-center pt-5 text-2xl ml-10 mb-10 rounded-3xl border-4 bg-[#A2B5BB] justify-center">
            <h1>{props.city}</h1>
            <h2>{props.temp}°C</h2>
            <img className="h-28 w-28 m-auto" src={props.img} />
            <h2>{props.descr}</h2>
        </div>
    )
}

export default Card;
