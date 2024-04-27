import { Box, Text } from '@chakra-ui/react';
import './App.css';
import Weather from './components/weather';
import { useEffect, useState } from 'react';
import axios from 'axios';

const getData=async (query)=>{ 
  try {
    let data=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=e2d606b5403f40c685d165141242604&q=${query}&days=1&aqi=no&alerts=no`)
    return data.data
  } catch (error) {
    return error
  }
}

function App() {
  let [currentData,setCurrentData] =useState(null)
  let [location,setLocation]=useState('kolkata')

  useEffect(()=>{
    setCurrentData(null)
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
      .catch(()=>{
        setCurrentData('error')
      })
  },[location])
  console.log(currentData)

  return (
    <>      {
        currentData!==null && currentData !=='error' ? 
        <Box className="main_container">

              <Weather setLocation={setLocation} currentData={currentData}/>
              </Box>

        : 
        <Text display={currentData==='error' && 'none'} textAlign={'center'} color={'red'}>Loading...please Wait</Text>
      }
      {
        currentData==='error' && 
        <Text textAlign={'center'}
        onClick={()=>{
          setLocation('Kolkata')
        }}
        cursor={'pointer'}
        color={'red'}>Something went wrong...Back to home</Text>

      }
</>

  );
}

export default App;
