import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import { CloseIcon } from '@chakra-ui/icons'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Image,
    Flex,
    Text,
    Link,
    Box
} from '@chakra-ui/react'
const Cart = () => {
    const { isCartOpen, colseCart, checkout, removeLineItem } = useContext(ShopContext)
    console.log(checkout)
    return (
        <Drawer
            isOpen={isCartOpen}
            placement='right'
            onClose={colseCart}
            size="sm"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Your Shopping Cart</DrawerHeader>

                <DrawerBody>
                    {
                        checkout.lineItems?.length ? checkout.lineItems.map(item => (
                            <Grid templateColumns="repeat(4,1fr)" gep={1} key={item.id}>
                                <Flex alignItems="center" justifyContent="center">
                                    <CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)} />
                                </Flex>
                                <Flex alignItems="center" justifyContent="center">
                                    <Image src={item.variant.image.src} />
                                </Flex>
                                <Flex alignItems="center" justifyContent="center">
                                    <Text>
                                        {item.title}
                                    </Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="center">
                                    <Text>
                                        {item.variant.price.amount} $
                                    </Text>
                                </Flex>
                            </Grid>
                        )) : 
                        <Box h="100%" w="100%">
                            <Text h="100%" display="flex" alignItems="center" justifyContent="center">
                                Your Cart is empty
                            </Text>
                        </Box>
                    }
                </DrawerBody>
                { checkout.lineItems?.length ?
                    <DrawerFooter>
                        <Button w="100%"><Link
                            w="100%"
                            href={checkout.webUrl}
                        >Checkout</Link></Button>
                    </DrawerFooter> : null
                }
            </DrawerContent>
        </Drawer>
    )
}

export default Cart
