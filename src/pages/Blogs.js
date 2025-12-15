import React from "react"
import { Outlet } from "react-router-dom"
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
        <Outlet />
      </div>
    )
}

export default Blogs
