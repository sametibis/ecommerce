import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homepage} exact />
          <Route path='/product/:id' component={ProductDetail} exact />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
