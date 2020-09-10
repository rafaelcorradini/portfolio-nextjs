import React, { Fragment } from 'react'
import Header from 'components/Header'
import Head from 'components/Head'
import Works from 'components/Works'
import Contact from 'components/Contact'

export default function Home() {
  return (
    <Fragment>
      <Head />
      <Header />
      <Works />
      <Contact />
    </Fragment>
  )
}
