import React from "react"
import BlogIntroduction from "../components/Introduction/BlogIntroduction"
import PostContainer from "../components/Post/PostContainer"

const Blogs = () => {
    return (
      <div 
        style={{ backgroundColor: "rgba(18, 18, 26,1)" }}
      >
        <BlogIntroduction />

        <div>
          <PostContainer />
        </div>
      </div>
    )
}

export default Blogs
