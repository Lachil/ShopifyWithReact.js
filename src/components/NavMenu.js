import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Grid,
    Image,
    Flex,
    Text,
    Box,
    VStack
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
const NavMenu = () => {
    const {isMenuOpen, colseMenu} = useContext(ShopContext)
  return (
    <Drawer isOpen={isMenuOpen} onClose={colseMenu} placement="left" size="sm">
      <DrawerOverlay>
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                Menu
            </DrawerHeader>
            <DrawerBody>
                <VStack p="2rem">
                    <Link to="/">About Us</Link>
                    <Link to="/">Learn More</Link>
                    <Link to="/">Sustainability</Link>
                </VStack>
            </DrawerBody>
            <DrawerFooter textAlign="center">
                <Text w="100%">Copyright Lhabib LAchil</Text>
            </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default NavMenu
