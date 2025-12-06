import React, { useState, useContext, useEffect } from "react"
import { Context } from "../../context/Context"
import Loader from "../Loader/Loader"
import { Flex, Spacer, Box, IconButton } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { CalendarIcon } from "@chakra-ui/icons"
import renderSinks from "../Sinks/SinkRating"
import BlogPage from "../BlogPage/BlogPage"
import { useNavigate, useParams } from "react-router-dom"

const Post = (props) => {
    // Open and Close Menu
    const [display, changeDisplay] = useState("none")

    const navigate = useNavigate()
    const params = useParams()

    const { isBlogLoading } = useContext(Context)

    const { postTitle, postLocationImg, postFoodImg, postDate, postLocation, postAtmosphere, postFood, postService, postValue, postOverall, postSink } = props

    const blogSlug = postTitle ? postTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : 'blog-post'
    const blogPath = `/blogs/${blogSlug}`

    const openModal = () => {
       changeDisplay("flex")
       navigate(blogPath, { replace: false })
    }

    const closeModal = () => {
      changeDisplay("none")
      navigate('/blogs', { replace: true })
    }

    useEffect(() => {
      if (params.blogSlug === blogSlug) {
          changeDisplay("flex")
      } else {
          changeDisplay("none")
      }
    }, [params.blogSlug, blogSlug])

    if (isBlogLoading) {
      return <Loader />
    }  
    
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
            flexDirection="column" 
            alignItems="flex-start" 
            justifyContent="end" 
            gap='2' 
            p={{ base: "10px", md: "30px" }}
          >
            <h2>{postTitle}</h2>
            <Flex 
              gap="2" 
              justifyContent="left"
            >
              {renderSinks(postSink)}
            </Flex>
            <Flex w="100%">
                <Box 
                  onClick={openModal} 
                  className="readMore" 
                  cursor="pointer"
                >
                  Read More
                </Box>
                <Spacer />
                <Flex 
                  alignItems="center" 
                  flexWrap="wrap" 
                  gap="8px"
                >
                  {postDate} <CalendarIcon />
                </Flex>
            </Flex>
          </Flex>
        </Flex> 

        <Flex display={display} w="100vw" h="100vh" bgColor="rgba(18,18,26,0.8)" zIndex={1000} pos="fixed" top="50" right="0" overflowY="auto" px={{ base: "10px", sm: "40px", md: "50px", lg: "100px" }} py={{ base: "10px", sm: "40px", md: "50px", lg: "100px" }}>
          <Flex className="blogExpandedContainer">
            <IconButton 
                size="lg"
                icon={ <ArrowBackIcon />}
                variant="ghost"
                position="fixed"
                onClick={closeModal}
            />
            <BlogPage postTitle={postTitle} postLocationImg={postLocationImg} postLocation={postLocation} postFood={postFood} postService={postService} postValue={postValue} postOverall={postOverall} postSink={postSink} postAtmosphere={postAtmosphere} postFoodImg={postFoodImg} postDate={postDate} />           
          </Flex>
        </Flex>
      </>
  )
}

export default Post