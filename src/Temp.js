//api.openweathermap.org/data/2.5/weather?q=Lahore&appid=5a83116b9985ec1ac070c8a9e5437141


import react ,{useEffect, useState} from 'react';
import "./style.css";
import Weathercard from './weathercard';
const Temp =()=>{
    const [searchValue, setSearchValue] = useState("Lahore");
    const [tempInfo, setTempInfo] =useState({});

    const getWeatherInfo= async ()=>{
       try {
           let url= `https://api.openweathermap.org/data/2.5/weather?q= ${searchValue}&units=metric&appid=5a83116b9985ec1ac070c8a9e5437141`;
           let res= await fetch(url);
           let data = await res.json();
           const {temp,humidity,pressure} = data.main;
           const {main:weathermood} = data.weather[0];
           const {name}= data;
           const {speed}=data.wind;
           const {country, sunset} = data.sys;

           const myNewWeatherInfo= {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
           };
        setTempInfo(myNewWeatherInfo);

       } catch (error) {
           
       }
    };
    useEffect(()=>{
        getWeatherInfo();
    },[]);
    return (
        <>
          <div className="wrap">
              <div className="search">
               <input type="search"
               placeholder="search.."
               value={searchValue}
               onChange={(e)=>(setSearchValue(e.target.value))}
               autoFocus
               id="search"
               className="searchTerm" />
               <button className="searchButton" type="button"
               onClick={getWeatherInfo}
               >Search 
               </button>
            </div>
          </div>
          <Weathercard tempInfo={tempInfo}/>
        </>
    );
};
export default Temp;