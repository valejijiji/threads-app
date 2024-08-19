import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Opcional, si tienes estilos

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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <ChakraProvider theme={theme}>    
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>
  </BrowserRouter>
);
