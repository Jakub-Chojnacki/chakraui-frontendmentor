import { Flex,Image,HStack,Link } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex borderBottom={{md:'1px'}} borderColor={{md:'neutral.light'}}  py={[2,4,8]}  align="center" justify="space-between">
      <Flex align="center" gap={4}>
        <Image display={{md: 'none'}} src="./images/icons/icon-menu.svg"/>
        <Image src="./images/logo.svg"/>
        <Flex align="center" display={{sm: 'none', md:'flex'}} gap={6} marginX={10}>
          <Link variant="nav">Collections</Link>
          <Link variant="nav">Men</Link>
          <Link variant="nav">Women</Link>
          <Link variant="nav">About</Link>
          <Link variant="nav">Contact</Link>
        </Flex>
      </Flex>
    
      <Flex align="center" gap={4}>
        <Image src="./images/icons/icon-cart.svg"/>
        <Image src="./images/image-avatar.png"  boxSize='30px'/>
      </Flex>
    </Flex>
  )
}

export default Header