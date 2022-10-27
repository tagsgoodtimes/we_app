import React from 'react'
import {UilTemperature, UilTear, UilWind, UilWindsock, UilClockEight, UilLocationPoint, UilWindSun} from "@iconscout/react-unicons";

function ShowTemp({text}) {
    return (
        <div>
            <div>
                <div className='flex items-center justify-center py-6 text-xl text-white'>
                    <p>{text.con}</p>
                </div>
                <div className='flex flex-row items-center justify-between text-white py-3'>
                    {/* <img src='' alt='currentWeatherType' className='w-20'/> */}
                    <p className='text-5xl'>{text.temp}&deg;C</p>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex font-light text-sm items-center justify-center'>
                            <UilTemperature size={18} className='mr-1' />
                            Real fell:
                            <span className='font-medium ml-1'>{text.feelslike}&deg;C</span>
                        </div>
                        <div className='flex font-light text-sm items-center justify-center'>
                            <UilTear size={18} className='mr-1' />
                            Humidity:
                            <span className='font-medium ml-1'>{text.hum}%</span>
                        </div>
                        <div className='flex font-light text-sm items-center justify-center'>
                            <UilWind size={18} className='mr-1' />
                            Wind Speed:
                            <span className='font-medium ml-1'>{text.speed}km/h</span>
                        </div>


                    </div>
                </div>
                <div className='flex flex-row items-center space-x-2 text-white text-sm py-3'>
                                       
                    <UilWindsock />
                    <p className='font-light'><span className='font-medium ml-1'>{text.dir}</span></p>
                    <p className='font-light'>|</p>
                    <UilClockEight />
                    <p className='font-light'><span className='font-medium ml-1'>{text.localtime}</span></p>
                    <p className='font-light'>|</p>
                    <UilLocationPoint />
                    <p className='font-light'><span className='font-medium ml-1'>{text.name}</span></p>
                    <p className='font-light'>|</p>
                    <UilWindSun />
                    <p className='font-light'><span className='font-medium ml-1'>{text.des}</span></p>
                </div>
            </div>
            
        </div>
    )
}

export default ShowTemp;
