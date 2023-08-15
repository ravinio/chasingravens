import React, { useContext } from "react"
import { Context } from "../../../context/Context"
import { Flex } from "@chakra-ui/react"
import Loader from "../../../components/Loader/Loader"
import Post from "../Post/Post"

const FeaturedBlog = () => {
    const {blogPost, isBlogLoading} = useContext(Context)

    if (isBlogLoading) {
        return <Loader />
    }

    // Post ID for White Mulberries
    const targetPostId = "0dnIeQvPxXpsMW1xbso0M";

    const specificPost = blogPost.find((item) => item.id === targetPostId);

    if (!specificPost) {
      return null;
    }

    return (
      <Flex 
        className="featured" 
        height="100%" 
        key={specificPost.id}
      >
        <Post
          postTitle={specificPost.postTitle}
          postFoodImg={specificPost.postFoodImg}
          postLocation={specificPost.postLocation}
          postFood={specificPost.postFood}
          postService={specificPost.postService}
          postValue={specificPost.postValue}
          postOverall={specificPost.postOverall}
          postSink={specificPost.postSink}
          postAtmosphere={specificPost.postAtmosphere}
          postLocationImg={specificPost.postLocationImg}
          postDate={specificPost.postDate}
        />
      </Flex>
    )
}

export default FeaturedBlog