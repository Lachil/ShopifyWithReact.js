import React, {useContext, useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import {Box, Grid, Image, Text, Button, Heading, Flex, Center} from '@chakra-ui/react'


const ProductPage = () => {
    const {handle} = useParams();
    const {fetchproductsWithHandle, addItemtoCheckout, product}= useContext(ShopContext)
    useEffect(()=>{
        fetchproductsWithHandle(handle)
    },[fetchproductsWithHandle,handle])
    if(!product.title) return <div>...Loading</div>
  return (
    <Box p="2rem">
    <Grid>
      <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)"]} m="auto">
        <Flex justifyContent="center" alignItems="center">
        <Image src={product.images[0].src} />
        </Flex>
        <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
          <Heading pb="2rem">{product.title}</Heading>
          <Text fontWeight="bold" pb="2rem" >{product.variants[0].price.amount}$</Text>
          <Text pb="2rem" color="gray">{product.description}</Text>
          <Button onClick={()=> addItemtoCheckout(product.variants[0].id,1)}  _hover={{ opacity: '70%'}} w="10rem">
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Grid>
    </Box>
  )
}

export default ProductPage
