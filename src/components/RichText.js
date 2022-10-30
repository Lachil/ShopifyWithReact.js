import React from 'react'
import {Box, heading,Text, center, Center, Heading} from '@chakra-ui/react'

const RichText = ({heading,text}) => {
  return (
    <Box p="1rem">
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading py="2.4rem">
            {heading}
        </Heading>
        <Text>
            {text && text}
        </Text>
      </Center>
    </Box>
  )
}

export default RichText
