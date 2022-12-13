import React from "react"
import { Flex, Box  } from "@chakra-ui/react"

const Introduction = () => {    
    return (
        <Flex className="introWrapper" alignItems="center" justifyContent="center">
            <Box maxW="900px" flexDirection="column">
                <h2 className="introTitle">For My Bean</h2>
                <br></br>
                <p>This website was created for the sole purpose of making Chase Lee happy. <br></br><br></br> Chase and I (his partner) periodically visit multiple restaurants, bars, and other food locations from chains to mom-and-pop shops together. Here is where all our most favorite and rememberable places to the most unappealing and regretful one"s ratings live. If you’re here on this site and you’re not Chase, welcome!<br></br><br></br> Why are you here??? Stay a while and obsess over food with us.</p>
            </Box>
        </Flex>
    )
}

export default Introduction