import React, { useState, useContext } from "react"
import { Context } from "../../../context/Context"
import Loader from "../../Loader/Loader"
import { Flex, Box, IconButton } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import BlogPage from "../../BlogPage/BlogPage"

const Post = (props) => {
    // Open and Close Menu
    const [display, changeDisplay] = useState("none")

    const { isBlogLoading } = useContext(Context)

    if (isBlogLoading) {
      return <Loader />
    }

    const { 
      postTitle, 
      postLocationImg, 
      postFoodImg, 
      postDate, 
      postLocation, 
      postAtmosphere, 
      postFood, 
      postService, 
      postValue, 
      postOverall, 
      postSink 
    } = props
  
    return (
      <>
        <Flex 
          className="postSquare" 
          style={{ 
            backgroundImage: `url(${postLocationImg})`
          }} 
          flexDirection="column" 
          justifyContent="end" 
          h={{ base: "25vh", sm: "35vh", md: "45vh" }}
        >
          <Flex 
            className="squareContent" 
            h="100%" 
            flexDirection="column" 
            justifyContent="end" 
            alignItems="center" 
            p={5}
          >
            <h3>{postTitle}</h3>
            <div className="btnDisplay">
                <Box 
                  className="whitebtn" 
                  onClick={() => changeDisplay("flex")} 
                  cursor="pointer"
                >
                  Read Now
                </Box>
            </div>
          </Flex>
        </Flex> 

        <Flex 
          display={display} 
          w="100vw" 
          h="100vh" 
          bgColor="rgba(18,18,26,0.8)" 
          zIndex={1000} 
          pos="fixed" 
          top="50" 
          right="0" 
          overflowY="auto" 
          px={{ base: "10px", sm: "40px", md: "50px", lg: "100px" }} 
          py={{ base: "10px", sm: "40px", md: "50px", lg: "100px" }}
        >
          <Flex className="blogExpandedContainer">
            <IconButton 
                size="lg"
                icon={ <ArrowBackIcon />}
                variant="ghost"
                position="fixed"
                color="rgb(26, 18, 26)"
                onClick={() => changeDisplay("none")}
            />
            <BlogPage 
              postTitle={postTitle} 
              postLocationImg={postLocationImg} 
              postLocation={postLocation} 
              postFood={postFood} 
              postService={postService} 
              postValue={postValue} 
              postOverall={postOverall} 
              postSink={postSink} 
              postAtmosphere={postAtmosphere} 
              postFoodImg={postFoodImg} 
              postDate={postDate} 
            />           
          </Flex>
        </Flex>
      </>
  )
}

export default Post