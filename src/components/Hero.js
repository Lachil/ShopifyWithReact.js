import React from 'react'
import {Box, Button, Image, Text, Center} from '@chakra-ui/react';
import Logo from './../Image/BathPro4.jpg';


const Hero = () => {
  return (
    <Box background="'FFA8E2" w="100%" position="relative" h="70vh">
        <Image src={Logo} background="'FFA8E2" alt="React Logo" h="100%" m="auto" objectFit="contain"
        objectPosition={["top","center"]}
        />
        <Text
        className="tracking-in-expand"
        position="absolute"
        bottom="70%"
        w="100%"
        textAlign="center"
        //color="white"
        fontWeight="bold"
        fontSize="4rem"
        >Introducing Bath Bombs</Text>
        <Center>
            <Button
            w="10rem" backgroundColor="#FF38BD" color="white"
            _hover={{opacity: "70%"}} position="absolute" bottom="65%"
            >
                Shop Now
            </Button>
        </Center>
    </Box>
  )
}

export default Hero
