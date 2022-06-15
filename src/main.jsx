import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {MainProvider} from './context/main-context'

const colors = {
  primary: {
    orange: 'hsl(26, 100%, 55%)',
    pale: 'hsl(25, 100%, 94%)',
  },
  neutral: {
    very:'hsl(220, 13%, 13%)',
    dark: 'hsl(219, 9%, 45%)',
    grayish:'hsl(220, 14%, 75%)',
    light:'hsl(223, 64%, 95%)',
    white: 'hsl(0,0%,100%)',
  }
}

const fonts = {
  body: `'Kumbh Sans', sans-serif`,

}

const components = {
  Link: {
    variants: {
      nav: {
        color:'neutral.dark',
        opacity: '0.9',
        fontSize: '16px'
      },
      sidenav:{
        fontWeight:'bold'
      }
    }
  }
}


const theme = extendTheme({ colors,fonts,components })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MainProvider>
  </React.StrictMode>
)
