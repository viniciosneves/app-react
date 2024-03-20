import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './components/GlobalStyles/index.jsx'
import Container from './components/Container/index.jsx'

import Title from './components/Title'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container>
        <Title>
          Listagem de Cursos
        </Title>
      <App />
    </Container>
  </React.StrictMode>,
)
