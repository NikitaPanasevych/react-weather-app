import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const Card = (props) => {

    const handleClick = () => {
        props.onDelete(props.id)
    }
    
    return(
        <div className="w-96 h-96 m-auto text-center pt-8 mb-20 text-4xl rounded-3xl bg-[#94B3FD] border-4 border-black">
            <h1 className="">{props.city}</h1>
            <h2 className="relative font-semibold top-3">{props.temp}°C</h2>
            <img className="h-48 w-48 m-auto relative bottom-4" src={props.img} />
            <h2 className="relative w-3/4 m-auto bottom-8">{props.descr}</h2>
            <Button onClick={handleClick} variant="outlined" color="error" className="bottom-6" startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </div>
    )
}

export default Card;
