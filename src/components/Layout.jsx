import React,{useContext} from 'react'
import Header from './Header'
import {Container} from '@chakra-ui/react'
import Sidenav from './Sidenav'
import MainContext from '../context/main-context'

const Layout = () => {
  const {showSideNav} = useContext(MainContext)
  return (
    <Container maxW={{sm:'100vw', md:'90vw', lg:'80vw'}}>
      <Header/>
      {showSideNav && <Sidenav/>}
    </Container>
  )
}

export default Layout