import React from "react"
import { Flex, Box  } from "@chakra-ui/react"

const Introduction = () => {    
    return (
        <Flex className="introWrapper" alignItems="center" justifyContent="center">
            <Box maxW="900px" flexDirection="column">
                <h2 className="introTitle">A Culinary Chronicle</h2>
                <br></br>
                <p>
                    Welcome fellow food enthusiasts! We're delighted to have you join us on our humble culinary odyssey through the world of flavors and delights. This isn't your typical food blog; it's a labor of love, a virtual treasure chest of the delectable places we've explored.
                    <br></br><br></br> 
                    Our mission isn't to be the biggest or most visited food blog out there. Instead, we've created this cozy corner of the internet as a personal haven for the exceptional spots my partner and I stumble upon. It's a digital diary of those remarkable eateries where every bite feels like a celebration, every aroma a memory in the making.                    <br></br><br></br> 
                </p>
            </Box>
        </Flex>
    )
}

export default Introduction