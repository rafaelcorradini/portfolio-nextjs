import React, { Fragment } from 'react'
import Header from 'components/Header'
import Head from 'components/Head'
import Works from 'components/Works'

export default function Home({ works }) {
  return (
    <Fragment>
      <Head />
      <Header />
      <Works />
    </Fragment>
  )
}
