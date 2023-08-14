import React, { useState, useContext } from "react"
import { Context } from "../../context/Context"
import Loader from "../Loader/Loader"
import { Flex, Spacer, Box, IconButton } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { CalendarIcon } from "@chakra-ui/icons"
import { TbBat } from "react-icons/tb";
import BlogPage from "../BlogPage/BlogPage"

const renderStarIcons = (rating) => {
  const starIcons = [];
  for (let i = 1; i <= rating; i++) {
    starIcons.push(
      <TbBat
        //className="sinkEmphasis"
        key={i}
        color="FF2173"
        w={4}
        h={4}
      />
    );
  }
  return starIcons;
};

const Post = (props) => {
    // Open and Close Menu
    const [display, changeDisplay] = useState("none")

    const { isBlogLoading } = useContext(Context)

    if (isBlogLoading) {
      return <Loader />
    }

    const { postTitle, postLocationImg, postFoodImg, postDate, postLocation, postAtmosphere, postFood, postService, postValue, postOverall, postSink } = props
  
    return (
      <>
        <Flex className="postSquare" style={{ backgroundImage: `url(${postLocationImg})`}} flexDirection="column" justifyContent="end" h={{ base: "25vh", sm: "35vh", md: "45vh" }}>
            <Flex className="squareContent" flexDirection="column" justifyContent="end" gap='2' p={{ base: "10px", md: "30px" }}>
              <h2>{postTitle}</h2>
              <Flex gap="2" justifyContent="left">{renderStarIcons(postSink)}</Flex>
              <Flex w="100%">
                  <Box onClick={() => changeDisplay("flex")} className="readMore" cursor="pointer">Read More</Box>
                  <Spacer />
                  <Flex alignItems="center" flexWrap="wrap" gap="8px">
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
                color="#FF2173"
                onClick={() => changeDisplay("none")}
            />
            <BlogPage postTitle={postTitle} postLocationImg={postLocationImg} postLocation={postLocation} postFood={postFood} postService={postService} postValue={postValue} postOverall={postOverall} postSink={postSink} postAtmosphere={postAtmosphere} postFoodImg={postFoodImg} postDate={postDate} />           
          </Flex>
        </Flex>
      </>
  )
}

export default Post