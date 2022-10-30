import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import Hero from '../components/Hero';
import Bathheding from "./../Image/hands-holdin.jpg"
import ImageWithText from '../components/ImageWithText';
import bathbombandcandle from './../Image/bath-bomb-and-candle.jpg'
import RichText from '../components/RichText';
const Home = () => {
    const { fetchAllproducts, products } = useContext(ShopContext)
    useEffect(() => {
        fetchAllproducts()
    }, [fetchAllproducts])
    if (!products) return <div>Loading...</div>
   
    return (
        <Box>
            <Hero />
            <RichText 
            heading="The relaxation you've been waiting for."
            text="Our Bath bombs guarantee a fun, relaxing, and colorful night"
            />
            <Grid templateColumns="repeat(3,1fr)">
                {
                    products.map(product => (
                       
                        <Link to={`/products/${product.handle}`} key={product.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                                <Image src={product.images[0].src} />
                                <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                                    {product.title}
                                </Text>
                                <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                                    ${product.variants[0].price.amount}
                                </Text>
                            </Box>
                        </Link>
                       
                ))
            }
            </Grid>
            <RichText 
            heading="Treat yourself"
            />
            <ImageWithText 
            reverse
            image={Bathheding} 
            heading="Heading"
            text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mistape tumeric unicorn narwhal.
            Iceland Shoreditch authentic, sartorial vegan twee flannel banh mi buswick"
             />
              <ImageWithText 
            image={bathbombandcandle} 
            heading="Second Heading"
            text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mistape tumeric unicorn narwhal.
            Iceland Shoreditch authentic, sartorial vegan twee flannel banh mi buswick"
             />
        </Box>
    )
}

export default Home
