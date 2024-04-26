import { Box, Button, Divider, Flex, Heading, Image, Input, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import cloudy from './assets/cloudy_1163661.png'

export default function Weather() {
    return (
        <>
            <Box className='location_date' color={'white'} w={'50%'} h={'100px'}>
                <Heading>London, UK</Heading>
                <Text>Monday 29 August</Text>
            </Box>
            <Box className='search' display={'flex'} alignItems={'top'} w={'50%'} gap={5} h={'100px'}>
                <Input borderRadius={50} bg={'white'} placeholder='Enter a location...' p={5} />
                <Button colorScheme='white' bg={'blue.600'} borderRadius={50} border={'1px solid gray'} >Search</Button>
            </Box>
            <Box class="current-temperature"
                h={'200px'}
                borderRight={'1px solid white'}
                p={'2%'} display={'flex'} alignItems={'center'} gap={5} w={'30%'} >
                <Image src={cloudy} w={'100px'} h={'100px'} />
                <div>
                    <Flex align="center" justify="center" flexDirection="row">
                        <Text fontSize="70px" color="white">21</Text>
                        <Text fontSize="70px" color="white">&deg;</Text>
                    </Flex>
                    <Text color={'white'}>Mostly Sunny</Text>
                </div>
            </Box>
            {/* <Box h={'200px'} w={'0.11%'} bg={'white'} ></Box> */}
            <Box h={'200px'} display={'flex'} justifyContent={'space-between'} w={'30%'} className='current_stats' p={'2%'} >
                <div>
                    <Flex mb={5} flexDir={'column'} alignItems={'center'}>
                        <Flex align="center" justify="center" flexDirection="row">
                            <Text fontSize={'xx-large'} color="white">21</Text>
                            <Text color="white">&deg;</Text>
                        </Flex>
                        <Text color={'GrayText'}>High</Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Flex align="center" justify="center" flexDirection="row">
                            <Text fontSize={'xx-large'} color="white">21</Text>
                            <Text color="white">&deg;</Text>
                        </Flex>
                        <Text color={'GrayText'}>Low</Text>
                    </Flex>
                </div>
                <div>
                    <Flex mb={5} flexDir={'column'} alignItems={'center'}>
                        <Text color={'white'} fontSize={'xx-large'}>7mph</Text>
                        <Text color={'GrayText'}>Wind</Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Text color={'white'} fontSize={'xx-large'}>0%</Text>
                        <Text color={'GrayText'}>Rain</Text>
                    </Flex>
                </div>
                <div>
                    <Flex mb={5} flexDir={'column'} alignItems={'center'}>
                        <Text color={'white'} fontSize={'xx-large'}>05:27</Text>
                        <Text color={'GrayText'}>Sunrise</Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Text color={'white'} fontSize={'xx-large'}>20:57</Text>
                        <Text color={'GrayText'}>Sunset</Text>
                    </Flex>
                </div>

            </Box>
                <br/>
            <Box w={'100%'} mt={20} mb={20} className='todays_weather'>
                <Text color={'white'} mb={3}>Todays weather</Text>
                <Box display={'flex'} gap={2}  justifyContent={'space-between'}>
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
                </Box>
            </Box>
        </>
    )
}



