import React,{useContext} from 'react'
import {VStack,Image,Link,Modal,ModalOverlay} from '@chakra-ui/react'
import MainContext from '../context/main-context'
const Sidenav = () => {
  const {showSideNav,setShowSideNav} = useContext(MainContext)
  return (
    <VStack  zIndex='2' padding={8} backgroundColor='white' align="left" pos='absolute' left="0" top="0" h="100vh" w="250px" display={{md:"none"}}>
       <Image cursor="pointer" onClick={()=> setShowSideNav(false)} boxSize="15px" src="./images/icons/icon-close.svg" marginBottom={10}/>
       <VStack align="left" gap={3}>
          <Link variant="sidenav">Collections</Link>
          <Link variant="sidenav">Men</Link>
          <Link variant="sidenav">Women</Link>
          <Link variant="sidenav">About</Link>
          <Link variant="sidenav">Contact</Link>
        </VStack>
        <Modal isOpen={showSideNav} >
          <ModalOverlay display={{md:"none"}} zIndex='1' onClick={()=> setShowSideNav(false)}/>
        </Modal>
    </VStack>
  )
}

export default Sidenav