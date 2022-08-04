import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';

const App = () => {

  const [locationName, setLocationName] = useState("")
  const [searchedLocation, setSearchedLocation] = useState("")
  const [cityArray, setCityArray] = useState([]);

  var locationAPI = ["https://api.openweathermap.org/data/2.5/weather?q=" + searchedLocation +"&appid=489ec2c665aaa26c4f89caee27f9a6f6&units=metric"]

  const createCard = (cityArray) =>{
    return(
      <Card
        id={cityArray.id}
        city = {cityArray.city} 
        temp = {Math.round(cityArray.temp)}
        descr = {cityArray.descr}
        img = {"http://openweathermap.org/img/wn/" + cityArray.img + "@2x.png"}
       />)
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
                (cityArray.id === data.weather[0].id) ? [...prevValue]
                :
                [...prevValue,
                 {city:data.name,
                  temp:data.main.temp,
                  descr:data.weather[0].description,
                  img:data.weather[0].icon,
                  id:data.weather[0].id
                }
                ]
                )})  
              )})
              :
              setSearchedLocation("Warsaw")
  },[searchedLocation])

  return (
    <div className="App w-screen">
      <div className='text-center'>
        <h1 className='text-6xl pb-10 pt-10'>Weather API App</h1>
        <input onChange={handleInput} placeholder="Type a city" className='text-2xl h-10 w-1/4 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
        <p><button onClick={handleClick} type='submit' className='mt-4 mb-10 h-14 w-1/12 ease-in-out duration-300 hover:bg-[#D61C4E]  bg-[#7D9D9C] rounded-full'>Add city</button></p>
      </div>
      <div className='flex flex-wrap m-auto w-3/4 mt-10'>
      {cityArray.map(createCard)}
      </div>
    </div>
  );
  }

export default App;
