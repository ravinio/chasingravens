import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Featured from '../components/Featured/Featured'
import About from '../components/About/About'
import Introduction from '../components/Introduction/Introduction'

const Home = () => {
  return (
    <>
        <Carousel />
        <Introduction />
        <Featured />
    </>
  )
}

export default Home
