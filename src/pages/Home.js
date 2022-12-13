import React from "react"
import Carousel from "../components/Carousel/Carousel"
import Featured from "../components/Featured/Featured"
import Introduction from "../components/Introduction/Introduction"

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
