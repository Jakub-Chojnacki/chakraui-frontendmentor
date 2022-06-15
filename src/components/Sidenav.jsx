import React from 'react'
import {VStack,Image,Flex,Link} from '@chakra-ui/react'
const Sidenav = () => {
  return (
    <VStack padding={8} backgroundColor='white' align="left" pos='absolute' left="0" top="0" h="95vh" w="250px">
       <Image boxSize="15px" src="./images/icons/icon-close.svg" marginBottom={10}/>
       <VStack align="left" gap={3}>
          <Link variant="sidenav">Collections</Link>
          <Link variant="sidenav">Men</Link>
          <Link variant="sidenav">Women</Link>
          <Link variant="sidenav">About</Link>
          <Link variant="sidenav">Contact</Link>
        </VStack>
    </VStack>
  )
}

export default Sidenav