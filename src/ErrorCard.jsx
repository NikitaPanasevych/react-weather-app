const ErrorCard = (props) => {
    
    return(
        <div className="w-96 h-96 m-auto text-center pt-8 text-4xl rounded-3xl border-4 bg-[#A2B5BB] justify-center">
            <h1 className="o h-auto">No such city as {props.notCity}</h1>
            <img className="w-48 h-48 m-auto" src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" alt="sad" />
        </div>
    )
}

export default ErrorCard;
