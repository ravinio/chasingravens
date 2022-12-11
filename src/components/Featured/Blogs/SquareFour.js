import React, { useState } from 'react'
import { Flex, Box, IconButton, Center, Divider } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

const FeaturedBlog = () => {
      // Open and Close Menu
      const [display, changeDisplay] = useState('none')

    return (
      <>
        <Flex h='100%' flexDirection='column' justifyContent='end' alignItems='center' p={5}>
            <h2>Early Bird</h2>
            <div className='btnDisplay'>
                {/* <a href='/' className='whitebtn'>Read Now</a> */}
                <Box className='whitebtn' onClick={() => changeDisplay('flex')} cursor='pointer'>Read Now</Box>
            </div>
        </Flex>


        <Flex display={display} w='100vw' h='100vh' bgColor='rgba(18,18,26,0.8)' zIndex={1000} pos='fixed' top='50' right='0' overflowY='auto' px={{ base: '10px', sm: '40px', md: '50px', lg: '100px' }} py={{ base: '10px', sm: '40px', md: '50px', lg: '100px' }}>
          <Flex className='blogExpandedContainer' w='100vw'>
            <IconButton 
                ariaLabel='Close Icon'
                size='lg'
                icon={ <ArrowBackIcon />}
                variant='ghost'
                position='fixed'
                color='#FF2173'
                onClick={() => changeDisplay('none')}
            />

            <Flex className='blogExpanded' flexDirection='column' w='100%'>  
                <Flex flexDirection='column' justifyContent='center' p={{ base: '20px', sm: '40px' }}>
                    <h4>9/11/2012</h4>
                    <h2>Early Bird</h2>
                    <h3 className='sinkEmphasis'>Sink Rating: 4</h3>
                    <Center>
                        <Divider className='dividerStyle' orientation='horizontal' />
                    </Center>
                </Flex>  
                <Flex flexDirection='column' gap={{ base: '20px', sm: '35px', md: '50px' }}>     
                    <Box mx={{ base: '20px', sm: '60px', md: '100px', lg: '170px' }}>
                        <h2 className='sectionTitle'>Atmosphere</h2>
                        <div className='sectionParagraph'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </Box>

                    <Box mx={{ base: '20px', sm: '60px', md: '100px', lg: '170px' }}>
                        <h2 className='sectionTitle'>Service</h2>
                        <div className='sectionParagraph'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </div>
                    </Box>

                    <div className='foodImg'>
                    </div>

                    <Box mx={{ base: '20px', sm: '60px', md: '100px', lg: '170px' }}>
                        <h2 className='sectionTitle'>Food</h2>
                        <div className='sectionParagraph'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </Box>

                    <Box mx={{ base: '20px', sm: '60px', md: '100px', lg: '170px' }}>
                        <h2 className='sectionTitle'>Value</h2>
                        <div className='sectionParagraph'>
                          Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </Box>

                    <Box mx={{ base: '20px', sm: '60px', md: '100px', lg: '170px' }}>
                        <h3 className='sinkSection'>The Overall Rating: 4 Sinks</h3>
                    </Box>

                    <Box mx={{ base: '20px', sm: '60px', md: '100px', lg: '170px' }} mb='50px'>
                      <div className='sectionParagraph'>
                        Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
