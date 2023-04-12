import React from "react"
import BlogIntroduction from "../components/Introduction/BlogIntroduction"
// import SearchPost from "../components/SearchBlogs/SearchBlogs"
import PostContainer from "../components/Post/PostContainer"

const Blogs = () => {
    return (
      <div 
        style={{ backgroundColor: "rgba(18, 18, 26,1)" }}
      >
        <BlogIntroduction />
        {/* <SearchPost /> */}

        <div 
          //style={{ marginTop: "-180px", zIndex: "100", position:"relative" }}
        >
          {/* <SearchPost /> */}
          <PostContainer />
        </div>
      </div>
    )
}

export default Blogs
