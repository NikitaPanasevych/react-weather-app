import { useState, useEffect } from "react";

const Card = (props) => {
    

    return(
        <div className="w-60 h-60 text-center pt-5 text-2xl ml-10 mb-10 rounded-3xl border-4 bg-[#A2B5BB] justify-center">
            <h1 className="">{props.city}</h1>
            <h2 className="relative font-semibold">{props.temp}°C</h2>
            <img className="h-28 w-28 m-auto relative bottom-4" src={props.img} />
            <h2 className="relative w-3/4 left-7 bottom-8">{props.descr}</h2>
        </div>
    )
}

export default Card;
