import { Box, Button, Divider, Flex, Heading, Image, Input, Text, chakra } from '@chakra-ui/react'
import React, { useState } from 'react'
import cloudy from './assets/cloudy_1163661.png'
import { format } from 'date-fns';

export default function Weather({setLocation,currentData}) {
    const [search,setSearch]=useState("")

// to convert the date format 
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'EEEE dd MMMM');
      }

    //   function to convert time 
    const convertToAmPmTime = (timeString) => {
        const date = new Date(timeString);
        return format(date, 'h a');
      }

    //   function to handel search click 
    const handelClick=()=>{
        if(search==="" || search===null)
        return 
        setLocation(search)
        setSearch("")
    }
    return (
        <>
        {/* location details  */}
            <Box className='location_date' color={'white'} w={['100%','50%','50%'] } h={'100px'}>
                <Heading>{`${currentData.name},${currentData.country}`}</Heading>
                <Text>{formatDate(currentData.date)}</Text>
            </Box>
            {/* search box  */}
            <Box className='search' display={'flex'} alignItems={'top'} w={['100%','50%','50%']} gap={5} h={'100px'}>
                <Input
                onChange={(e)=>{
                    setSearch(e.target.value)
                }}
                value={search}
                borderRadius={50} bg={'white'} placeholder='Enter a location...' p={5} />
                <Button 
                onClick={handelClick}
                colorScheme='white' bg={'blue.600'} borderRadius={50} border={'1px solid gray'} >Search</Button>
            </Box>
            {/* current temp. details  */}
            <Box className="current-temperature"
                h={'200px'}
                borderRight={'1px solid white'}
                p={'2%'} display={'flex'} alignItems={'center'} gap={5} w={'30%'} >
                <Image src={currentData.icon} w={'100px'} h={'100px'} />
                <div>
                    <Flex align="center" justify="center" flexDirection="row">
                        <Text fontSize="70px" color="white">{currentData.currenttemp}</Text>
                        <Text fontSize="70px" color="white">&deg;</Text>
                    </Flex>
                    <Text color={'white'}>{currentData.text}</Text>
                </div>
            </Box>  
            {/* <Box h={'200px'} w={'0.11%'} bg={'white'} ></Box> */}
            {/* current temp. state */}
            <Box h={'200px'} display={'flex'} justifyContent={'space-between'} w={'30%'} className='current_stats' p={'2%'} >
                <div>
                    <Flex mb={5} flexDir={'column'} alignItems={'center'}>
                        <Flex align="center" justify="center" flexDirection="row">
                            <Text fontSize={'xx-large'} color="white">{currentData.temp_high}</Text>
                            <Text color="white">&deg;</Text>
                        </Flex>
                        <Text color={'GrayText'}>High</Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Flex align="center" justify="center" flexDirection="row">
                            <Text fontSize={'xx-large'} color="white">{currentData.temp_low}</Text>
                            <Text color="white">&deg;</Text>
                        </Flex>
                        <Text color={'GrayText'}>Low</Text>
                    </Flex>
                </div>
                <div>
                    <Flex mb={5} flexDir={'column'} alignItems={'center'}>
                        <Text color={'white'} fontSize={'xx-large'}>{currentData.wind}</Text>
                        <Text color={'GrayText'}>Wind</Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Text color={'white'} fontSize={'xx-large'}>{currentData.rain}%</Text>
                        <Text color={'GrayText'}>Rain</Text>
                    </Flex>
                </div>
                <div>
                    <Flex mb={5} flexDir={'column'} alignItems={'center'}>
                        <Text color={'white'} fontSize={'xx-large'}>{currentData.sunrise}</Text>
                        <Text color={'GrayText'}>Sunrise</Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Text color={'white'} fontSize={'xx-large'}>{currentData.sunset}</Text>
                        <Text color={'GrayText'}>Sunset</Text>
                    </Flex>
                </div>

            </Box>

            {/* full day weather details  */}
            <Box w={'100%'} mt={20} mb={20} id='todays_weather'>
                <Text color={'white'} mb={3}>Todays weather</Text>
                <Box display={'flex'} gap={2} rowGap={2}  justifyContent={'space-between'} className='todays_weather'>
                    {
                        currentData.hour.map((el,ind)=>{
                            return ind%3===0 &&ind!=0 &&  (<chakra.div display='flex'
                            flexDir={ ['row','column','column']}
                            color={'white'}
                             w={['100%','13%','13%'] }
                            bg={'blue.600'}
                            borderRadius={5}
                            p={5}
                            justifyContent={'space-between'}
                            gap={2}
                            alignItems={'center'}>
                                <Text>{convertToAmPmTime(currentData.hour[ind].time)}</Text>
                                <Image src={currentData.hour[ind].condition.icon} w={'100px'}/>
                                <Text>{currentData.hour[ind].temp_c}&deg;</Text>
                            </chakra.div> )
                        })
                    }
                   
                </Box>
            </Box>
        </>
    )
}
{/* <chakra.div display='flex'
flexDir={'column'}
color={'white'}
 w={'13%'}
bg={'blue.600'}
borderRadius={5}
p={5}

gap={2}
alignItems={'center'}>
    <Text>3am</Text>
    <Image src={cloudy} w={'50px'}/>
    <Text>14&deg;</Text>
</chakra.div>
<chakra.div display='flex'
flexDir={'column'}
color={'white'}
 w={'13%'}
bg={'blue.600'}
borderRadius={5}
p={5}

gap={2}
alignItems={'center'}>
    <Text>3am</Text>
    <Image src={cloudy} w={'50px'}/>
    <Text>14&deg;</Text>
</chakra.div>
<chakra.div display='flex'
flexDir={'column'}
color={'white'}
 w={'13%'}
bg={'blue.600'}
borderRadius={5}
p={5}

gap={2}
alignItems={'center'}>
    <Text>3am</Text>
    <Image src={cloudy} w={'50px'}/>
    <Text>14&deg;</Text>
</chakra.div>
<chakra.div display='flex'
flexDir={'column'}
color={'white'}
 w={'13%'}
bg={'blue.600'}
borderRadius={5}
p={5}

gap={2}
alignItems={'center'}>
    <Text>3am</Text>
    <Image src={cloudy} w={'50px'} />
    <Text>14&deg;</Text>
</chakra.div>   
<chakra.div display='flex'
flexDir={'column'}
color={'white'}
 w={'13%'}
bg={'blue.600'}
borderRadius={5}
p={5}

gap={2}
alignItems={'center'}>
    <Text>3am</Text>
    <Image src={cloudy} w={'50px'}/>
    <Text>14&deg;</Text>
</chakra.div>
<chakra.div display='flex'
flexDir={'column'}
color={'white'}
 w={'13%'}
bg={'blue.600'}
borderRadius={5}
p={5}

gap={2}
alignItems={'center'}>
    <Text>3am</Text>
    <Image src={cloudy} w={'50px'}/>
    <Text>14&deg;</Text>
</chakra.div>

 */}
