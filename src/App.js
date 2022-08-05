import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const App = () => {

  const [locationName, setLocationName] = useState("")
  const [searchedLocation, setSearchedLocation] = useState("")
  const [cityArray, setCityArray] = useState([]);

  var locationAPI = ["https://api.openweathermap.org/data/2.5/weather?q=" + searchedLocation +"&appid=489ec2c665aaa26c4f89caee27f9a6f6&units=metric"]

  const handleDelete = (id) =>{
    setCityArray(prevNotes => {
      return prevNotes.filter((Card, index) => {
        return index !== id;
      });
    });
  }

  const handleInput=(event)=>{
      setLocationName(event.target.value);
  };

  const handleClick=()=>{
    setSearchedLocation(locationName); 
  };

  useEffect(()=>{
    searchedLocation !== "" ?
    fetch(locationAPI)
            .then((response) => response.json())
            .then((data) =>{
            return(
              setCityArray(prevValue => {return(
                data.name !== undefined ? 
                [...prevValue,
                 {city:data.name,
                  temp:data.main.temp,
                  descr:data.weather[0].description,
                  img:data.weather[0].icon,
                }
                ]
                :
                [...prevValue]
                )})  
              )})
              :
              setSearchedLocation("Warsaw")
  },[searchedLocation])

  return (
    <div className="App w-screen min-h-screen bg-gradient-to-tr from-[#B983FF] to-[#99FEFF]">
      <div className='text-center'>
        <h1 className='text-6xl pb-10 pt-10'>Weather API App</h1>
        <TextField id="outlined-basic" className=' w-96' onChange={handleInput} label="Type a city" variant="outlined" />
        <p className='m-8'>
          <Button onClick={handleClick} className=" w-36" variant="contained">Add city</Button>
        </p>
      </div>
      <div className='flex flex-wrap m-auto w-3/4'>
      {cityArray.map((cityArray, index) =>{
              return(
                <Card
                  id={index}
                  key={index}
                  city = {cityArray.city} 
                  temp = {Math.round(cityArray.temp)}
                  descr = {cityArray.descr}
                  img = {"http://openweathermap.org/img/wn/" + cityArray.img + "@2x.png"}
                  onDelete = {handleDelete}
                />
              )
            }
          )
        }
      </div>
    </div>
  );
  }

export default App;
