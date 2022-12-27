import React, { useState } from "react"
import { Flex, Box, Spacer, IconButton } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    
    // Change Color of Navbar    
    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)
    
    // Open and Close Menu
    const [display, changeDisplay] = useState("none")

    return (
        <>
        <Flex className={navbar ? "navbarActive" : "navbar"} flexDirection="row" alignItems="center">
            <Flex display={{ base: "none", sm: "flex"}} zIndex={20} w="100vw" pos="fixed" top="0" overflowY="auto" flexDirection="row" alignItems="center">
                <Box opacity="0">Menu</Box>
                <IconButton
                    size="sm"
                    m={2}
                    mr={10}
                    icon={<HamburgerIcon />}
                    opacity="0"
                />
                
                <Spacer  />
                <CustomLink className="siteName" onClick={() => changeDisplay("none")} to="/">chasing ravens</CustomLink>
                <Spacer />
                
                <Box onClick={() => changeDisplay("flex")}>Menu</Box>
                <IconButton
                    size="sm"
                    m={2}
                    mr={10}
                    
                    icon={<HamburgerIcon />}
                    variant="ghost"
                    onClick={() => changeDisplay("flex")}
                />
            </Flex>

            <Flex display={{ base: "flex", sm: "none"}} zIndex={20} w="100vw" pos="fixed" top="0" overflowY="auto" flexDirection="row" alignItems="center">
                <Box m={4} className="siteName">chasing ravens</Box>
                <Spacer />
                
                <Box>Menu</Box>
                <IconButton
                    size="sm"
                    m={2}
                    mr={4}
                    
                    icon={<HamburgerIcon />}
                    variant="ghost"
                    onClick={() => changeDisplay("flex")}
                />
            </Flex>

            <Flex display={display} w="100vw" bgColor="#000" zIndex={20} h="100vh" pos="fixed" top="0" right="0" overflowY="auto" flexDirection="column">
                <Flex display={{ base: "none", sm: "flex"}} flexDirection="row" alignItems="center">
                    <Box opacity="0">Menu</Box>
                    <IconButton 
                        className="navDisplay"
                        m={2}
                        size="sm"
                        icon={ <CloseIcon />}
                        variant="ghost"
                        opacity="0"
                    />

                    <Spacer />
                    <CustomLink className="siteName" onClick={() => changeDisplay("none")} to="/">chasing ravens</CustomLink>
                    <Spacer />

                    <Box onClick={() => changeDisplay("none")}>Menu</Box>
                    <IconButton 
                        m={2}
                        size="sm"
                        icon={ <CloseIcon />}
                        variant="ghost"
                        onClick={() => changeDisplay("none")}
                    />
                </Flex>

                <Flex display={{ base: "flex", sm: "none"}} flexDirection="row" alignItems="center">
                    <Box m={4} className="siteName">chasing ravens</Box>
                    <Spacer />

                    <Box onClick={() => changeDisplay("none")}>Menu</Box>
                    <IconButton 
                        m={2}
                        size="sm"
                        icon={ <CloseIcon />}
                        variant="ghost"
                        onClick={() => changeDisplay("none")}
                    />
                </Flex>
                
                <Flex className="navLinks" w="50vw" flexDirection="column" justifyContent="left" zIndex="100">
                    <CustomLink onClick={() => changeDisplay("none")} to="/">Home</CustomLink>
                    <CustomLink onClick={() => changeDisplay("none")} to="/about">About</CustomLink>
                    <CustomLink onClick={() => changeDisplay("none")} to="/blogs">Blogs</CustomLink>
                </Flex>

                <Box position="absolute" w="100vw" top="20vh" zIndex="1"> 
                        <Flex className="wordmark" flexDirection="row">
                            <Box>r</Box>
                            <Spacer />
                            <Box>i</Box>
                            <Spacer />
                            <Box>&</Box>
                            <Spacer />
                            <Box>c</Box>
                            <Spacer />
                            <Box>l</Box>
                        </Flex>
                    </Box>

                    <Box m={5} position="absolute" bottom="0" right="0" color="rgba(255,255,255,0.1)">
                        <Link href="https://www.raviniodesigns.com/" display="flex">
                            Designed and Built by Ravin Io
                            <ExternalLinkIcon ml={2} />
                        </Link>
                    </Box>
            </Flex>
        </Flex>
    </>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Box className={ isActive ? "active" : ""} >
            <Link to={to} {...props}>{children}</Link>
        </Box>
    )
}