import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    orange: 'hsl(26, 100%, 55%)',
    pale: 'hsl(25, 100%, 94%)',
  },
  neutral: {
    very:'hsl(220, 13%, 13%)',
    dark: 'hsl(219, 9%, 45%)',
    grayish:'hsl(220, 14%, 75%)',
    light:'hsl(223, 64%, 98%)',
    white: 'hsl(0,0%,100%)',
  }
}

const fonts = {
  body: `'Kumbh Sans', sans-serif;`,

}

const theme = extendTheme({ colors,fonts })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
