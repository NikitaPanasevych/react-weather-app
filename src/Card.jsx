const Card = (props) => {
    
    return(
        <div className="w-96 h-96 m-auto text-center pt-8 text-4xl rounded-3xl border-4 bg-[#A2B5BB] justify-center">
            <h1 className="">{props.city}</h1>
            <h2 className="relative font-semibold top-3">{props.temp}°C</h2>
            <img className="h-48 w-48 m-auto relative bottom-4" src={props.img} />
            <h2 className="relative w-3/4 m-auto bottom-8">{props.descr}</h2>
        </div>
    )
}

export default Card;
