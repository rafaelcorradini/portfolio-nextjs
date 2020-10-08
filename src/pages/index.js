import React, { Fragment, useRef, useCallback } from 'react'
import Header from 'components/Header'
import Head from 'components/Head'
import Works from 'components/Works'
import Contact from 'components/Contact'

export default function Home() {
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
  const worksRef = useRef(null)

  const scrollToWorks = useCallback(() => {
    if (worksRef.current) {
      scrollToRef(worksRef)
    }
  }, [worksRef])

  return (
    <Fragment>
      <Head />
      <Header scrollToWorks={scrollToWorks} />
      <Works worksRef={worksRef} />
      <Contact />
    </Fragment>
  )
}
