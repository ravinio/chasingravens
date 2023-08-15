import React from "react"
import { Flex, Grid, GridItem  } from "@chakra-ui/react"
import SquareOne from "./Blogs/SquareOne"
import SquareTwo from "./Blogs/SquareTwo"
import SquareThree from "./Blogs/SquareThree"
import SquareFour from "./Blogs/SquareFour"
import SquareFive from "./Blogs/SquareFive"

const Featured = () => {
    return (
        <>
            <Grid className="wrapper" h="100vh" templateRows={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={3} py={3} px={3}>
                {/* Ika */}
                <GridItem 
                    className="featuredBlogSqr" 
                    rowSpan={1}
                >
                    <SquareOne />
                </GridItem>

                {/* White Mulberries */}
                <GridItem 
                    className="featuredBlogSqr" 
                    rowSpan={1}
                >
                    <SquareTwo />
                </GridItem>
            
                {/* Byward Kitchen & Bar */}
                <GridItem 
                    className="featuredBlogSqr" 
                    rowSpan={{ base: "1", sm: "2", lg: "3" }}
                >
                    <SquareThree />
                </GridItem>

                {/* Pinthouse Brewing */}
                <GridItem 
                    className="featuredBlogSqr" 
                    rowSpan={{ base: "1", sm: "1", lg: "2" }}
                >                    
                    <SquareFour />
                </GridItem>

                {/* Cibo Vino */}
                <GridItem 
                    className="featuredBlogSqr" 
                    rowSpan={{ base: "1", sm: "1", lg: "2" }}
                >
                    <SquareFive />
                </GridItem>

                {/* More Blogs */}
                <GridItem colSpan={{ base: "1", sm: "2", lg: "3" }}>
                    <Flex h="100%" flexDirection="column" justifyContent="end" alignItems="center" p={5}>
                        <h2 style={{ color: "#fff" }}>Find More Blogs Here</h2>
                        <div className="btnDisplay">
                            <a href="/Blogs" className="redbtn">Read Now</a>
                        </div>
                    </Flex>
                </GridItem>
            </Grid>
        </>
    )
}

export default Featured
