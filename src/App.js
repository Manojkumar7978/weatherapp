import { Box } from '@chakra-ui/react';
import './App.css';
import Weather from './components/weather';
import { useEffect, useState } from 'react';
import axios from 'axios';

const getData=async (query)=>{ 
  try {
    let data=await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=e2d606b5403f40c685d165141242604&q=${query}&days=1&aqi=no&alerts=no`)
    console.log(data.data)
    return data.data
  } catch (error) {
    return error
  }
}

function App() {
  let [currentData,setCurrentData] =useState(null)
  let [location,setLocation]=useState('kolkata')

  useEffect(()=>{
      getData(location)
      .then((data)=>{
          setCurrentData({
            ...currentData,
            country:data.location.country,
            name:data.location.name,
            date:data.location.localtime,
            currenttemp:data.current.temp_c,
            condition:data.current.condition.text,
            icon:data.current.condition.icon,
            text:data.current.condition.text,
            wind:data.current.wind_mph,
            rain:data.current.cloud,
            temp_high:data.forecast.forecastday[0].day.maxtemp_c,
            temp_low:data.forecast.forecastday[0].day.mintemp_c,
            sunrise:data.forecast.forecastday[0].astro.sunrise,
            sunset:data.forecast.forecastday[0].astro.sunset,
            hour:[...data.forecast.forecastday[0].hour]

          })
      })
  },[location])
  return (
    <Box className="main_container">
      {
        currentData!==null && 
              <Weather setLocation={setLocation} currentData={currentData}/>

      }
    </Box>
  );
}

export default App;
