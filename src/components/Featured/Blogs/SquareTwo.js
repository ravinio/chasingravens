import React, { useState } from "react"
import { Flex, Box, IconButton, Center, Divider } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"

const FeaturedBlog = () => {
      // Open and Close Menu
      const [display, changeDisplay] = useState("none")

    return (
      <>
        <Flex h="100%" flexDirection="column" justifyContent="end" alignItems="center" p={5}>
            <h2>White Mulberries</h2>
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
                    <h4>04/05/2023</h4>
                    <h2>White Mulberries</h2>
                    <h3 className="sinkEmphasis">Sink Rating: 5</h3>
                    <Center>
                        <Divider className="dividerStyle" orientation="horizontal" />
                    </Center>
                </Flex>  
                <Flex flexDirection="column" gap={{ base: "20px", sm: "35px", md: "50px" }}>     
                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Atmosphere</h2>
                        <div className="sectionParagraph">
                          This café was positioned looking at St. Kathrine's Docks with a bunch of nice looking boats and yachts, to say the least it is very scenic. Inside is modern and cozy with great music.
                          - Chase: 8 Ravin: 8                        
                        </div>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Service</h2>
                        <div className="sectionParagraph">
                          DISCLAIMER: In the UK, the culture surrounding tipping differs from that in the US. Unlike in the US, where tipping is customary and often considered an integral part of the service industry, tipping in the UK is not as prevalent or expected. Consequently, UK servers may appear more reserved or less focused on constantly engaging with customers, as they tend to prioritize efficient service without excessive small talk.
                          Due to this difference, we are rating this category on a scale of 1-3: 1 is awful and they were rude, 2 is fine and got the job done, and 3 is they talked to us and smiled.                         
                          - Chase: 2 Ravin: 2
                        </div>
                    </Box>

                    <div className="foodImg">
                    </div>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Food</h2>
                        <div className="sectionParagraph">
                          Chase ordered the Truffle Bacon & Rich Yolk Sunny Side Eggs that came with THE BEST MUSHROOM WE HAVE EVER HAD. Ravin's americano and croissant was also fantastic but the mushroom is something we will talk about for a long time. It was so damn good, like really.
                          - Chase: 10 Ravin: 10                        
                        </div>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h2 className="sectionTitle">Value</h2>
                        <div className="sectionParagraph">
                          Although it was expensive for a coffee shop, we would pay a lot more to have that mushroom again. Definitely one of the best breakfast we have ever had, possibly in our lives.                        
                        </div>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }}>
                        <h4>The Overall Rating:</h4> 
                        <h2 className="sinks">5 Sinks</h2>
                        <Center>
                            <Divider className="dividerStyle" orientation="horizontal" />
                        </Center>
                    </Box>

                    <Box mx={{ base: "20px", sm: "60px", md: "100px", lg: "170px" }} mb="50px">
                      <div className="sectionParagraph">
                        I mean..... it has to be right!? We will have dreams about the perfectly fried truffle bacon, the warm runny yolk from the eggs, the organic sourdough, roasted leek and avocados, the flakiest croissant we've ever met, and that absolutely amazing chestnut mushroom.                      
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
