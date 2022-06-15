import React from 'react'
import Header from './Header'
import {Container} from '@chakra-ui/react'
const Layout = () => {
  return (
    <Container maxW={{sm:'100vw', md:'90vw', lg:'80vw'}}>
        <Header/>
    </Container>
  )
}

export default Layout