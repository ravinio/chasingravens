import React from "react"
import { Flex  } from "@chakra-ui/react"

const BlogIntroduction = () => {
  return (
    <Flex className="blogWrap" flexDirection="column" alignItems="center" justifyContent="start" zIndex="500">
      <h2>All Blogs</h2>
      <p>Every blog includes a 1 - 10 scale rating on <strong>Atmosphere</strong>, <strong>Food</strong>, <strong>Service</strong>, and <strong>Value</strong>. The overall rating is then calculated on a <strong className="sinkEmphasis">Sink</strong> scale of 1 to 5 sinks.</p>
    </Flex>
  )
}

export default BlogIntroduction
