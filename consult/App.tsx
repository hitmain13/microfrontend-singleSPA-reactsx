import React from 'react';

import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes'

const App: React.FC = () => {

  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  )
}

export default App