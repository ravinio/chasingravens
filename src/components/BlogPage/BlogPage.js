import React, { useContext } from "react"
import { Context } from "../../context/Context"
import Loader from "../Loader/Loader"
import { Flex, Box, Divider, Center  } from "@chakra-ui/react"
import renderSinks from "../Sinks/SinkRating";

const BlogPage = (props) => {
    const {isBlogLoading} = useContext(Context)

    if (isBlogLoading) {
        return <Loader />
    }

    const { postTitle, postFoodImg, postDate, postAtmosphere, postFood, postService, postValue, postOverall, postSink } = props

    return (
            <Flex className="blogExpanded" flexDirection="column" w="100%">  
                <Flex flexDirection="column" justifyContent="center" p={{ base: "20px", sm: "40px" }}>
                    <h4>{postDate}</h4>
                    <h2>{postTitle}</h2>
                    <Flex gap="2" justifyContent="center">{renderSinks(postSink)}</Flex>
                    <Center>
                        <Divider className="dividerStyle" orientation="horizontal" />
                    </Center>
                </Flex>  
                <Flex flexDirection="column" gap={{ base: "20px", sm: "35px", md: "50px" }}>     
                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Atmosphere</h2>
                        <div className="sectionParagraph" dangerouslySetInnerHTML={{__html: postAtmosphere}}/>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Service</h2>
                        <div className="sectionParagraph" dangerouslySetInnerHTML={{__html: postService}}/>
                    </Box>

                    <div className="foodImg" style={{ backgroundImage: `url(${postFoodImg})`}}>
                    </div>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Food</h2>
                        <div className="sectionParagraph" dangerouslySetInnerHTML={{__html: postFood}}/>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Value</h2>
                        <div className="sectionParagraph" dangerouslySetInnerHTML={{__html: postValue}}/>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h4>The Overall Rating:</h4> 
                        <h2 className="sinks">{postSink} Sinks</h2>
                        <Center>
                            <Divider className="dividerStyle" orientation="horizontal" />
                        </Center>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }} mb="50px" pb="50px">
                        <div className="sectionParagraph" dangerouslySetInnerHTML={{__html: postOverall}}/>
                    </Box>
                </Flex>       
            </Flex>
    )
}

export default BlogPage
