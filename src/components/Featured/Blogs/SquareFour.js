import React, { useState } from "react"
import { Flex, Box, IconButton, Center, Divider } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"

const FeaturedBlog = () => {
      // Open and Close Menu
      const [display, changeDisplay] = useState("none")

    return (
      <>
        <Flex h="100%" flexDirection="column" justifyContent="end" alignItems="center" p={5}>
            <h2>Pinthouse Brewing</h2>
            <div className="btnDisplay">
                {/* <a href="/" className="whitebtn">Read Now</a> */}
                <Box className="whitebtn" onClick={() => changeDisplay("flex")} cursor="pointer">Read Now</Box>
            </div>
        </Flex>


        <Flex display={display} w="100vw" h="100vh" bgColor="rgba(18,18,26,0.8)" zIndex={1000} pos="fixed" top="50" right="0" overflowY="auto" px={{ base: "10px", sm: "40px", md: "50px", lg: "100px" }} py={{ base: "10px", sm: "40px", md: "50px", lg: "100px" }}>
          <Flex className="blogExpandedContainer" w="100vw">
            <IconButton 
                size="lg"
                icon={ <ArrowBackIcon />}
                variant="ghost"
                position="fixed"
                color="#FF2173"
                onClick={() => changeDisplay("none")}
            />

            <Flex className="blogExpanded" flexDirection="column" w="100%">  
                <Flex flexDirection="column" justifyContent="center" p={{ base: "20px", sm: "40px" }}>
                    <h4>1/6/2023</h4>
                    <h2>Pinthouse Brewing</h2>
                    <h3 className="sinkEmphasis">Sink Rating: 4</h3>
                    <Center>
                        <Divider className="dividerStyle" orientation="horizontal" />
                    </Center>
                </Flex>  
                <Flex flexDirection="column" gap={{ base: "20px", sm: "35px", md: "50px" }}>     
                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Atmosphere</h2>
                        <div className="sectionParagraph">
                        - Loved it, was a tastefully done. 
                        - Its in a huge brewery with two sections: A huge open area that was slightly outdoors that was very pet friendly and an indoor more intimate bar area.
                        - Pretty packed but not overwhelming and spread out, you can enjoy the atmosphere of people with having to endure hearing their conversations
                        - Great music and perfect lighting with lots of plants
                        - Chase: 8 Ravin: 7
                        </div>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Service</h2>
                        <div className="sectionParagraph">
                        - Had to provide multiple ID’s because they didn’t trust the NE one Chase had
                        - Bartender was helpful, out of the 12 drinks we ordered, he picked out 9 of them
                        - Not a lot of interaction at the table, you order and pay through an app
                        - Chase: 7 Ravin: 5                        
                        </div>
                    </Box>

                    <div className="foodImg">
                    </div>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Food</h2>
                        <div className="sectionParagraph">
                        - Ordered 2 deep dish pizzas and they were great!
                        - The ricotta was sweet, they used imaginative ingredients, and the pizzas were cooked perfectly
                        - Chase: 7 Ravin: 7                       
                        </div>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Value</h2>
                        <div className="sectionParagraph">
                        For 2 beer flights, 2 pints, and 2 pizzas split between 4 people, it was a reasonable price.
                        </div>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h4>The Overall Rating:</h4> 
                        <h2 className="sinks">4 Sinks</h2>
                        <Center>
                            <Divider className="dividerStyle" orientation="horizontal" />
                        </Center>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }} mb="50px">
                      <div className="sectionParagraph">
                      Would love to make this a go to spot for hanging out with friends.
                      </div>
                    </Box>
                </Flex>       
            </Flex>          
          </Flex>
        </Flex>
      </>
    )
}

export default FeaturedBlog
