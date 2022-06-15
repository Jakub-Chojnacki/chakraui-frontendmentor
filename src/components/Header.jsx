import { Flex,Image,Link } from '@chakra-ui/react'
import React,{useContext} from 'react'
import MainContext from '../context/main-context'

const Header = () => {
  const {setShowSideNav} = useContext(MainContext)
  return (
    <Flex borderBottom={{md:'1px'}} borderColor={{md:'neutral.light'}}  py={[2,4,8]}  align="center" justify="space-between">
      <Flex align="center" gap={4}>
        <Image onClick={()=> setShowSideNav(true)} cursor="pointer" display={{md:'none'}} src="./images/icons/icon-menu.svg"/>
        <Image src="./images/logo.svg"/>
        <Flex align="center" display={['none','none','flex']}  gap={6} marginX={10}>
          <Link variant="nav">Collections</Link>
          <Link variant="nav">Men</Link>
          <Link variant="nav">Women</Link>
          <Link variant="nav">About</Link>
          <Link variant="nav">Contact</Link>
        </Flex>
      </Flex>
    
      <Flex align="center" gap={['2', '4', '8']}>
        <Image src="./images/icons/icon-cart.svg" boxSize={['15px','20px']}/>
        <Image src="./images/image-avatar.png"  boxSize={['30px', '35px', '40px']}/>
      </Flex>
    </Flex>
  )
}

export default Header