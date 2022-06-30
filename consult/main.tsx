import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { ProductProvider } from './contexts/ProductContext'
import dark from './styles/themes/dark'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ThemeProvider>
  </React.StrictMode>
)
