import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom';

const styles = {
  global:(props) => ({
    body:{
      color:mode('gray.1000', 'whiteAlpha.900')(props),
      bg:mode('gray.10', '#101010')(props),
    }
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: "true",
}

const colors = {
  gray: {
    light: "#161616",
    dark:"#1e1e1e",
  },
};

const theme = extendTheme({config , styles , colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>    
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
)
