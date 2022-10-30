import React, {useContext} from 'react';
import {Box, Flex, Icon, Image, Badge } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'
import {MdMenu, MdShoppingBasket} from  "react-icons/md";
const NavBar = () => {
    const {openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Flex backgroundColor="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
     <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30} onClick={()=>openMenu()} />
     {/* <Link exact to="/" ><Image src="https://cdn.shopify.com/s/files/1/0248/3932/3734/files/BBF_Logo_JPEG_2000x.jpg?v=1613743548" backgroundColor="#FFA8E2" w={100} h={100}/></Link> */}
     <Box>
     <Icon fill="white" cursor="pointer" as={MdShoppingBasket} w={30} h={30}
     onClick={()=>openCart()} />
     <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout.lineItems?.length}</Badge>
     </Box>
    </Flex>
  )
}

export default NavBar
