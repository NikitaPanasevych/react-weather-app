import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';

const App = () => {

  const [weatherData, setWeatherData] = useState({
    city:"",
    temp:"",
    descr:"",
    img:"",
    searchedLocation:"Warsaw",
    locationName:""
  });

  var locationAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherData.searchedLocation +"&appid=79e315101cd57eb176df522028f171bc&units=metric"

  const handleInput=(event)=>{
      setWeatherData({locationName: event.target.value});
  };

  const handleClick=()=>{
    setWeatherData({searchedLocation: weatherData.locationName});
  };

  useEffect(()=>{
        fetch(locationAPI)
            .then((response) => response.json())
            .then((data) =>{
            return(
              setWeatherData({
                city:data.name,
                temp:data.main.temp,
                descr:data.weather[0].description,
                img:data.weather[0].icon
              })
              )});
        });

  var imageURL =  "http://openweathermap.org/img/wn/" + weatherData.img + "@2x.png";

  return (
    <div className="App w-screen">
      <div className='text-center'>
        <h1 className='text-6xl pb-10 pt-10'>Weather API App</h1>
        <input onChange={handleInput} placeholder="Type a city" className='text-2xl h-10 w-1/4 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
        <p><button onClick={handleClick} type='submit' className='mt-4 mb-10 h-14 w-1/12 ease-in-out duration-300 hover:bg-[#D61C4E]  bg-[#7D9D9C] rounded-full'>Add city</button></p>
      </div>
      <div className='flex flex-wrap m-auto w-3/4 mt-10'>
        <Card
        city = {weatherData.city}
        temp = {Math.round(weatherData.temp)}
        descr = {weatherData.descr}
        img ={imageURL}
         />
         
      </div>
    </div>
  );
  }

export default App;
