import React from "react"
import { Flex, Button, Link, Box  } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const Footer = () => {
  return (
    <Flex className="footerBackground" alignItems={{ base: "center", md: "end" }} flexDirection={{ base: "column", md: "row" }}>      
        <Flex my={{ base: 2, md: 8 }} gap={5}>
            <a href="/">
                <Button 
                    p={0}
                    variant="ghost"
                    color="rgba(255,255,255,0.7)"
                >
                    Home
                </Button>
            </a>

            <a href="/About">
                <Button 
                    p={0}
                    variant="ghost"
                    color="rgba(255,255,255,0.7)"
                >
                    About
                </Button>
            </a>

            <a href="/Blogs">
                <Button 
                    p={0}
                    variant="ghost"
                    color="rgba(255,255,255,0.7)"
                >
                    Blogs
                </Button>
            </a>
        </Flex>


        <Box my={{ base: 2, md: 8 }} py={2} color="rgba(255,255,255,0.7)" fontSize={{ base: "11px", md: "14px"}}>
            <Link href="https://www.raviniodesigns.com/" display="flex" alignItems="center">
                Designed and Built by Ravin Io
                <ExternalLinkIcon ml={2} />
            </Link>
        </Box>
   </Flex>
  )
}

export default Footer
