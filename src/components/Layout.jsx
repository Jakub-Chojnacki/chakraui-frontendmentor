import React,{useContext} from 'react'
import Header from './Header'
import {Container} from '@chakra-ui/react'
import Sidenav from './Sidenav'
import MainContext from '../context/main-context'
import SingleProduct from './products/SingleProduct'
const Layout = () => {
  const {showSideNav} = useContext(MainContext)
  return (
    <Container maxW={{sm:'100vw', md:'90vw'}} pBottom={6}>
      <Header/>
      {showSideNav && <Sidenav/>}
      <SingleProduct/>
    </Container>
  )
}

export default Layout