import React, {useState} from 'react';
import './App.css';
import {UilSearch} from "@iconscout/react-unicons";
import axios from 'axios';
import ShowTemp from './ShowTemp';


function App() {
  const [city, setCity] = useState("")
    const [data, setData] = useState({
        con: '',
        name: '',
        temp: 0,
        des: '',
        speed: 0,
        dir: '',
        hum: 0,
        localtime: 0,
        feelslike: 0,

        
    })

    const handleClick = () => {
        
        axios.get(`https://api.weatherstack.com/current?access_key=b675665993898155b94587a9503b1c89&query=${city}`)
            .then((response) => {
                setData({
                    con: response.data.location.country,
                    name: response.data.location.name,
                    temp: response.data.current.temperature,
                    des: response.data.current.weather_descriptions,
                    speed: response.data.current.wind_speed,
                    dir: response.data.current.wind_dir,
                    hum: response.data.current.humidity,
                    localtime: response.data.location.localtime,
                    feelslike: response.data.current.feelslike
                })
            })
    }

    return (
        <>
        <div>
              <h1 className='text-blue-400 container text-center my-2 text-xl'>Weather App</h1>
        </div>
          <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl'>
          <div className='container text-center my-2'>
            
                
                <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                    <input type='text' 
                    placeholder='search for city'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize from-control' 
                    value={city} onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    />
                    <button type='submit' onClick={handleClick}>
                    <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'></UilSearch>
                    </button>
                    </div>
                    <ShowTemp text ={data}></ShowTemp>
            </div>
          </div>
            
        </>
    )
}

export default App;
