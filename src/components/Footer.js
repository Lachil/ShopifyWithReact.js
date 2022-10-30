import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Box, Text, Image, VStack} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box background="#FFA8E2">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} color="white" fontWeight="bold">
      <VStack p="2rem">
                    <Link to="/">About Us</Link>
                    <Link to="/">Learn More</Link>
                    <Link to="/">Sustainability</Link>
                </VStack>
                <VStack p="2rem">
                    <Link to="/">About Us</Link>
                    <Link to="/">Learn More</Link>
                    <Link to="/">Sustainability</Link>
                </VStack>
      </Grid>
    </Box>
  )
}

export default Footer
