import React from 'react'
import Header from 'components/Header/index'
import Footer from 'components/Footer/index'
import Container from '@material-ui/core/Container'

const Layout = ({ children, onSearch }) => (
  <Container>
    <Header onSearch={onSearch} />
    <div style={{ minHeight: '70vh' }}>{children}</div>
    <Footer />
  </Container>
)

export default Layout
